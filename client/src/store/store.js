import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./user/apiSlice";
import { bookApi } from "./book/apiSlice";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(bookApi.middleware),
});

export { store };
