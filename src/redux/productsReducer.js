import { GET_BESTSELLERS, GET_CART, GET_FAVORITES, GET_LATEST, GET_PRODUCTS, GET_PRODUCT_DETAILS, SEARCH_PRODUCTS } from "./types";

const initialState = {
    products: [],
    productDetails: {},
    bestsellers: [],
    latest: [],
    cart: [],
    favorites: [],
    searchProducts: ""
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.payload }
        case GET_PRODUCT_DETAILS:
            return { ...state, productDetails: action.payload }
        case GET_BESTSELLERS:
            return { ...state, bestsellers: action.payload }
        case GET_LATEST:
            return { ...state, latest: action.payload }
        case GET_CART:
            return { ...state, cart: action.payload }
        case GET_FAVORITES:
            return { ...state, favorites: action.payload }
        case SEARCH_PRODUCTS:
            return { ...state, searchProducts: action.payload }
        default:
            return state
    }
}