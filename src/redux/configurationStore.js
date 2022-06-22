import countriesReducer from "./countries/countries";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  countries: countriesReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk,logger))


export default store
