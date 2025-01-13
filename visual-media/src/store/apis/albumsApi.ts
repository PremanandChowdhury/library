import { User } from "@/typings";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user: User) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };
