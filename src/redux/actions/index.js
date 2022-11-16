import axios from "axios";
import { setAuth, setErrorAuth } from "../reducers/authSlice";
import { allCategories } from "../reducers/categoriesSlice";
import
{
  getProfessional,
  getProfessionalId,
  searchProfessionalName,
  deleteProf,
} from "../reducers/profetionalSlice";

import { getOcupacion } from '../reducers/ocupacionSlice'
import { getSpecials, SpecialsById } from '../reducers/specialSlice';
import { informationProfile } from '../reducers/informationProfileSlice'

const apikey = "1f5dbe34-3f44-4ec9-9d4b-078362fd7eb3";

// get de profesionales
export const getPro = () => async (dispatch) =>
{
  // Limpiar data antigua
  dispatch(getProfessional([]));

  axios
    .get(
      `https://proyecto-final-29b-backend-production.up.railway.app/user?apikey=${apikey}`
    )
    .then((res) => dispatch(getProfessional(res.data)))
    .catch((e) => console.log(e));
};

export const getProId = (id) => async (dispatch) =>
{
  axios
    .get(
      `https://proyecto-final-29b-backend-production.up.railway.app/user/id/${id}?apikey=${apikey}`
    )
    .then((res) => dispatch(getProfessionalId(res.data)))
    .catch((e) => console.log(e));
};

export const deleteProEmail = (email) => async (dispatch) =>
{
  await dispatch(deleteProf(email));
  axios.delete(
    `https://proyecto-final-29b-backend-production.up.railway.app/user/email/${email}/?apikey=${apikey}`
  );
};

export const updateProEmail = (email, data) => async (dispatch) =>
{
  await dispatch(getProfessionalId(data));
  axios.put(
    `https://proyecto-final-29b-backend-production.up.railway.app/user/email/${email}/?apikey=${apikey}`,
    data
  );
};

export const getProName = (name) => async (dispatch) =>
{
  axios
    .get(
      `https://proyecto-final-29b-backend-production.up.railway.app/user${name}?apikey=${apikey}`
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
    url: `https://proyecto-final-29b-backend-production.up.railway.app/user?apikey=${apikey}`,
    data: data,
  });
};

//Hacer el filtrado de trabajos de expertos disponibles por categoria no quiero

export const getCategories = () => async (dispatch) =>
{
  axios
    .get(
      `https://proyecto-final-29b-backend-production.up.railway.app/user?apikey=${apikey}`
    )
    .then((res) => dispatch(allCategories(res.data)))
    .catch((e) => console.log(e));
};
export const getoccupation = () => async (dispatch) =>
{
  axios
    .get(
      `https://proyecto-final-29b-backend-production.up.railway.app/category?apikey=${apikey}`
    )
    .then((res) => dispatch(getOcupacion(res.data)))
    .catch((e) => console.log(e));
};
export const getspecial = () => async (dispatch) =>
{
  axios
    .get(
      `https://proyecto-final-29b-backend-production.up.railway.app/specialization?apikey=${apikey}`
    )
    .then((res) => dispatch(getSpecials(res.data)))
    .catch((e) => console.log(e));
};

export const postDispute = (data) => async () =>
{
  await axios({
    method: "POST",
    url: `https://proyecto-final-29b-backend-production.up.railway.app/dispute?apikey=${apikey}`,
    data: data,
  }).catch((e) => console.log(e));
};

export const postJob = (data) => async () =>
{
  await axios({
    method: "POST",
    url: `https://proyecto-final-29b-backend-production.up.railway.app/specialization?apikey=${apikey}`,
    data: data,
  }).catch((e) => console.log(e));
};

export const logIn = (data) => async (dispatch) =>
{
  // console.log(data)
  try
  {
    const result = await axios({
      method: "POST",
      url: `https://proyecto-final-29b-backend-production.up.railway.app/user/token?apikey=${apikey}`,
      data: data,
    });
    dispatch(setAuth(result?.data));
  } catch (error)
  {
    const errorAuth = error.response.data.message;
    // console.log("error12",error2)
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
