import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactsReduser";

const store = configureStore({
  reducer: contactsReduser,
  middleware: [...getDefaultMiddleware()],
});

export default store;
