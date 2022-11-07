import { createSlice } from "@reduxjs/toolkit";

const specialSlice = createSlice({
  name: "allSpecial",
  initialState: {
    Special: [],
  
  },
  reducers: {
    getSpecials: (state, action) => {
      state.Special = action.payload;
    },
  
  },
});

export const {getSpecials} = specialSlice.actions;
export default specialSlice.reducer;