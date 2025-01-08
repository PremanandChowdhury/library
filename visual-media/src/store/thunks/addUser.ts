import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

// Local imports
import axios from "axios";

const usersAPI = import.meta.env.VITE_USERS_URL;

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post(usersAPI, {
    name: faker.name.fullName(),
  });

  return response.data;
});

export { addUser };
