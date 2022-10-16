import { config } from "@config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "./entities";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: config.apiURL }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => "/users",
      providesTags: [{ type: "users", id: "LIST" }],
    }),
    createUser: builder.mutation<User, Omit<User, "id">>({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: {
          ...user
        },
      }),
      invalidatesTags: [{ type: "users", id: "LIST" }]
    }),
  }),
});
