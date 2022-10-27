import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "allCharacter",
  initialState: {
    characters: [],
  },
  reducers: {
    getCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { getCharacters } = characterSlice.actions;
export default characterSlice.reducer;
