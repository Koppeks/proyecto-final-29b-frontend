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
      console.log(state.SpecialId)
      
    }
  
  },
});

export const {getSpecials, bySpecials,SpecialsById} = specialSlice.actions;
export default specialSlice.reducer;