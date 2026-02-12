import { configureStore } from "@reduxjs/toolkit";
import type { initialState } from "./userSlice/user";
import userSlice from "./userSlice/user";
import bookSlice from "./bookSlice/bookSlice";
import type { LibraryState } from "./appStoreTypes";

export type storeType = {
  userSlice: initialState;
  bookSlice: LibraryState;
};

const store = configureStore({
  reducer: { userSlice, bookSlice },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
