import PropTypes from "prop-types";
import { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
