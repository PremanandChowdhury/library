import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Local imports
import { User } from "@/typings";

const usersUrl = import.meta.env.VITE_USERS_URL;

const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (): Promise<User[]> => {
    const response = await axios.get(usersUrl);
    return response.data;;
  }
);

export { fetchUsers };
