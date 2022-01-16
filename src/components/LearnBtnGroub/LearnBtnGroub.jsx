import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './learn-btn-groub.module.css';

function LearnBtnGroub({
  onPreviousStep,
  onNextstep,
  isDisablePreviousStep,
  isDisableNextStep,
  isError,
  isCorrect,
  currentStep,
}) {
  const nextButtonClass = useMemo(() => {
    let className = '';
    if (isError && !isCorrect) {
      className = styles.error;
    }

    if (isCorrect) {
      className = styles.correct;
    }

    return (
      [styles.button, className].join(' ')
    );
  }, [isError, isCorrect]);

  return (
    <div className={styles.buttonGroub}>
      <button
        type="button"
        onClick={onPreviousStep}
        disabled={isDisablePreviousStep}
        className={styles.button}
      >
        Önceki
      </button>

      {currentStep < 16 && (
      <button
        type="button"
        onClick={onNextstep}
        disabled={isDisableNextStep}
        className={nextButtonClass}
      >
        Sonraki
      </button>
      )}
    </div>
  );
}

LearnBtnGroub.propTypes = {
  onPreviousStep: PropTypes.func.isRequired,
  onNextstep: PropTypes.func.isRequired,
  isDisablePreviousStep: PropTypes.bool.isRequired,
  isDisableNextStep: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default memo(LearnBtnGroub);
