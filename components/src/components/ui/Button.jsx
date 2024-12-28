import { twMerge } from "tailwind-merge";
import classnames from "classnames";
import PropTypes from "prop-types";
const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = twMerge(
    classnames(rest.className, "flex items-center px-3 py-1.5 border justify-center", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }),
  );

  if (primary && secondary)
    throw new Error("A button can be either primary or secondary");

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  rest: PropTypes.shape({
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  }),
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      !!Number(danger);

    if (count > 1)
      return new Error(
        `We can have only one variant for the button among all the variants.`,
      );
  },
};

export default Button;
