import { createSlice } from "@reduxjs/toolkit";

// Local imports
import { reset } from "../actions";

const initialState: string[] = [];

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state: string[], action: { payload: string }) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      const indexOfMovie = state.indexOf(action.payload);
      state.splice(indexOfMovie, 1);
    },

    // Not needed as we have a custom reset action
    // reset: () => {
    //   return initialState;
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(reset, () => {
      return initialState;
    });
  },
});

// Actions
export const { addMovie, removeMovie } = movieSlice.actions;
// Reducer
export const moviesReducer = movieSlice.reducer;

export default movieSlice;
