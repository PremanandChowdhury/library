import React from "react";
import classNames from "classnames";

interface skeletonProp {
  times: number;
  className?: string;
}

const Skeleton: React.FC<skeletonProp> = ({
  times,
  className,
}): JSX.Element[] => {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "my-2.5",
    className
  );

  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0", // take the full width and height
    "-translate-x-full", // position the element to the left
    "bg-gradient-to-r", // gradient from left to right
    "from-gray-200", // start color
    "via-white",
    "to-gray-200" // end color
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });

  return boxes;
};

export default Skeleton;
