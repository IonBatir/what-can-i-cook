import {
  FETCH_ALL_FOOD_START,
  FETCH_ALL_FOOD_SUCCESS,
  FETCH_ALL_FOOD_ERROR,
  ADD_FOOD_START,
  ADD_FOOD_SUCCESS,
  ADD_FOOD_ERROR
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
    case FETCH_ALL_FOOD_START:
      return { ...state, fetchAll: { ...state.fetchAll, loading: true } };
    case FETCH_ALL_FOOD_SUCCESS:
      return {
        ...state,
        ...action.payload,
        fetchAll: { ...state.fetchAll, loading: false }
      };
    case FETCH_ALL_FOOD_ERROR:
      return {
        ...state,
        fetchAll: {
          ...state.fetchAll,
          loading: false,
          error: action.payload.error
        }
      };
    case ADD_FOOD_START:
      return { ...state, add: { ...state.add, loading: true } };
    case ADD_FOOD_SUCCESS:
      return { ...state, add: { ...state.add, loading: false } };
    case ADD_FOOD_ERROR:
      return {
        ...state,
        add: { ...state.add, loading: false, error: action.payload.error }
      };
    default:
      return state;
  }
};
