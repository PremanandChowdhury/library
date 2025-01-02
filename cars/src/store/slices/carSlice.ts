import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Car {
  name: string;
  cost: number;
  id: string; // UUID
}

interface CarState {
  searchTerm: string;
  cars: Car[];
}

const initialState: CarState = {
  searchTerm: "",
  cars: [],
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
      state.cars.push({
        name,
        cost,
        id: nanoid(),
      });
    },
    removeCar: (state, action: PayloadAction<string>) => {
      const updatedCars = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updatedCars;
    },
  },
});

// ACTIONS
export const { changeSearchTerm,addCar, removeCar } = carSlice.actions;
// COMBINED REDUCER
export const carReducer = carSlice.reducer;
