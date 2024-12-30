import { createSlice } from "@reduxjs/toolkit";

// Local imports
import {reset} from "../actions"

const initialState: string[] = [];

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    addSong: (state: string[], action: { payload: string }) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      const indexOfSong = state.indexOf(action.payload);
      state.splice(indexOfSong, 1);
    }
  }, 
  extraReducers: (builder) => {
    // Approach 1: For resetting all the slices is to use the reset action defined in another slice
    // this approach is not recommended as it creates a dependency between slices

    // builder.addCase(movieSlice.actions.reset, () => {
    //   return [];
    // });

    // Approach 2: For resetting all the slices is to use the reset action defined in the same slice
    builder.addCase(reset, () => {
      return initialState;
    })
  },
});


// Actions
export const { addSong, removeSong } = songSlice.actions;
// Reducer
export const songsReducer = songSlice.reducer;

export default songSlice;
