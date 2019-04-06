import * as firebase from "firebase";
import "firebase/firestore";
import {
  FETCH_ALL_FOOD_START,
  FETCH_ALL_FOOD_SUCCESS,
  FETCH_ALL_FOOD_ERROR,
  ADD_FOOD_START,
  ADD_FOOD_SUCCESS,
  ADD_FOOD_ERROR,
  FETCH_FOOD_NAMES_START,
  FETCH_FOOD_NAMES_SUCCESS,
  FETCH_FOOD_NAMES_ERROR
} from "../actions/types";


export const fetchAll = (successCallback, errorCallback) => dispatch => {
  dispatch({ type: FETCH_ALL_FOOD_START });
  const uid = firebase.auth().currentUser.uid;
  firebase
    .firestore()
    .collection("Food")
    .where("uid", "==", uid)
    .get()
    .then(querySnapshot => {
      let items = [];
      querySnapshot.forEach(item => {
        items.push({ id: item.id, ...item.data() });
      });
      dispatch({ type: FETCH_ALL_FOOD_SUCCESS, payload: { items } });
      successCallback();
    })
    .catch(error => {
      console.log("fetchAll error: ", error);
      dispatch({ type: FETCH_ALL_FOOD_ERROR, payload: { error } });
      errorCallback();
    });
};

export const addFood = (
  { name, bar_code, expire_date, quantity, unit },
  successCallback,
  errorCallback
) => dispatch => {
  dispatch({ type: ADD_FOOD_START });
  const uid = firebase.auth().currentUser.uid;
  firebase
    .firestore()
    .collection("Food")
    .add({ name, bar_code, expire_date, quantity, unit, uid })
    .then(() => {
      dispatch({ type: ADD_FOOD_SUCCESS });
      successCallback();
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: ADD_FOOD_ERROR, payload: { error } });
      errorCallback;
    });
};

export const fetchAllFoodNames = (successCallback, errorCallback) => dispatch => {
  dispatch({ type: FETCH_FOOD_NAMES_START });
  firebase
    .firestore()
    .collection("Food_name")
    .get()
    .then(querySnapshot => {
      let items = [];
      querySnapshot.forEach(item => {
        items.push({ id: item.id, ...item.data() });
      });
      dispatch({ type: FETCH_FOOD_NAMES_SUCCESS, payload: { names: items } });
      successCallback();
    })
    .catch(error => {
      console.log("fetchAll error: ", error);
      dispatch({ type: FETCH_FOOD_NAMES_ERROR, payload: { error } });
      errorCallback();
    });
};

