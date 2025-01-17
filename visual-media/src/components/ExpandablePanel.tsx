import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

interface Props {
  header: JSX.Element;
  error?: null | Error;
  children: JSX.Element;
}

const ExpandablePanel: React.FC<Props> = ({ header, error, children }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleOpen = (): void => {
    setExpanded(!expanded);
  };

  return (
    <div className={`mb-2 border rounded mt-2 ${error && "bg-red-100"}`}>
      <div className="flex p-2 justify-between items-center border">
        <div className="flex gap-3">{header}</div>
        <div onClick={handleOpen} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
