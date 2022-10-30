import { createSlice } from "@reduxjs/toolkit";

const professionalSlice = createSlice({
  name: "allProfessional",
  initialState: {
    professional: [],
  },
  reducers: {
    allProfessional: (state, action) => {
      state.professional = action.payload;
    },
  },
});

export const { allProfessional } = professionalSlice.actions;
export default professionalSlice.reducer;
