import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersStateProps, User } from "@/typings";
import { fetchUsers } from "../thunks/fetchUsers";

const initialState: usersStateProps = {
  data: [],
  isLoading: false,
  error: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error as Error;
    });
  },
});

export const usersReducer = UserSlice.reducer;
