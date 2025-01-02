import { configureStore } from "@reduxjs/toolkit";

// Local imports
import {
  carReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
});

export { store, changeSearchTerm, addCar, removeCar, changeName, changeCost };
