import PropTypes from "prop-types";

export const ProgressBar = ({
  progressWidth,
  progressColor,
  className = "",
  ...props
}) => {
  return (
    <div
      id="progress-bar"
      className={`px-[1.5px] flex justify-start items-center w-[200px] h-[8px] bg-pb-slate py-2 rounded-[10px] ${className}`}
      {...props}
    >
      <div
        className={`${progressColor} h-[13px] rounded-[10px]`}
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  progressWidth: PropTypes.number.isRequired, // Set as number
  progressColor: PropTypes.string.isRequired,
};
