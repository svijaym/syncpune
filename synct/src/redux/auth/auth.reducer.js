import {
  LOGIN,
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  SIGN,
  SIGN_REQUEST,
  SIGN_ERROR,
} from "./auth.types";

let token = localStorage.getItem("token");
const intialState = {
  isAuth: false,
  token: token,
  loading: false,
  error: false,
};

export const authReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    // case SIGN: {
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    // }
    // case SIGN_REQUEST: {
    //   return {
    //     ...state,
    //     isAuth: true,
    //     token: payload,
    //     loading: false,
    //   };
    // }
    // case SIGN_ERROR: {
    //   localStorage.setItem("token", payload);
    //   return {
    //     ...state,
    //     isAuth: true,
    //     token: payload,
    //     loading: false,
    //   };
    // }
    case LOGIN: {
      localStorage.setItem("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
        loading: false,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: "",
        loading: false,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
