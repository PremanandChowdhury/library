import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pause } from "../../util/pause";

// Local imports
import { User } from "@/typings";

const usersUrl = import.meta.env.VITE_USERS_URL;

const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (): Promise<User[]> => {
    const response = await axios.get(usersUrl);

    // DEV PURPOSE
    await pause(2000);

    return response.data;
  }
);

export { fetchUsers };
