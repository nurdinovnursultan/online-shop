import { GET_COLLECTIONS, GET_COLLECTION_PRODUCTS } from "./types";

const initialState = {
    collections: [],
    collectionProducts: {}
}

export const collectionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COLLECTIONS:
            return { ...state, collections: action.payload }
        case GET_COLLECTION_PRODUCTS:
            return { ...state, collectionProducts: action.payload }
        default:
            return state
    }
}