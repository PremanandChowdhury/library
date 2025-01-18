import { IAlbum, User } from "@/typings";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

// Local imports
import { pause } from "@/util/pause";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    fetchFn: async (...args): Promise<Response> => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  tagTypes: ["Album", "UsersAlbums"],
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "Album", id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
      addAlbum: builder.mutation<void, User>({
        invalidatesTags: (result, error, user) => {
          return [
            {
              type: "UsersAlbums" as const,
              id: user.id,
            },
          ];
        },
        query: (user: User) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          const tags =
            result?.map((album: IAlbum) => ({
              type: "Album" as const,
              id: album.id,
            })) || [];
          // A generic tag for the user's albums
          return [...tags, { type: "UsersAlbums" as const, id: user.id }];
        },
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

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
