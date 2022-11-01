import axios from "axios";
import { allCategories } from "../reducers/categoriesSlice";
import {
  getProfessional,
  getProfessionalId,
  searchProfessionalName
} from "../reducers/profetionalSlice";

// get de profesionales
export const getPro = () => async (dispatch) => {
  axios
    .get("http://localhost:3001/professional")
    .then((res) => dispatch(getProfessional(res.data)))
    .catch((e) => console.log(e));
};

export const getProId = (id) => async (dispatch) => {
  axios
    .get("http://localhost:3001/professional/id/" + id)
    .then((res) => dispatch(getProfessionalId(res.data)))
    .catch((e) => console.log(e));
};

export const getProName = (name) => async (dispatch) => {
  axios
    .get("http://localhost:3001/professional/" + name)
    .then((res) => {
      dispatch(searchProfessionalName(res.data))
      }
      )
    .catch((e) => console.log(e));
};

//post de profesionales
export const postPro = (data) => async () => {
  console.log(data);
  await axios({
    method: "POST",
    url: "http://localhost:3001/professional",
    data: data,
  });
};

//Hacer el filtrado de trabajos de expertos disponibles por categoria

export const getCategories = () => async (dispatch) => {
  axios
    .get("http://localhost:3001/professional")
    .then((res) => dispatch(allCategories(res.data)))
    .catch((e) => console.log(e));
};


