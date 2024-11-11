import PropTypes from "prop-types";

const GlassCard = ({ children, className = '', ...props }) => {
  return (
    <div id="glass-card" className={`w-96 h-96 bg-zinc-500/30 border rounded backdrop-blur-sm ${className}`} {...props}>
      {children}
    </div>
  );
};



GlassCard.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default GlassCard;