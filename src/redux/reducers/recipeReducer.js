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

const initialValues = {
  fetchAll: {
    loading: false,
    error: null
  },
  add: {
    loading: false,
    error: null
  },
  edit: {
    loading: false,
    error: null
  },
  delete: {
    loading: false,
    error: null
  },
  filtreRecite: {
    loading: false,
    error: null
  },
  items: []
};

export default (state = initialValues, action) => {
  switch (action.type) {
    case FETCH_ALL_RECIPE_START:
      return { ...state, fetchAll: { ...state.fetchAll, loading: true } };
    case FETCH_ALL_RECIPE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        fetchAll: { ...state.fetchAll, loading: false }
      };
    case FETCH_ALL_RECIPE_ERROR:
      return {
        ...state,
        fetchAll: {
          ...state.fetchAll,
          loading: false,
          error: action.payload.error
        }
      };
    case ADD_RECIPE_START:
      return { ...state, add: { ...state.add, loading: true } };
    case ADD_RECIPE_SUCCESS:
      return { ...state, add: { ...state.add, loading: false } };
    case ADD_RECIPE_ERROR:
      return {
        ...state,
        add: { ...state.add, loading: false, error: action.payload.error }
      };
    case EDIT_RECIPE_START:
      return { ...state, edit: { ...state.edit, loading: true } };
    case EDIT_RECIPE_SUCCESS:
      return { ...state, edit: { ...state.edit, loading: false } };
    case EDIT_RECIPE_ERROR:
      return {
        ...state,
        edit: { ...state.edit, loading: false, error: action.payload.error }
      };
    case DELETE_RECIPE_START:
      return { ...state, delete: { ...state.delete, loading: true } };
    case DELETE_RECIPE_SUCCESS:
      return { ...state, delete: { ...state.delete, loading: false } };
    case DELETE_RECIPE_ERROR:
      return {
        ...state,
        delete: {
          ...state.delete,
          loading: false,
          error: action.payload.error
        }
      };
    case FILTRE_ALL_RECIPE_START:
      return {
        ...state,
        filtreRecite: { ...state.filtreRecite, loading: true }
      };
    case FILTRE_ALL_RECIPE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        filtreRecite: { ...state.filtreRecite, loading: false }
      };
    case FILTRE_ALL_RECIPE_ERROR:
      return {
        ...state,
        filtreRecite: {
          ...state.filtreRecite,
          loading: false,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
};
