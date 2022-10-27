import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/message";
import characterReducer from "./reducers/character";

const store = configureStore({
  reducer: {
    message: messageReducer,
    characters: characterReducer,
  },
});

export default store;

//commit
