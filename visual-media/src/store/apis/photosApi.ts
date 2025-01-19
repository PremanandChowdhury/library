import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

// Local imports
import { pause } from "@/util/pause";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    fetchFn: async (...args): Promise<Response> => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: "/photos",
            method: "GET",
            params: {
              albumId: album.id,
            },
          };
        },
      }),
      addPhotos: builder.mutation({
        query: (album) => {
          return {
            url: "/photos",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          };
        },
      }),
      removePhotos: builder.mutation({
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useRemovePhotosMutation,
} = photosApi;

export { photosApi };
