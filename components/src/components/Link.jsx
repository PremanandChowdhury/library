import PropTypes from "prop-types";
import { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e) => {
    // If the user is holding down the command key (mac) or control key (windows), don't do anything
    if (e.metaKey || e.ctrlKey) {
      return;
    }
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
