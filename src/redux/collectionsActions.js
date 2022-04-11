import axios from "axios"
import { collectionsAPI } from "./api"
import { GET_COLLECTIONS, GET_COLLECTION_PRODUCTS } from "./types"

export function getCollections() {
    return async (dispatch) => {
        const { data } = await axios(collectionsAPI)
        dispatch({
            type: GET_COLLECTIONS,
            payload: data
        })
    }
}

export function getCollectionProducts(id) {
    return async (dispatch) => {
        const { data } = await axios(`${collectionsAPI}/${id}`)
        dispatch({
            type: GET_COLLECTION_PRODUCTS,
            payload: data
        })
    }
}