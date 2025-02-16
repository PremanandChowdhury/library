import className from "classnames";
import { GoSync } from "react-icons/go";

type AtLeastOne<T, U = keyof T> = U extends keyof T
  ? Pick<T, U> & Partial<Omit<T, U>>
  : never;

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  rounded?: boolean;
}

type ButtonVariants = {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  loading?: boolean;
};

type ButtonProps = BaseButtonProps & AtLeastOne<ButtonVariants>;

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}): JSX.Element => {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border h-8",
    {
      "opacity-80": loading,
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
    }
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
};

export default Button;
