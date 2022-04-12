import axios from "axios";
import { companyAPI, newsAPI } from "./api";
import { GET_COMPANY_INFORMATION, GET_NEWS } from "./types";

export function getNews() {
    return async (dispatch) => {
        const { data } = await axios(newsAPI)
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