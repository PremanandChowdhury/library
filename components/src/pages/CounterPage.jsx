import PropTypes from "prop-types";

// Local imports
import Button from "../components/ui/Button";
import useCounter from "../hooks/useCounter";

const CounterPage = ({ intitialCount }) => {
  const { count, increment } = useCounter(intitialCount);
  return (
    <div>
      <h1>Current count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

CounterPage.propTypes = {
  intitialCount: PropTypes.number.isRequired,
};

export default CounterPage;
