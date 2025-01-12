import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Local imports
import { User } from "@/typings";
const usersAPI = import.meta.env.VITE_USERS_URL;

const removeUser = createAsyncThunk("user/remov", async (user: User) => {
  const deleteURL = `${usersAPI}/${user.id}`;

  await axios.delete(deleteURL);

  return user;
});

export { removeUser };
