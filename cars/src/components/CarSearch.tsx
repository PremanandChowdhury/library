import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";
import { CarState } from "../typings/interfaces";

const CarSearch: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: { cars: CarState }) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default CarSearch;
