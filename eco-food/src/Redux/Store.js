import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as AuthReducer} from "./AuthReducer/reducer"
import {reducer as AppReducer} from "./ProductReducer/reducer"
import thunk from "redux-thunk";

const rootRouter = combineReducers({AuthReducer,AppReducer});

export const Store = legacy_createStore(rootRouter,applyMiddleware(thunk))