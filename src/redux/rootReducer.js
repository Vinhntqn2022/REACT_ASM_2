import { combineReducers } from "redux";

import { AuthReducer } from "./slices/AuthSlice";
import { AlertReducer } from "./slices/AlertSlice";
import { TodoReducer } from "./slices/TodoSlice";

const rootReducer = combineReducers({
    AuthReducer,
    AlertReducer,
    TodoReducer
})
export default rootReducer;