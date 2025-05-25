import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import empReducer from "./reducers/empReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  empReducer: empReducer,
});

export default rootReducer;
