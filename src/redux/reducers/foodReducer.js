import {
  FETCH_ALL_FOOD_START,
  FETCH_ALL_FOOD_SUCCESS,
  FETCH_ALL_FOOD_ERROR,
  ADD_FOOD_START,
  ADD_FOOD_SUCCESS,
  ADD_FOOD_ERROR,
  EDIT_FOOD_START,
  EDIT_FOOD_SUCCESS,
  EDIT_FOOD_ERROR,
  DELETE_FOOD_START,
  DELETE_FOOD_SUCCESS,
  DELETE_FOOD_ERROR,
  FETCH_FOOD_NAMES_START,
  FETCH_FOOD_NAMES_SUCCESS,
  FETCH_FOOD_NAMES_ERROR
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
  fetchNames: {
    loading: false,
    error: null
  },
  items: [],
  names: []
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
      return {
        ...state,
        items: [...state.items, action.payload.item],
        add: { ...state.add, loading: false }
      };
    case ADD_FOOD_ERROR:
      return {
        ...state,
        add: { ...state.add, loading: false, error: action.payload.error }
      };
    case EDIT_FOOD_START:
      return { ...state, edit: { ...state.edit, loading: true } };
    case EDIT_FOOD_SUCCESS:
      return {
        ...state,
        items: [
          ...state.items.filter(item => item.id != action.payload.item.id),
          action.payload.item
        ],
        edit: { ...state.edit, loading: false }
      };
    case EDIT_FOOD_ERROR:
      return {
        ...state,
        edit: { ...state.edit, loading: false, error: action.payload.error }
      };
    case DELETE_FOOD_START:
      return { ...state, delete: { ...state.delete, loading: true } };
    case DELETE_FOOD_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id != action.payload.id),
        delete: { ...state.delete, loading: false }
      };
    case DELETE_FOOD_ERROR:
      return {
        ...state,
        delete: { ...state.delete, loading: false, error: action.payload.error }
      };
    case FETCH_FOOD_NAMES_START:
      return { ...state, fetchNames: { ...state.fetchNames, loading: true } };
    case FETCH_FOOD_NAMES_SUCCESS:
      return {
        ...state,
        ...action.payload,
        fetchNames: { ...state.fetchNames, loading: false }
      };
    case FETCH_FOOD_NAMES_ERROR:
      return {
        ...state,
        fetchNames: {
          ...state.fetchNames,
          loading: false,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
};
