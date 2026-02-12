import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "../appStoreTypes";

export interface initialState {
  username: string | null;
  password: string | null;
  favorites: Book[];
  downloads: Book[];
  font?: string;
}

const initialState: initialState = window.localStorage.getItem("user")
  ? JSON.parse(window.localStorage.getItem("user")!)
  : ({
      username: null,
      password: null,
      favorites: [],
      downloads: [],
      font: "Poppins",
    } as initialState);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    SignIN: (
      state,
      action: PayloadAction<{
        username: string;
        password: string;
        favorites?: Book[];
      }>,
    ) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      window.localStorage.setItem("user", JSON.stringify(state));
    },
    addOrRemove: (state, action) => {
      const index = state.favorites?.findIndex(
        (e) => e.id === action.payload.id,
      );

      if (index !== -1) {
        state.favorites?.splice(index, 1);
      } else {
        state.favorites?.push(action.payload);
      }

      window.localStorage.setItem("user", JSON.stringify(state));
    },
    addDownloads: (state, action) => {
      const index = state.downloads.findIndex(
        (e) => e.id === action.payload.id,
      );
      const date = new Date();
      const today = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();

      if (index !== -1) return;
      if (index === -1)
        state.downloads.push({
          downloadedAt: `${today}/${month}/${year}`,
          ...action.payload,
        });

      window.localStorage.setItem("user", JSON.stringify(state));
    },
    changeName: (state, action) => {
      state.username = action.payload;
      window.localStorage.setItem("user", JSON.stringify(state));
    },
    changePassword: (state, action) => {
      state.password = action.payload;
      window.localStorage.setItem("user", JSON.stringify(state));
    },
    changeFont: (state, action) => {
      state.font = action.payload;
      window.localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export default userSlice.reducer;
export const {
  SignIN,
  addOrRemove,
  addDownloads,
  changeName,
  changePassword,
  changeFont,
} = userSlice.actions;
