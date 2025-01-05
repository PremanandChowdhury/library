import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Local imports
import { changeCost, changeName, addCar } from "../store";
import { FormState } from "../typings/interfaces";

const CarForm: React.FC = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector(
    (state: { form: FormState }): FormState => {
      return {
        name: state.form.name,
        cost: state.form.cost,
      };
    }
  );

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeName(e.target.value));
  };
  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label htmlFor="cost" className="label">
              Cost
            </label>
            <input
              id="cost"
              type="number"
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
