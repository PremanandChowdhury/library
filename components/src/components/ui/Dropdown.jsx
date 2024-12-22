import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();

  const onOptionClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(false);

    // SELECTED OPTION
    onChange(option);
  };

  useEffect(() => {
    const handler = (event) => {
      if(!divElement.current) {
        return;
      };

      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("click", handler, true); // 3rd parameter is for capturing phase of the event

    return () => {
      document.removeEventListener("click", handler, true); // cleanup
    }
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="cursor-pointer rounded p-1 hover:bg-sky-100 w-full"
        onClick={() => onOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  const handleSelection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={divElement} className="relative w-48">
      <Panel
        className="flex w-full cursor-pointer items-center justify-between"
        onClick={handleSelection}
      >
        {value?.label || "Select an option"}
        <FaChevronDown className="ml-4 text-lg" />
      </Panel>

      {isOpen && (
        <Panel className="absolute top-full mt-2 ">{renderedOptions}</Panel>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
  value: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
