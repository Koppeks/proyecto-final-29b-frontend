import axios from "axios";
//import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters } from "../reducers/character";

//https://rickandmortyapi.com/api/character
//https://reqres.in/api/users?delay=1

export const getChar = () => async (dispatch) => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => dispatch(getCharacters(res.data.results)))
    .catch((e) => console.log(e));
};

/* export const getCharacter = () => async (dispatch) => {
  const getChar = await axios.get("https://rickandmortyapi.com/api/character");
  dispatch(getCharacters(getChar.data.results));
}; */

/* export const getCharacter = createAsyncThunk<unknown, void>(
  "allCharacter/getCharacter",
  async () => {
    const getChar = await axios.get("https://reqres.in/api/users?delay=1");
    return (await getChar.data) as UserData[];
  }
);
 */
//commit
