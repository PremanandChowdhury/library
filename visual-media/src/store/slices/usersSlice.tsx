import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Local imports
import { usersStateProps, User } from "@/typings";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const initialState: usersStateProps = {
  data: [],
  isLoading: false,
  error: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // Add User
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state: usersStateProps) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state: usersStateProps, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state: usersStateProps, action) => {
      state.isLoading = false;
      state.error = action.error as Error;
    });

    // Populate User Data
    builder.addCase(addUser.pending, (state: usersStateProps) => {
      state.isLoading = true;
    });
    builder.addCase(
      addUser.fulfilled,
      (state: usersStateProps, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.data.push(action.payload);
      }
    );
    builder.addCase(addUser.rejected, (state: usersStateProps, action) => {
      state.isLoading = false;
      state.error = action.error as Error;
    });

    // Remove User Data
    builder.addCase(removeUser.pending, (state: usersStateProps): void => {
      state.isLoading = true;
    });
    builder.addCase(
      removeUser.fulfilled,
      (state: usersStateProps, action: PayloadAction<User>): void => {
        state.isLoading = false;
        state.data = state.data.filter((item) => {
          return item.id !== action.payload.id;
        });
      }
    );
    builder.addCase(
      removeUser.rejected,
      (state: usersStateProps, action): void => {
        state.isLoading = false;
        state.error = action.error as Error;
      }
    );
  },
});

export const usersReducer = UserSlice.reducer;
