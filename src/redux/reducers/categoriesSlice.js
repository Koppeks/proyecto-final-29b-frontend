import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "getCategories",
  initialState: {
    categories: [],
    categoriesfilter: []
  },
  reducers: {
    allCategories: (state, action) => {
    
     const data = action.payload.filter((e)=>e.isProfessional === true  )
      state.categories = data
  
    },
    byCategories: (state, action) => {
      
      const byCateg = state.categories.filter((e) =>
       
      e.occupation.includes(action.payload)
      );

      state.categoriesfilter = [...byCateg];
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
