import React from "react";
import { useSelector } from "react-redux";
import { Car, CarState } from "../typings/interfaces";

const CarValue: React.FC = () => {
  const totalCost = useSelector(
    ({ cars: { entities, searchTerm } }: { cars: CarState }): number => {
      return entities
        .filter((car: Car) =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .reduce((acc: number, car: Car) => acc + car.cost, 0);
    }
  );

  return <div className="car-value">Total Cost: ₹{totalCost || 0}</div>;
};

export default CarValue;
