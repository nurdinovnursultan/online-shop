import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { collectionsReducer } from "./collectionsReducer";
import { companyReducer } from "./companyReducer";

export const rootReducer = combineReducers({ productsReducer, collectionsReducer, companyReducer })