import {
  LOGIN,
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  SIGN,
  SIGN_REQUEST,
  SIGN_ERROR,
} from "./auth.types";

import axios from "axios";

export const signin = (creds) => async (dispatch) => {
  dispatch({ type: SIGN_REQUEST });
  try {
    let response = axios.post(process.env.SIGNUPURL, creds);
    dispatch({ type: SIGN, payload: response.data });
    return response.data;
  } catch (e) {
    dispatch({ type: SIGN_ERROR });
  }
};

export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    let response = axios.post(process.env.LOGINURL, creds);
    dispatch({ type: LOGIN, payload: response.data });
    return response.data;
  } catch (e) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const logout = () => ({ type: LOGOUT });
