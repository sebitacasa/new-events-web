import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/reducer.jsx";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
