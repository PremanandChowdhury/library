import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

const Modal = ({ handleClose, children, actionBar, className }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleClose]);

  const classes = classNames(
    "fixed inset-40 p-4 bg-white rounded-md justify-center items-center",
    className,
  );

  return createPortal(
    <div>
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-gray-300 bg-opacity-80"
      ></div>
      <div className={classes}>
        <div className="flex h-full flex-col justify-between">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal-container"),
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  actionBar: PropTypes.node,
  className: PropTypes.string,
};

export default Modal;
