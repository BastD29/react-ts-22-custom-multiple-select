import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    // getBooks: builder.query({
    //   query: () => "books",
    // }),
    getBooks: builder.query({
      query: (searchTerm = "") =>
        `books?search=${encodeURIComponent(searchTerm)}`,
    }),
    getBookById: builder.query({
      query: (id) => `books/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByIdQuery } = bookApi;
