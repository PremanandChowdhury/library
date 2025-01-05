import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { CarState } from "../../typings/interfaces";

const initialState: CarState = {
  searchTerm: "",
  entities: [],
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    addCar: (state, action: PayloadAction<{ name: string; cost: number }>) => {
      const { name, cost } = action.payload;
      state.entities.push({
        name,
        cost,
        id: nanoid(),
      });
    },
    removeCar: (state, action: PayloadAction<string>) => {
      const updatedCars = state.entities.filter((car) => {
        return car.id !== action.payload;
      });
      state.entities = updatedCars;
    },
  },
});

// ACTIONS
export const { changeSearchTerm,addCar, removeCar } = carSlice.actions;
// COMBINED REDUCER
export const carReducer = carSlice.reducer;
