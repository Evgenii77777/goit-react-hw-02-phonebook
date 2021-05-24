import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import { contactsReduser } from "./contactsReduser";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  contacts: contactsReduser,
  auth: persistReducer(persistConfig, authReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

persistStore(store);

export default store;
