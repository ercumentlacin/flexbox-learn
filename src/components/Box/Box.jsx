import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Box({ number }) {
  return (
    <div className={`box box-${number}`}>
      {number}
      . Kutu
    </div>
  );
}

Box.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default memo(Box);
