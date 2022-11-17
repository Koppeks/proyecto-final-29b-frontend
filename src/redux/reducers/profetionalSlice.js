import { createSlice } from "@reduxjs/toolkit";

const professionalSlice = createSlice({
  name: "allProfetional",
  initialState: {
    professional: [],
    professionalId: [],
    professionalPerfil: [],
  },
  reducers: {

      
      getProfessional: (state, action) => {
      const data = action.payload.filter((e)=>e.isProfessional === true  )
      state.professional = data
    },
    getProfessionalId: (state, action) => {
      
      state.professionalId = action.payload;
  

    },
    getProfessionalPerfil: (state, action) => {
      
 
      state.professionalPerfil= action.payload;

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
  getProfessionalPerfil,
  searchProfessionalName,
  clear,
  deleteProf,
} = professionalSlice.actions;
export default professionalSlice.reducer;
