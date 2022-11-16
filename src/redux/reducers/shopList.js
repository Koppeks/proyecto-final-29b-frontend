import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "getCategories",
  initialState: {
    shopList: [],
  },
  reducers: {
    addToList: (state, action) => {
      const checkRepeat = state.shopList.some(e => e.id === action.payload.id)
      if(! checkRepeat > 0){
        state.shopList = [...state.shopList, action.payload]
      }
    },
    removeToList: (state, action) => {
      const removeItem = state.shopList.filter( i => i.id !== action.payload) 
      state.shopList = removeItem
    },
  },
});

export const {
  addToList,
  removeToList,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
