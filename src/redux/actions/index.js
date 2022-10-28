import axios from "axios";
//import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters } from "../reducers/character";
import { getProfetional } from "../reducers/profetional";

//https://rickandmortyapi.com/api/character
//https://reqres.in/api/users?delay=1

export const getChar = () => async (dispatch) => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => dispatch(getCharacters(res.data.results)))
    .catch((e) => console.log(e));
};

// get de profesionales
export const getPro = () => async (dispatch) =>{
  axios.get("http://localhost:3001/profetional")
  .then((res) => dispatch(getProfetional(res.data.results)))
  .catch( e => console.log(e)) 
}

//post de profesionales
export const postPro = (data) => async (dispatch) =>{
  axios.post("http://localhost:3001/profetional", data)
}

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

//pure
