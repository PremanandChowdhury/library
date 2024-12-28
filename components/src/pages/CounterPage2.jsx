import { useState } from "react";
import PropTypes from "prop-types";

// Local imports
import Button from "../components/ui/Button";
import Panel from "../components/ui/Panel";

const CounterPage2 = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [incrementValueBy, setIncrementValueBy] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleInputChange = (e) => {
    setIncrementValueBy(parseInt(e.target.value) || 0);
  };

  const addIncrementByToCount = (e) => {
    e.preventDefault(); // Form the form submission default behaviour

    setCount(count + incrementValueBy);
    setIncrementValueBy(0);
  };


  return (
    <Panel>
      <h1 className="text-2xl pb-4">Count is {count}</h1>
      <div className="flex gap-4">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <div className="mt-4 w-max">
        <form onSubmit={addIncrementByToCount} className=" flex flex-col gap-4">
          <label htmlFor="add-count">Add a lot!</label>
          <input
            type="number"
            name="add-count"
            value={incrementValueBy || ''}
            onChange={handleInputChange}
            placeholder="Increment by value"
            className="border border-gray-200 p-1 rounded"
          />
          <Button primary rounded type="submit"> Add </Button>
        </form>
      </div>
    </Panel>
  );
};

CounterPage2.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

export default CounterPage2;
