import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Book } from "../../models/Book";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => "books",
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
