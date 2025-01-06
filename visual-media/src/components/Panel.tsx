import React, { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Type for the content inside the panel
  className?: string; // Optional className prop
}

const Panel: React.FC<PanelProps> = ({ children, className, ...rest }) => {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
