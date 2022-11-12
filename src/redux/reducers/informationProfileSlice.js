import { createSlice } from "@reduxjs/toolkit";

const informationProfileSlice = createSlice({
  name: "informationProfile",
  initialState: {
    informationProfile: {},
  },
  reducers: {
    informationProfile: (state, action) => {
      state.informationProfile = action.payload;
    },
  },
});

export const { informationProfile } = informationProfileSlice.actions;
export default informationProfileSlice.reducer;