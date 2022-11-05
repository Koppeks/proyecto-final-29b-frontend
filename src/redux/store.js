import { configureStore } from "@reduxjs/toolkit";
import professional from "./reducers/profetionalSlice";
import categories from "./reducers/categoriesSlice";
import Ocupacion from "./reducers/ocupacionSlice";

/*
  Aca se ubican los estados globales, donde les damos acceso a todos los componentes que esten por debajo del store
  por ejemplo: dentro del reducer se ubicarian los estados de "workers", "works", "popularWorkers", etc ...
*/

const store = configureStore({
  reducer: {
    categories: categories,
    professional: professional,
    Ocupacion: Ocupacion
  },
});

export default store;
