import PropTypes from 'prop-types';
import svg from '../../assets/svg/character 19.svg';

function Completed({ data }) {
  const { title, description } = data;
  return (
    <section
      className="flex flex-col flex-1 items-center justify-center w-full h-full"
    >
      <img
        src={svg}
        alt="well done"
        className="max-w-sm mb-4 w-full"
      />

      <h1
        className="font-bold text-2xl mb-4"
      >
        {title}
      </h1>
      <p
        className="text-lg mb-4"
      >
        {description}
      </p>
    </section>
  );
}

Completed.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.element.isRequired,
  }).isRequired,
};

export default Completed;
