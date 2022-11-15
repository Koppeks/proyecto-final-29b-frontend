import { createSlice } from "@reduxjs/toolkit";

const professionalSlice = createSlice({
  name: "allProfetional",
  initialState: {
    professional: [],
    professionalId: [],
  },
  reducers: {
    getProfessional: (state, action) => {
      state.professional = action.payload;
    },
    getProfessionalId: (state, action) => {
      state.professionalId = action.payload;
    },
    searchProfessionalName: (state, action) => {
      state.professional = [...action.payload];
    },
    clear: (state, action) => {
      state.professionalId = [];
    },
    deleteProf: (state, action) => {
      const delProf = state.professional.filter(
        (e) => e.email !== action.payload
      );
      state.professional = [...delProf];
    },
  },
});

export const {
  getProfessional,
  getProfessionalId,
  searchProfessionalName,
  clear,
  deleteProf,
} = professionalSlice.actions;
export default professionalSlice.reducer;
