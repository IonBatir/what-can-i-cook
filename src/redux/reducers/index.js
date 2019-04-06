import { combineReducers } from "redux";
import userReducer from "./userReducer";
import foodReducer from "./foodReducer";
import recipeReducer from "./recipeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  food: foodReducer,
  recipe: recipeReducer
});

export default rootReducer;
