import { configureStore } from "@reduxjs/toolkit";
import professional from "./reducers/profetionalSlice";
import categories from "./reducers/categoriesSlice";
import Ocupacion from "./reducers/ocupacionSlice";
import Special from './reducers/specialSlice'
import auth from "./reducers/authSlice"
import errorAuth from "./reducers/authSlice"
import shopList from "./reducers/shopList"

import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import informationToken from "./reducers/informationTokenSlice";

/*
  Aca se ubican los estados globales, donde les damos acceso a todos los componentes que esten por debajo del store
  por ejemplo: dentro del reducer se ubicarian los estados de "workers", "works", "popularWorkers", etc ...
*/

const persistConfig={
  key:'root',
  storage:AsyncStorage,
  stateReconciler:autoMergeLevel2,
  whitelist:['auth','informationToken']
};
const rootReducer= combineReducers({
  auth:auth,
  errorAuth:errorAuth,
  categories:categories,
  professional:professional,
  Ocupacion: Ocupacion,
  Special:Special,
  shopList:shopList,
  informationToken:informationToken,


})

const persistReducers=persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistReducers,
  middleware:[thunk],
});

export const persistor= persistStore(store)

