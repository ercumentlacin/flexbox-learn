import PropTypes from 'prop-types';
import styles from './flexContainer.module.css';

function FlexContainer({
  box1, box2, box3, box4,
}) {
  return (
    <div className={styles.flexContainer}>
      <div style={box1} className="box-1">1. Kutu</div>
      <div style={box2} className="box-2">2. Kutu</div>
      <div style={box3} className="box-3">3. Kutu</div>
      <div style={box4} className="box-4">4. Kutu</div>
    </div>
  );
}

FlexContainer.propTypes = {
  box1: PropTypes.shape({}).isRequired,
  box2: PropTypes.shape({}).isRequired,
  box3: PropTypes.shape({}).isRequired,
  box4: PropTypes.shape({}).isRequired,
};

export default FlexContainer;
