import { useState, useEffect } from "react";
const useCounter = (intitialCount) => {
  const [count, setCount] = useState(intitialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
};

export default useCounter;
