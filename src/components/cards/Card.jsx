import PropTypes from "prop-types";

const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`w-96 h-96 bg-pb-darker rounded ${className}`} {...props}>
      {children}
    </div>
  );
};



Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default Card;