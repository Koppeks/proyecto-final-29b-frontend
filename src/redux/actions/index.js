import axios from "axios";
//import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters,getCharacterId } from "../reducers/characterSlice";
import { getProfessional,getProfessionalId } from "../reducers/profetionalSlice";
import { getOcupacion } from "../reducers/ocupacionSlice";
//https://rickandmortyapi.com/api/character
//https://reqres.in/api/users?delay=1

export const getChar = () => async (dispatch) => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => dispatch(getCharacters(res.data.results)))
    .catch((e) => console.log(e));
};

export const getCharid = (id) => async (dispatch) => {
  axios
    .get("https://rickandmortyapi.com/api/character/"+id)
    .then((res) => dispatch(getCharacterId(res.data)))
    .catch((e) => console.log(e));
};

// get de profesionales
export const getPro = () => async (dispatch) =>{
await  axios.get("http://localhost:3001/professional")
  .then((res) =>  dispatch(getProfessional(res.data)))
  .catch( (e) => console.log(e)) 
}

export const getProId = (id) => async (dispatch) =>{
  axios.get("http://localhost:3001/professional/id/"+id)
  .then((res) =>  dispatch(getProfessionalId(res.data)))
  .catch( e => console.log(e)) 
}


export const getCat = () => async (dispatch) =>{
  axios.get("http://localhost:3001/occupation")
  .then((res) =>  dispatch(getOcupacion(res.data)))
  .catch( e => console.log(e)) 
}



//

export const postPro = (data) => async () =>{
  console.log(data)
  await axios({
    method: 'POST',
    url: "http://localhost:3001/professional",
    data: data
  })
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
