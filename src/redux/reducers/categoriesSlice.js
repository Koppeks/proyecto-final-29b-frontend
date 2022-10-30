import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "getCategories",
  initialState: {
    categories: [],
  },
  reducers: {
    allCategories: (state, action) => {
      state.categories = action.payload;
    },
    allCategoriesLocal: (state, action) => {
      state.categories = action.payload;
    },
    byCategories: (state, action) => {
      const byCateg = state.categories.filter((e) =>
        e.occupation.includes(action.payload)
      );
      state.categories = [...byCateg];
    },
    byRating: (state, action) => {
      const orderRating =
        action.payload === "MaxRating"
          ? state.categories.sort((a, b) => (a.rating > b.rating ? -1 : 1))
          : state.categories.sort((a, b) => (a.rating > b.rating ? 1 : -1));
      state.categories = [...orderRating];
    },
    byPrice: (state, action) => {
      const orderRating =
        action.payload === "MaxPrecio"
          ? state.categories.sort((a, b) => (a.rating > b.rating ? -1 : 1))
          : state.categories.sort((a, b) => (a.rating > b.rating ? 1 : -1));
      state.categories = [...orderRating];
    },
  },
});

export const {
  allCategories,
  byCategories,
  byRating,
  allCategoriesLocal,
  byPrice,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;

//
