import {
  useState, useRef, useEffect, useMemo, memo,
} from 'react';
import PropTypes from 'prop-types';

import styles from './chapter.module.css';
import Markdown from '../MarkDown';
import Box from '../Box';

import { createArray, getStyles, stringToStyleObject } from '../../helpers/utils';
import FlexContainer from '../FlexContainer/FlexContainer';

const INITIAL_STYLES = {
  box1: {},
  box2: {},
  box3: {},
  box4: {},
};

function Chapter(props) {
  const {
    data, onChangeSuccess, onChangeError, onChangeReadOnly, isCorrect, isError,
  } = props;
  const {
    answer, content, description, question, title, initialValue, readOnly,
  } = data;

  const [inputValue, setInputValue] = useState(initialValue);
  const [isAnswerShow, setIsAnswerShow] = useState(false);
  const [containerStyle, setContainerStyle] = useState({});
  const [{
    box1, box2, box3, box4,
  }, setAllStyles] = useState(INITIAL_STYLES);

  const inputRef = useRef(null);

  const handleChangeInput = (event) => !readOnly && setInputValue(event.target.value);

  const handlleShowAnswer = () => setIsAnswerShow((prev) => !prev);

  // should be focus input after render
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // set box styles
  useEffect(() => {
    if (inputValue?.match(/box1/g)?.length > 0) {
      const re = /(div.box1 {\n {2}.*\n\})\s*.*(div.box2 {\n {2}.*\n})\s*.*(div.box3 {\n {2}.*\n})\s*.*(div.box4 {\n {2}.*\n})/g;
      let [, box1_, box2_, box3_, box4_] = re.exec(inputValue);
      box1_ = stringToStyleObject(getStyles(box1_));
      box2_ = stringToStyleObject(getStyles(box2_));
      box3_ = stringToStyleObject(getStyles(box3_));
      box4_ = stringToStyleObject(getStyles(box4_));
      setAllStyles({
        box1: box1_,
        box2: box2_,
        box3: box3_,
        box4: box4_,
      });
    }
  }, [inputValue]);

  // isCorrect and isError should be false after render
  useEffect(() => {
    onChangeSuccess(false);
    onChangeError(false);
    onChangeReadOnly(readOnly);
  }, []);

  // check answer is correct
  useEffect(() => {
    if (inputValue === answer) {
      onChangeError(false);
      onChangeSuccess(true);
    } else {
      onChangeSuccess(false);
    }
  }, [inputValue]);

  // handle keydown for correct answer
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.shiftKey && event.keyCode === 66) {
        handlleShowAnswer();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // set container style
  useEffect(() => {
    const cssValues = inputValue
      .replace(/div.container\s+{/g, '')
      .replace(/}/g, '').replace(/\n/g, '');

    const cssValuesArray = cssValues.split(';');
    const cssValuesObject = {};
    cssValuesArray.filter(Boolean).forEach((cssValue) => {
      const [key, value] = cssValue.split(':');
      if (!key || !value) return;
      cssValuesObject[key.trim()] = value ? value.toString().trim() : '';
    });
    // ! TODO: fix this bug
    setContainerStyle(cssValuesObject);
  }, [inputValue]);

  const textAreaClass = useMemo(() => (
    [
      styles.textArea,
      (isCorrect && !isError)
        ? styles.correct
        : styles.notCorrecct,
    ].join(' ')
  ), [isCorrect, isError]);

  return (
    <div className={styles.cahpterWrapper}>
      <h1>{title}</h1>

      { !!description && (
        <div className={styles.description}>
          {/* {description} */}
          <Markdown markdownText={description} />
        </div>
      )}

      { !!question && (
        <div className={styles.question}>
          <span className={styles.subTitle}>
            soru
          </span>
          {question}
        </div>
      )}

      <div className={styles.content}>
        <span className={styles.subTitle}>
          div.container
        </span>

        {!!content && (
          <div style={containerStyle}>
            {createArray(content).map((item) => <Box key={item} number={item} />)}
          </div>
        )}

        {!content && (
          <FlexContainer
            box1={box1}
            box2={box2}
            box3={box3}
            box4={box4}
          />
        )}

      </div>

      <div className={styles.answer}>
        <span className={styles.subTitle}>
          cevap
        </span>

        <div className={styles.editor}>
          <textarea
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={handleChangeInput}
            className={textAreaClass}
            rows={6}
          />
          <Markdown markdownText={inputValue} type="language-css" />
        </div>

        <button type="button" onClick={handlleShowAnswer} className={styles.answerButton}>
          <span>Cevabı göster</span>
          <span className={styles.kdb}>
            <kbd>SHIFT</kbd>
            <span>+</span>
            <kbd>B</kbd>
          </span>
        </button>

        {
          isAnswerShow && (
            <div className={styles.answerContent}>
              <Markdown markdownText={answer} type="language-css" />
            </div>
          )
        }

      </div>
    </div>
  );
}

Chapter.propTypes = {
  data: PropTypes.shape({
    answer: PropTypes.string.isRequired,
    content: PropTypes.number.isRequired,
    description: PropTypes.element.isRequired,
    question: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    initialValue: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
  }).isRequired,
  onChangeSuccess: PropTypes.func.isRequired,
  onChangeError: PropTypes.func.isRequired,
  onChangeReadOnly: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default memo(Chapter);
