import { auth } from "firebase";
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
  SIGN_OUT_USER_ERROR,
  ON_AUTH_START,
  ON_AUTH_SUCCESS,
  ON_AUTH_FAIL
} from "./types";

export const login = (
  { email, password },
  successCallback,
  errorCallback
) => dispatch => {
  dispatch({ type: LOGIN_USER_START });
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          displayName: response.user.displayName,
          email: response.user.email,
          phoneNumber: response.user.phoneNumber,
          photoURL: response.user.photoURL
        }
      });
      successCallback();
    })
    .catch(error => {
      dispatch({ type: LOGIN_USER_ERROR, payload: { error } });
      errorCallback();
    });
};

export const resetPassword = (
  { email },
  successCallback,
  errorCallback
) => dispatch => {
  dispatch({ type: RESET_PASSWORD_START });
  auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: {} });
      successCallback();
    })
    .catch(error => {
      console.log("resetPassword: ", error);
      dispatch({ type: RESET_PASSWORD_ERROR, payload: { error } });
      errorCallback();
    });
};

export const registerUser = (
  { email, password },
  successCallback,
  errorCallback
) => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          displayName: response.user.displayName,
          email: response.user.email,
          phoneNumber: response.user.phoneNumber,
          photoURL: response.user.photoURL
        }
      });
      successCallback();
    })
    .catch(error => {
      dispatch({ type: REGISTER_USER_ERROR, payload: { error } });
      errorCallback();
    });
};

export const signOut = (successCallback, errorCallback) => dispatch => {
  dispatch({ type: SIGN_OUT_USER_START });
  auth()
    .signOut()
    .then(response => {
      console.log("signOut: ", response);
      dispatch({ type: SIGN_OUT_USER_SUCCESS, payload: {} });
      successCallback();
    })
    .catch(error => {
      console.log("signOut error: ", error);
      dispatch({ type: SIGN_OUT_USER_ERROR, payload: { error } });
      errorCallback();
    });
};

export const onAuth = successCallback => dispatch => {
  dispatch({ type: ON_AUTH_START });
  auth().onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: ON_AUTH_SUCCESS,
        payload: {
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL
        }
      });
      successCallback();
    } else dispatch({ type: ON_AUTH_FAIL });
  });
};
