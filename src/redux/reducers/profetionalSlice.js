import { createSlice } from "@reduxjs/toolkit";

const professionalSlice = createSlice({
  name: "allProfetional",
  initialState: {
    professional: [],
    professionalId:[]
  },
  reducers: {
    getProfessional: (state, action) => {
      state.professional = action.payload;
      console.log(state.professional)
    },
    getProfessionalId:(state,action)=>{
      state.professionalId = action.payload;
    }
  },
});

export const { getProfessional,getProfessionalId } = professionalSlice.actions;
export default professionalSlice.reducer;
