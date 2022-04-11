import axios from "axios";
import { productsAPI } from "./api";
import { GET_CART, GET_FAVORITES, GET_PRODUCTS, GET_PRODUCT_DETAILS, SEARCH_PRODUCTS } from "./types";

export function getProducts() {
    return async (dispatch) => {
        const { data } = await axios(productsAPI)
        dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    }
}

export function getProductDetails(id) {
    return async (dispatch) => {
        const { data } = await axios(`${productsAPI}/${id}`)
        dispatch({
            type: GET_PRODUCT_DETAILS,
            payload: data
        })
    }
}

export function getCart() {
    return (dispatch) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: []
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: GET_CART,
            payload: cart.products
        })
    }
}

export function getFavorites() {
    return (dispatch) => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (!favorites) {
            favorites = {
                products: []
            }
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        dispatch({
            type: GET_FAVORITES,
            payload: favorites.products
        })
    }
}

export function searchProducts(searchValue) {
    return async (dispatch) => {
        const { data } = await axios(`${productsAPI}?title=${searchValue}`)
        dispatch({
            type: SEARCH_PRODUCTS,
            payload: data
        })
    }
}