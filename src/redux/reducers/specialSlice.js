import { createSlice } from "@reduxjs/toolkit";

const specialSlice = createSlice({
  name: "allSpecial",
  initialState: {
    Special: [],
    SpecialFilt:[]
  
  },
  reducers: {
    getSpecials: (state, action) => {
      state.Special = action.payload;
    },
    bySpecials: (state, action) => {
 
      const bySpecial = state.Special.filter((e) =>
       
      e.occupation.includes(action.payload)
      );
   
      state.SpecialFilt = [...bySpecial];
    },
  
  },
});

export const {getSpecials, bySpecials} = specialSlice.actions;
export default specialSlice.reducer;