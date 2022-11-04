import axios from "axios";
import { setAuth } from "../reducers/authSlice";
import { allCategories } from "../reducers/categoriesSlice";
import {
  getProfessional,
  getProfessionalId,
  searchProfessionalName,
} from "../reducers/profetionalSlice";

// get de profesionales
export const getPro = () => async (dispatch) => {
  axios
    .get("https://proyecto-final-29b-backend-production.up.railway.app/professional")
    .then((res) => dispatch(getProfessional(res.data)))
    .catch((e) => console.log(e));
};

export const getProId = (id) => async (dispatch) => {
  axios
    .get("https://proyecto-final-29b-backend-production.up.railway.app/professional/id/" + id)
    .then((res) => dispatch(getProfessionalId(res.data)))
    .catch((e) => console.log(e));
};

export const getProName = (name) => async (dispatch) => {
  axios
    .get("https://proyecto-final-29b-backend-production.up.railway.app/professional" + name)
    .then((res) => {
      dispatch(searchProfessionalName(res.data));
    })
    .catch((e) => console.log(e));
};

//post de profesionales
export const postPro = (data) => async () => {
  await axios({
    method: "POST",
    url: "https://proyecto-final-29b-backend-production.up.railway.app/professional",
    data: data,
  });
};

//Hacer el filtrado de trabajos de expertos disponibles por categoria

export const getCategories = () => async (dispatch) => {
  axios
    .get("https://proyecto-final-29b-backend-production.up.railway.app/professional")
    .then((res) => dispatch(allCategories(res.data)))
    .catch((e) => console.log(e));
};



export const logIn = (data) => async (dispatch) => {
  console.log(data)

  const result={
    data:{
      jwt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
  }
  // const result= await axios({
  //   method: "POST",
  //   url: "https://proyecto-final-29b-backend-production.up.railway.app/logIn",
  //   data: data,
  // });
  dispatch(setAuth(result?.data))
};

