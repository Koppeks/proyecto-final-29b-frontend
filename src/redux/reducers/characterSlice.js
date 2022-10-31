import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "allCharacter",
  initialState: {
    characters: [],
    charactersId: [],
  },
  reducers: {
    getCharacters: (state, action) => {
      state.characters = action.payload;
    

    },
    getCharacterId:(state,action)=>{
      state.charactersId = action.payload;
    }
  },
});

export const { getCharacters,getCharacterId } = characterSlice.actions;
export default characterSlice.reducer;


