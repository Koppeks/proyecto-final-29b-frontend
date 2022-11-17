import { createSlice } from "@reduxjs/toolkit";

const specialSlice = createSlice({
  name: "allSpecial",
  initialState: {
    Special: [],
    SpecialFilt:[],
    SpecialId:[]
  
  },
  reducers: {
    getSpecials: (state, action) => {
      state.Special = action.payload;

    },
    bySpecials: (state, action) => {

      const bySpecial = state.Special.filter((e) =>
      e.categoryId === action.payload
      );

       state.SpecialFilt = [...bySpecial];
    },

    SpecialsById: ( state, action)=>{
      state.SpecialId = action.payload;
      
      
    },
    clear: (state, action) => {
      state.SpecialId = [];
    },
     byPrice: (state, action) => {
      const orderRating =
        action.payload === "MaxPrecio"
          ? state.Special.sort((a, b) => (a.pricing > b.pricing ? -1 : 1))
          : state.Special.sort((a, b) => (a.pricing > b.pricing ? 1 : -1));
      state.Special = [...orderRating];
    },
  
  },
});

export const {getSpecials, bySpecials,SpecialsById,clear,byPrice} = specialSlice.actions;
export default specialSlice.reducer;