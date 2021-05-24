import axios from "axios";
import {
  registerError,
  registerRequest,
  registerSuccess,
  loginRequest,
  loginSuccess,
  loginError,
} from "./authActions";
const key = "AIzaSyADWi5F5f_L0cqoFfx2pFlizjHEymIWILM";
// const key = process.env.REACT_APP_API_KEY;
const registerOperation = (user) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,
      { ...user, returnSecureToken: true }
    );
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.response.data.error.message));
  }
};

const loginOperation = (user) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
      { ...user, returnSecureToken: true }
    );
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.response.data.error.message));
  }
};

export { registerOperation, loginOperation };
