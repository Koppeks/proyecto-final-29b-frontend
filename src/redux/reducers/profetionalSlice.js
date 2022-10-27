import { createSlice } from "@reduxjs/toolkit";

const profetionalSlice = createSlice({
  name: "allProfetional",
  initialState: {
    profetional: [],
  },
  reducers: {
    getProfetionals: (state, action) => {
      state.profetional = action.payload;
    },
  },
});

export const { getProfetional } = profetionalSlice.actions;
export default profetionalSlice.reducer;
