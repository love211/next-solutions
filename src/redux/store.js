import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./slices/templateSlice";
const store = configureStore({
  reducer: {
    template: templateReducer,
  },
});

export default store;
