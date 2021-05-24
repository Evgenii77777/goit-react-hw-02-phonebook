import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const logOut = createAction("auth/logOut");

export {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logOut,
};
