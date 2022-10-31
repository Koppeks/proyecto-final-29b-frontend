import axios from "axios";

//import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters, getCharacterId } from "../reducers/characterSlice";
import { getProfessional, getProfessionalId } from "../reducers/profetionalSlice";


// get de profesionales
export const getPro = () => async (dispatch) =>
{
  axios
    .get("http://localhost:3001/professional")
    .then((res) => dispatch(allProfessional(res.data.results)))
    .catch((e) => console.log(e));
};


export const getCharid = (id) => async (dispatch) =>
{
  axios
    .get("https://rickandmortyapi.com/api/character/" + id)
    .then((res) => dispatch(getCharacterId(res.data)))
    .catch((e) => console.log(e));
};


export const getProId = (id) => async (dispatch) =>
{
  axios.get("http://localhost:3001/professional/id/" + id)
    .then((res) => dispatch(getProfessionalId(res.data)))
    .catch(e => console.log(e))
}



export const postPro = (data) => async () =>
{
  console.log(data)

  await axios({
    method: "POST",
    url: "http://localhost:3001/professional",
    data: data,
  });
};

//Hacer el filtrado de trabajos de expertos disponibles por categoria

export const getCategories = () => async (dispatch) =>
{
  axios
    .get("http://localhost:3001/professional")
    .then((res) => dispatch(allCategories(res.data)))
    .catch((e) => console.log(e));
};
