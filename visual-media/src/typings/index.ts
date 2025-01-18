import { SerializedError } from "@reduxjs/toolkit";

export type User = {
  id: string;
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

export interface IAlbum {
  id: string;
  title: string;
}
export interface ITag {
  type: string;
  id: string;
}
