import { config } from "@config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "./entities";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: config.apiURL }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => "/users",
      providesTags: [{ type: "users", id: 'LIST' }],
    }),
  }),
});
