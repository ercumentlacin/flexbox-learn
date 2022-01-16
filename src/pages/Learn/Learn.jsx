import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import Chapter from '../../components/Chapter';
import ProgressBar from '../../components/ProgressBar';
import LearnBtnGroub from '../../components/LearnBtnGroub';
import Completed from '../../components/Completed';

import chapterList from '../../assets/data/chapterList';

import styles from './learn.module.css';
import { getLocalStorage, navigateTop, setLocalStorage } from '../../helpers/utils';

export default function Learn() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);

  const onChangeSuccess = useCallback((val) => setIsCorrect(val), []);
  const onChangeError = useCallback((val) => setIsError(val), []);
  const onChangeReadOnly = useCallback((val) => setIsReadOnly(val), []);

  const onNextstep = () => {
    if (isCorrect || isReadOnly) {
      setCurrentStep((prev) => prev + 1);
      return navigateTop();
    }
    return setIsError(true);
  };

  const onPreviousStep = () => {
    setCurrentStep(currentStep - 1);
    return navigateTop();
  };

  const isDisablePreviousStep = useMemo(() => currentStep === 1, [currentStep]);
  const isDisableNextStep = useMemo(
    () => (currentStep === chapterList.length),
    [currentStep],
  );

  useEffect(() => {
    const local = getLocalStorage('currentStep');
    if (local) {
      setCurrentStep(local);
    }
  }, []);

  useEffect(() => {
    let isCancelled;
    if (isError) {
      isCancelled = setTimeout(() => {
        setIsError(false);
      }, 1000);
    }
    return () => {
      clearTimeout(isCancelled);
    };
  }, [isError]);

  useEffect(() => {
    if (isReadOnly) {
      setIsCorrect(true);
    }
  }, [isReadOnly]);

  useEffect(() => {
    setLocalStorage('currentStep', currentStep);
    return () => {
      setLocalStorage('currentStep', currentStep);
    };
  }, [currentStep]);

  return (
    <div className={styles.learnWrapper}>
      <ProgressBar
        currentStep={currentStep}
        chapterListLength={chapterList.length}
      />

      {
        chapterList
          .filter((chapter) => chapter.step === currentStep)
          .map((chapterItem) => {
            if (chapterItem.isLast) {
              return <Completed key={chapterItem.id} {...chapterItem} />;
            }
            return (
              <Chapter
                key={chapterItem.id}
                {...chapterItem}
                onChangeSuccess={onChangeSuccess}
                onChangeError={onChangeError}
                isCorrect={isCorrect}
                isError={isError}
                onChangeReadOnly={onChangeReadOnly}
              />
            );
          })
      }

      <LearnBtnGroub
        onPreviousStep={onPreviousStep}
        onNextstep={onNextstep}
        isDisablePreviousStep={isDisablePreviousStep}
        isDisableNextStep={isDisableNextStep}
        isError={isError}
        isCorrect={isCorrect}
        currentStep={currentStep}
      />
    </div>
  );
}
