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
  },
});

export const {
  addToList,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
