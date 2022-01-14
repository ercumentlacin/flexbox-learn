import { memo } from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ currentStep, chapterListLength }) {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${(currentStep / chapterListLength) * 100}%` }}
        aria-valuenow={currentStep}
        aria-valuemin={0}
        aria-valuemax={chapterListLength}
      >
        {`${currentStep}/${chapterListLength}`}
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
  chapterListLength: PropTypes.number.isRequired,
};

export default memo(ProgressBar);
