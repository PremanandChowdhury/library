import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "../../typings/interfaces";
import { addCar } from "./carSlice";

const initialState: FormState = {
  name: "",
  cost: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeCost: (state, action: PayloadAction<number>) => {
      state.cost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCar, (): FormState => {
      return initialState;
    });
  },
});

// ACTIONS
export const { changeName, changeCost } = formSlice.actions;
// COMBINED REDUCER
export const formReducer = formSlice.reducer;
