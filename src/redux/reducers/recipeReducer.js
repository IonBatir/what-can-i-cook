import {
  FETCH_ALL_RECIPE_START,
  FETCH_ALL_RECIPE_SUCCESS,
  FETCH_ALL_RECIPE_ERROR,
  ADD_RECIPE_START,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_ERROR
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
    default:
      return state;
  }
};
