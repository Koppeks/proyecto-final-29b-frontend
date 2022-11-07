import { createSlice } from "@reduxjs/toolkit";

const ocupacionSlice = createSlice({
  name: "allOcupacion",
  initialState: {
    Ocupacion: [],
  },
  reducers: {
    getOcupacion: (state, action) => {
      state.Ocupacion = action.payload;
      console.log(state.Ocupacion)
    }
  },
});

export const { getOcupacion } = ocupacionSlice.actions;
export default ocupacionSlice.reducer;
