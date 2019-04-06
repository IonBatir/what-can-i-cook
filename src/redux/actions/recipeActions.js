import * as firebase from "firebase";
import "firebase/firestore";
import {
  FETCH_ALL_RECIPE_START,
  FETCH_ALL_RECIPE_SUCCESS,
  FETCH_ALL_RECIPE_ERROR,
  ADD_RECIPE_START,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_ERROR,
  EDIT_RECIPE_START,
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_ERROR,
  DELETE_RECIPE_START,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_ERROR,
  FILTRE_ALL_RECIPE_START,
  FILTRE_ALL_RECIPE_SUCCESS,
  FILTRE_ALL_RECIPE_ERROR
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
      errorCallback();
    });
};

export const editRecipe = (
  { name, description, algorithm, foods },
  successCallback,
  errorCallback
) => dispatch => {
  dispatch({ type: EDIT_RECIPE_START });
  const uid = firebase.auth().currentUser.uid;
  firebase
    .firestore()
    .collection("Recipes")
    .set({
      description,
      algorithm,
      foods
    })
    .where({
      name,
      uid
    })
    .then(response => {
      console.log("editRecipe response: ", response);
      dispatch({ type: EDIT_RECIPE_SUCCESS });
      successCallback();
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: EDIT_RECIPE_ERROR, payload: { error } });
      errorCallback();
    });
};

export const deleteRecipe = (
  { name },
  successCallback,
  errorCallback
) => dispatch => {
  dispatch({ type: DELETE_RECIPE_START });
  const uid = firebase.auth().currentUser.uid;
  firebase
    .firestore()
    .collection("Recipes")
    .delete()
    .where({
      name,
      uid
    })
    .then(reponse => {
      console.log("deleteRecipe response: ", response);
      dispatch({ type: DELETE_RECIPE_SUCCESS });
      successCallback();
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: DELETE_RECIPE_ERROR, payload: { error } });
      errorCallback();
    });
};

function arrayContainsArray(superset, subset) {
  return subset.every(function(value) {
    return superset.indexOf(value) >= 0;
  });
}

export const filtreRecite = (successCallback, errorCallback) => dispatch => {
  dispatch({ type: FILTRE_ALL_RECIPE_START });
  const uid = firebase.auth().currentUser.uid;
  let myFoods = [];
  firebase
    .firestore()
    .collection("Food")
    .where("uid", "==", uid)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(item => {
        myFoods.push(item.data().name);
      });
    });
  firebase
    .firestore()
    .collection("Recipes")
    .get()
    .then(querySnapshot => {
      let items = [];
      querySnapshot.forEach(item => {
        if (arrayContainsArray(myFoods, item.data().foods))
          items.push({ id: item.id, ...item.data() });
      });
      dispatch({
        type: FILTRE_ALL_RECIPE_SUCCESS,
        payload: { filterItems: items }
      });
      successCallback();
    })
    .catch(error => {
      console.log("filtreAll error: ", error);
      dispatch({ type: FILTRE_ALL_RECIPE_ERROR, payload: { error } });
      errorCallback();
    });
};
