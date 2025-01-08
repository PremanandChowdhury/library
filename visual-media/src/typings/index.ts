import { SerializedError } from "@reduxjs/toolkit";

export type User = {
  id: number;
  name: string;
};

export type usersStateProps = {
  data: User[];
  isLoading: boolean;
  error: Error | null;
};

export interface IFetchResponse {
  data: User[];
  error: SerializedError | null;
  isLoading: boolean;
}
