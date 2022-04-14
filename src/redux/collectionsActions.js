import axios from "axios"
import { collectionsAPI, productsAPI } from "./api"
import { GET_COLLECTION, GET_COLLECTIONS, GET_COLLECTION_PRODUCTS } from "./types"

export function getCollections(page, limit) {
    return async (dispatch) => {
        const { data } = await axios(`${collectionsAPI}?page=${page}&limit=${limit}`)
        dispatch({
            type: GET_COLLECTIONS,
            payload: data
        })
    }
}

export function getCollection(id) {
    return async (dispatch) => {
        const { data } = await axios(`${collectionsAPI}/${id}`)
        dispatch({
            type: GET_COLLECTION,
            payload: data
        })
    }
}

export function getCollectionProducts(collection, page, limit) {
    return async (dispatch) => {
        const { data } = await axios(`${productsAPI}?collection=${collection}&page=${page}&limit=${limit}`)
        dispatch({
            type: GET_COLLECTION_PRODUCTS,
            payload: data
        })
    }
}