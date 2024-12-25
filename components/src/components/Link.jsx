import PropTypes from "prop-types";
import classNames from "classnames";

// Local imports
import useNavigation from "../hooks/use-navigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames(
    "mr-2",
    "text-blue-500",
    "hover:underline",
    "cursor-pointer",
    className,
    currentPath === to && activeClassName,
  );

  const handleClick = (e) => {
    // If the user is holding down the command key (mac) or control key (windows), don't do anything
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
};

export default Link;
