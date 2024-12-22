import classNames from "classnames";
import PropTypes from "prop-types";

const Panel = ({ children, className, ...rest }) => {
  const classes = classNames(
    "border w-full rounded bg-white shadow p-3",
    className,
  );
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  rest: PropTypes.any,
};

export default Panel;
