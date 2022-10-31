import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/message";
import characterReducer from "./reducers/characterSlice";
import professionalReducer from "./reducers/profetionalSlice";
import ocupacionReducer from "./reducers/ocupacionSlice"


/*
  Aca se ubican los estados globales, donde les damos acceso a todos los componentes que esten por debajo del store
  por ejemplo: dentro del reducer se ubicarian los estados de "workers", "works", "popularWorkers", etc ...
*/

const store = configureStore({
  reducer: {
    message: messageReducer,
    characters: characterReducer,
    professional: professionalReducer,
    Ocupacion:ocupacionReducer
  },
});

export default store;

//pure
