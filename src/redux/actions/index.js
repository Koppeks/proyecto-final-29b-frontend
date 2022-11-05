import axios from "axios";
import { allCategories } from "../reducers/categoriesSlice";
import {
  getProfessional,
  getProfessionalId,
  searchProfessionalName,
} from "../reducers/profetionalSlice";
import { getOcupacion } from "../reducers/ocupacionSlice";

// get de profesionales
export const getPro = () => async (dispatch) => {
  axios
    .get("https://proyecto-final-29b-backend-production.up.railway.app/user?apikey=1f5dbe34-3f44-4ec9-9d4b-078362fd7eb3")
    .then((res) => dispatch(getProfessional(res.data)))
    .catch((e) => console.log(e));
};

export const getProId = (id) => async (dispatch) => {
  axios
    .get("https://proyecto-final-29b-backend-production.up.railway.app/user/id/" + id+ "?apikey=1f5dbe34-3f44-4ec9-9d4b-078362fd7eb3")
    .then((res) => dispatch(getProfessionalId(res.data)))
    .catch((e) => console.log(e));
};

export const getProName = (name) => async (dispatch) => {
  axios
    .get("https://proyecto-final-29b-backend-production.up.railway.app/user" + name+ "?apikey=1f5dbe34-3f44-4ec9-9d4b-078362fd7eb3")
    .then((res) => {
      dispatch(searchProfessionalName(res.data));
    })
    .catch((e) => console.log(e));
};

//post de profesionales
export const postPro = (data) => async () => {
  await axios({
    method: "POST",
    url: "https://proyecto-final-29b-backend-production.up.railway.app/user",
    data: data,
  });
};

//Hacer el filtrado de trabajos de expertos disponibles por categoria no quiero

export const getCat = () => async (dispatch) => {
  axios
    .get("https://proyecto-final-29b-backend-production.up.railway.app/user?apikey=1f5dbe34-3f44-4ec9-9d4b-078362fd7eb3")
    .then((res) => dispatch(allCategories(res.data)))
    .catch((e) => console.log(e));
};

export const getOcupacions = () => async (dispatch) => {
  axios
    .get("https://proyecto-final-29b-backend-production.up.railway.app/occupation?apikey=1f5dbe34-3f44-4ec9-9d4b-078362fd7eb3")
    .then((res) => dispatch(getOcupacion(res.data)))
    .catch((e) => console.log(e));
};

