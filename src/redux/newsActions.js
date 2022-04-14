import axios from "axios";
import { companyAPI, newsAPI } from "./api";
import { GET_COMPANY_INFORMATION, GET_NEWS } from "./types";

export function getNews(limit) {
    return async (dispatch) => {
        const { data } = await axios(`${newsAPI}?page=1&limit=${limit}`)
        dispatch({
            type: GET_NEWS,
            payload: data
        })
    }
}

export function getCompanyInformation() {
    return async (dispatch) => {
        const { data } = await axios(companyAPI)
        dispatch({
            type: GET_COMPANY_INFORMATION,
            payload: data
        })
    }
}