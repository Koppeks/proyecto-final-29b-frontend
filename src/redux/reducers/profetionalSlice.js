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
      state.professional = [...action.payload]
    } 
  },
});

export const { getProfessional, getProfessionalId, searchProfessionalName } = professionalSlice.actions;
export default professionalSlice.reducer;
