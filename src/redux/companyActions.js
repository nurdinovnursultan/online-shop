import axios from "axios";
import { aboutAPI, advantagesAPI, footerAPI, headerAPI, helpAPI, newsAPI, offersAPI, sliderAPI } from "./api";
import { GET_ABOUT, GET_ADVANTAGES, GET_FOOTER, GET_HEADER, GET_HELP, GET_NEWS, GET_OFFER, GET_SLIDER } from "./types";

export function getAboutUsPage() {
    return async (dispatch) => {
        const { data } = await axios(aboutAPI)
        dispatch({
            type: GET_ABOUT,
            payload: data
        })
    }
}

export function getAdvantages() {
    return async (dispatch) => {
        const { data } = await axios(advantagesAPI)
        dispatch({
            type: GET_ADVANTAGES,
            payload: data
        })
    }
}

export function getFooterInformation() {
    return async (dispatch) => {
        const { data } = await axios(footerAPI)
        dispatch({
            type: GET_FOOTER,
            payload: data
        })
    }
}

export function getHeaderInformation() {
    return async (dispatch) => {
        const { data } = await axios(headerAPI)
        dispatch({
            type: GET_HEADER,
            payload: data
        })
    }
}

export function getHelpPage() {
    return async (dispatch) => {
        const { data } = await axios(helpAPI)
        dispatch({
            type: GET_HELP,
            payload: data
        })
    }
}

export function getNewsPage() {
    return async (dispatch) => {
        const { data } = await axios(newsAPI)
        dispatch({
            type: GET_NEWS,
            payload: data
        })
    }
}

export function getOfferPage() {
    return async (dispatch) => {
        const { data } = await axios(offersAPI)
        dispatch({
            type: GET_OFFER,
            payload: data
        })
    }
}

export function getSliderImages() {
    return async (dispatch) => {
        const { data } = await axios(sliderAPI)
        dispatch({
            type: GET_SLIDER,
            payload: data
        })
    }
}