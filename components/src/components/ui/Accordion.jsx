/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleAccordionActive = (nextIdx) => {
    setExpandedIndex((currentExpandedIdx) => {
      if (currentExpandedIdx === nextIdx) {
        return -1;
      } else {
        return nextIdx;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span>{isExpanded ? <FaChevronDown /> : <FaChevronRight />}</span>
    );

    return (
      <li key={item.id}>
        <div
          className="flex cursor-pointer items-center justify-between border-b p-3"
          onClick={() => handleAccordionActive(index)}
        >
          {item.label}
          <span>{icon}</span>
        </div>
        {isExpanded && <div className="bg-gray-50 p-5">{item.content}</div>}
      </li>
    );
  });

  return <ul className="rounded border-x border-t mx-auto w-1/2">{renderedItems}</ul>;
};

export default Accordion;
