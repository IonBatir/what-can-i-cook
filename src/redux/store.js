import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export default (AppStore = createStore(rootReducer, applyMiddleware(thunk)));
