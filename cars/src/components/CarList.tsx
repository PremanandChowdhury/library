import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Car, CarState, FormState } from "../typings/interfaces";
import { removeCar } from "../store";

type StateProps = {
  cars: CarState;
  form: FormState;
};

const CarList: React.FC = () => {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(
    ({ form, cars: { entities, searchTerm } }: StateProps) => {
      const filteredCars = entities.filter((car: Car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: form.name,
      };
    }
  );

  const handleCarDelete = (car: Car): void => {
    dispatch(removeCar(car.id));
  };

  const renderedCars =
    cars.length > 0
      ? cars.map((car) => {
          const bold =
            name && car.name.toLowerCase().includes(name.toLowerCase());

          return (
            <div key={car.id} className={`panel ${bold && "bold"}`}>
              <p>
                {car.name} - ₹{car.cost}
              </p>
              <div
                className="button is-danger"
                onClick={() => handleCarDelete(car)}
              >
                Delete
              </div>
            </div>
          );
        })
      : null;

  return (
    <div className="car-list">
      {renderedCars || <p>No cars available</p>}
      <hr />
    </div>
  );
};

export default CarList;
