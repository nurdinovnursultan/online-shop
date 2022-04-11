import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { collectionsReducer } from "./collectionsReducer";
import { newsReducer } from "./newsReducer";

export const rootReducer = combineReducers({ productsReducer, collectionsReducer, newsReducer })