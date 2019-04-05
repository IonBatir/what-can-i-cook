import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  SIGN_OUT_USER_START,
  SIGN_OUT_USER_SUCCESS,
  SIGN_OUT_USER_ERROR
} from "../actions/types";

const initialValues = {
  login: {
    loading: false,
    error: null
  },
  resetPassword: {
    loading: false,
    error: null
  },
  register: {
    loading: false,
    error: null
  },
  signOut: {
    loading: false,
    error: null
  },
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null
};

export default (state = initialValues, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return { ...state, login: { ...state.login, loading: true } };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        login: { ...state.login, loading: false }
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        login: { ...state.login, loading: false, error: action.payload.error }
      };
    case RESET_PASSWORD_START:
      return {
        ...state,
        resetPassword: { ...state.resetPassword, loading: true }
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: { ...state.resetPassword, loading: false }
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: false,
          error: action.payload.error
        }
      };
    case REGISTER_USER_START:
      return { ...state, register: { ...state.register, loading: true } };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        register: { ...state.register, loading: false }
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
          error: action.payload.error
        }
      };
    case SIGN_OUT_USER_START:
      return {
        ...state,
        signOut: { ...state.signOut, loading: true }
      };
    case SIGN_OUT_USER_SUCCESS:
      return { ...state, signOut: { ...state.signOut, loading: false } };
    case SIGN_OUT_USER_ERROR:
      return {
        ...state,
        signOut: {
          ...state.signOut,
          loading: false,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
};
