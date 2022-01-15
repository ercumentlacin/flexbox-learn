import PropTypes from 'prop-types';

function FlexItems({ itemNumber, itemStyle }) {
  return (
    <div style={itemStyle}>
      {itemNumber}
      {' '}
      . Kutu
    </div>
  );
}

FlexItems.propTypes = {
  itemNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  itemStyle: PropTypes.shape({}).isRequired,
};

export default FlexItems;
