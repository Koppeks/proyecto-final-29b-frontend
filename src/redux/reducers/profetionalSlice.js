import { createSlice } from "@reduxjs/toolkit";

const professionalSlice = createSlice({
  name: "allProfetional",
  initialState: {
    professional: [],
    professionalId: [],
  },
  reducers: {
    getProfessional: (state, action) => {
      console.log(state.professional);
      state.professional = action.payload;
    },
    getProfessionalId: (state, action) => {
      state.professionalId = action.payload;
    },
  },
});

export const { getProfessional, getProfessionalId } = professionalSlice.actions;
export default professionalSlice.reducer;
