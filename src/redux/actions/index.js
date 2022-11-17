import axios from "axios";
import Constants from 'expo-constants';
import { setAuth, setErrorAuth } from "../reducers/authSlice";
import { allCategories } from "../reducers/categoriesSlice";
import
{
  getProfessional,
  getProfessionalId,
  searchProfessionalName,
  getProfessionalPerfil,
  deleteProf,
} from "../reducers/profetionalSlice";

import { getOcupacion } from "../reducers/ocupacionSlice";
import { getSpecials, SpecialsById } from "../reducers/specialSlice";
import { informationProfile } from "../reducers/informationProfileSlice";

const { manifest } = Constants;
// const api = (typeof manifest.packagerOpts === 'object') && manifest.packagerOpts.dev ?
//   'http://' + manifest.debuggerHost.split(':').shift().concat(':3001') :
//   'http://localhost:3001';
// Cuando funcione el elephant
const api = 'https://proyecto-final-29b-backend-production.up.railway.app';
const apikey = "1f5dbe34-3f44-4ec9-9d4b-078362fd7eb3";

// get de profesionales
export const getPro = () => async (dispatch) =>
{
  // Limpiar data antigua
  dispatch(getProfessional([]));

  axios
    .get(
      `${api}/user?apikey=${apikey}`
    )
    .then((res) => dispatch(getProfessional(res.data)))
    .catch((e) => console.log(e));
};

export const getProId = (id) => async (dispatch) =>
{
  axios
    .get(
      `${api}/user/id/${id}?apikey=${apikey}`
    )
    .then((res) => dispatch(getProfessionalId(res.data)))
    .catch((e) => console.log(e));
};
export const getProPerfil = (id) => async (dispatch) =>
{
  axios
    .get(
      `https://proyecto-final-29b-backend-production.up.railway.app/user/id/${id}?apikey=${apikey}`
    )
    .then((res) => dispatch(getProfessionalPerfil(res.data)))
    .catch((e) => console.log(e));
};

export const deleteProEmail = (email) => async (dispatch) =>
{
  await dispatch(deleteProf(email));
  axios.delete(
    `${api}/user/email/${email}/?apikey=${apikey}`
  );
};


export const restoreProEmail = (email) => async (dispatch) => {
  await dispatch(deleteProf(email));
  axios.delete(
    `https://proyecto-final-29b-backend-production.up.railway.app/user/email/${email}/?apikey=${apikey}&restoreuser=true`
  );
};

export const updateProEmail = (email, data) => async (dispatch) => {


  await dispatch(getProfessionalId(data));
  axios.put(
    `${api}/user/email/${email}/?apikey=${apikey}`,
    data
  );
};

export const getProName = (name) => async (dispatch) =>
{
  axios
    .get(
      `${api}/user/name/${name}?apikey=${apikey}`
    )
    .then((res) =>
    {
      dispatch(searchProfessionalName(res.data));
    })
    .catch((e) => console.log(e));
};

//post de profesionales
export const registerUser = (data) => async () =>
{
  console.log(data);
  await axios({
    method: "POST",
    url: `${api}/user?apikey=${apikey}`,
    data: data,
  });
};

//Hacer el filtrado de trabajos de expertos disponibles por categoria no quiero

export const getCategories = () => async (dispatch) =>
{
  axios
    .get(
      `${api}/user?apikey=${apikey}`
    )
    .then((res) => dispatch(allCategories(res.data)))
    .catch((e) => console.log(e));
};
export const getoccupation = () => async (dispatch) =>
{
  axios
    .get(
      `${api}/category?apikey=${apikey}`
    )
    .then((res) => dispatch(getOcupacion(res.data)))
    .catch((e) => console.log(e));
};
export const getspecial = () => async (dispatch) =>
{
  axios
    .get(
      `${api}/specialization?apikey=${apikey}`
    )
    .then((res) => dispatch(getSpecials(res.data)))
    .catch((e) => console.log(e));
};

export const getspecialByID = (id) => async (dispatch) =>
{
  axios
    .get(
      `${api}/specialization/id/${id}?apikey=${apikey} `
    )
    .then((res) => dispatch(SpecialsById(res.data)))
    .catch((e) => console.log(e));
};

export const postDispute = (data) => async () =>
{
  await axios({
    method: "POST",
    url: `${api}/dispute?apikey=${apikey}`,
    data: data,
  }).catch((e) => console.log(e));
};

export const postJob = (data) => async () =>
{
  await axios({
    method: "POST",
    url: `${api}/specialization?apikey=${apikey}`,
    data: data,
  }).catch((e) => console.log(e));
};

export const logIn = (data) => async (dispatch) =>
{
  console.log(data)
  try
  {
    const result = await axios({
      method: "POST",
      url: `${api}/user/token?apikey=${apikey}`,
      data: data,
    });
    dispatch(setAuth(result?.data));
  } catch (error)
  {
    console.log(error);
    const errorAuth = error?.response?.data?.message ?? 'Error desconocido';
    dispatch(setErrorAuth(errorAuth));
  }
};

export const information = (token) => async (dispatch) =>
{
  try
  {
    const result = {
      data: {
        id: 102,
        fullName: "andres",
        phoneNumber: "3185455522",
        email: "andresfelipemelo18@gmail.com",
        occupation: null,
        address: "calle",
        image:
          "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/08/antonio-encanto-png-background.png?fit=800%2C800&ssl=1",
      },
    };
    dispatch(informationProfile(result.data));
  } catch (error)
  {
    console.log(error);
  }
};
