import * as firebase from "firebase";
import "firebase/firestore";
import {
  FETCH_ALL_RECIPE_START,
  FETCH_ALL_RECIPE_SUCCESS,
  FETCH_ALL_RECIPE_ERROR,
  ADD_RECIPE_START,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_ERROR
} from "../actions/types";

export const fetchAll = (successCallback, errorCallback) => dispatch => {
  dispatch({ type: FETCH_ALL_RECIPE_START });
  const uid = firebase.auth().currentUser.uid;
  firebase
    .firestore()
    .collection("Recipes")
    .get()
    .then(querySnapshot => {
      let items = [];
      querySnapshot.forEach(item => {
        items.push({ id: item.id, ...item.data() });
      });
      dispatch({ type: FETCH_ALL_RECIPE_SUCCESS, payload: { items } });
      successCallback();
    })
    .catch(error => {
      console.log("fetchAll error: ", error);
      dispatch({ type: FETCH_ALL_RECIPE_ERROR, payload: { error } });
      errorCallback();
    });
};

export const addRecipe = (
  { name, description, algorithm, food },
  successCallback,
  errorCallback
) => dispatch => {
  dispatch({ type: ADD_RECIPE_START });
  const uid = firebase.auth().currentUser.uid;
  firebase
    .firestore()
    .collection("Recipes")
    .add({ name, description, algorithm, food, uid })
    .then(() => {
      dispatch({ type: ADD_RECIPE_SUCCESS });
      successCallback();
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: ADD_RECIPE_ERROR, payload: { error } });
      errorCallback;
    });
};
