import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode"

const informationTokenSlice = createSlice({
  name: "session",
  initialState: {
    informationToken: {},
  },
  reducers: {
    setAuth: (state, action) => {
      
      const informationDecoded= jwt_decode(action.payload) 
      
 console.log("informacionReducer",informationDecoded)

      state.informationToken =informationDecoded;
    },


  },
});

export const { setAuth } = informationTokenSlice.actions;
export default informationTokenSlice.reducer;