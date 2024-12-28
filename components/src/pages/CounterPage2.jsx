import { useReducer } from "react";
import PropTypes from "prop-types";

// Local imports
import Button from "../components/ui/Button";
import Panel from "../components/ui/Panel";

const actionTypes = {
  INCREMENT_COUNT: "increment",
  DECREMENT_COUNT: "decrement",
  SET_VALUE_TO_ADD: "set-value-to-increment",
  ADD_VALUE_TO_COUNT: "submit-increment",
};

const countReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case actionTypes.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    case actionTypes.SET_VALUE_TO_ADD:
      return {
        ...state,
        incrementValueBy: action.payload,
      };
    
    case actionTypes.ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.incrementValueBy,
        incrementValueBy: 0,
      }

    default:
      return state;
  }
};

const CounterPage2 = ({ initialCount }) => {
  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount,
    incrementValueBy: 0,
  });

  const increment = () => {
    dispatch({ type: actionTypes.INCREMENT_COUNT });
  };

  const decrement = () => {
    dispatch({ type: actionTypes.DECREMENT_COUNT });
  };

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.SET_VALUE_TO_ADD,
      payload: parseInt(e.target.value) || 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Form the form submission default behaviour

    dispatch({
      type: actionTypes.ADD_VALUE_TO_COUNT,
    });
  };

  console.log(state);

  return (
    <Panel>
      <h1 className="pb-4 text-2xl">Count is {state.count}</h1>
      <div className="flex gap-4">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <div className="mt-4 w-max">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
          <label htmlFor="add-count">Add a lot!</label>
          <input
            type="number"
            name="add-count"
            value={state.incrementValueBy || ""}
            onChange={handleInputChange}
            placeholder="Increment by value"
            className="rounded border border-gray-200 p-1"
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
