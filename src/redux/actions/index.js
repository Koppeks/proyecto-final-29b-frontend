import axios from "axios";
import { allProfessional } from "../reducers/professionalSlice";
import { allCategories } from "../reducers/categoriesSlice";
import infoDb from "../../Hooks/infoDb";
import { allCategoriesLocal } from "../reducers/categoriesSlice";

// get de profesionales
export const getPro = () => async (dispatch) => {
  axios
    .get("http://localhost:3001/professional")
    .then((res) => dispatch(allProfessional(res.data.results)))
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

export const getCategoriesLocal = () => (dispatch) => {
  const infDb = infoDb();
  dispatch(allCategoriesLocal(infDb));
};
//
