import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    modals: modalReducer,
  },
});
