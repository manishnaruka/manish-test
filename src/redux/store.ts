import { configureStore } from "@reduxjs/toolkit";
import {counterReducer, productReducer} from "./reducer"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});

export default store;
