import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { LibraryState } from "../appStoreTypes";

type ApiOption = {
  method: string;
  headers: {
    "x-rapidapi-host": string;
    "x-rapidapi-key": string;
  };
};

const option: ApiOption = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "project-gutenberg-free-books-api1.p.rapidapi.com",
    "x-rapidapi-key": "7366dca62dmsh5b5b1d160d720e2p119f83jsnf89ab1725896",
  },
};

const initialState: LibraryState = {
  recomendedBook: null,
  Searchedbooks: null,
  categoryBooks: null,
  detailedBook: undefined,
  status: "idle",
  searchStatus: "idle",
  oneBookStatus: "idle",
  error: null,
};

export const fetchSearch = createAsyncThunk(
  "fetchSearch",
  async (search: string) => {
    const query = encodeURIComponent(search);
    const res = await fetch(
      `https://project-gutenberg-free-books-api1.p.rapidapi.com/books?q=${query}`,
      option
    );
    const data = await res.json();
    return data.results;
  }
);

export const fetchBookById = createAsyncThunk(
  "fetchBook",
  async (id: string) => {
    const res = await fetch(
      `https://project-gutenberg-free-books-api1.p.rapidapi.com/books/${id}`,
      option
    );
    const data = await res.json();
    return data.results[0];
  }
);

export const fetchRecomended = createAsyncThunk("fetchRecomended", async () => {
  const res = await fetch(
    "https://project-gutenberg-free-books-api1.p.rapidapi.com/books",
    option
  );
  const data = await res.json();
  return data.results;
});

export const fetchCategory = createAsyncThunk(
  "fetchCategory",
  async (filter: string) => {
    const filtred = encodeURIComponent(`${filter}`);
    const res = await fetch(
      `https://project-gutenberg-free-books-api1.p.rapidapi.com/books?${
        filtred === "All" ? `page_size=50` : `subject=${filtred}`
      }`,
      option
    );
    const data = await res.json();
    return data.results;
  }
);

const BookSlice = createSlice({
  name: "BookSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecomended.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchRecomended.fulfilled, (state, action) => {
        state.recomendedBook = action.payload;
        state.status = "success";
      })
      .addCase(fetchRecomended.rejected, (state) => {
        state.error = "ERROR OCCURED";
        state.status = "rejected";
      });
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categoryBooks = action.payload;
        state.status = "success";
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.error = "rejected";
      });
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.searchStatus = "pending";
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.searchStatus = "success";
        state.Searchedbooks = action.payload;
      })
      .addCase(fetchSearch.rejected, (state) => {
        state.error = "ERROR HAS BEEN OCCURED";
        state.searchStatus = "rejected";
      });
    builder
      .addCase(fetchBookById.pending, (state) => {
        state.oneBookStatus = "pending";
        state.error = null;
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.oneBookStatus = "success";
        console.log(action.payload);

        state.detailedBook = action.payload;
      })
      .addCase(fetchBookById.rejected, (state) => {
        state.error = "ERROR HAS BEEN OCCURED";
        state.oneBookStatus = "rejected";
      });
  },
  reducers: {},
});

export default BookSlice.reducer;
