import { GET_ABOUT, GET_ADVANTAGES, GET_FOOTER, GET_HEADER, GET_HELP, GET_NEWS, GET_OFFER, GET_SLIDER } from "./types"

const initialState = {
    aboutUs: {},
    advantages: [],
    footer: {},
    header: {},
    help: {},
    news: [],
    offer: {},
    slider: []
}

export const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ABOUT:
            return { ...state, aboutUs: action.payload }
        case GET_ADVANTAGES:
            return { ...state, advantages: action.payload }
        case GET_FOOTER:
            return { ...state, footer: action.payload }
        case GET_HEADER:
            return { ...state, header: action.payload }
        case GET_HELP:
            return { ...state, help: action.payload }
        case GET_NEWS:
            return { ...state, news: action.payload }
        case GET_OFFER:
            return { ...state, offer: action.payload }
        case GET_SLIDER:
            return { ...state, slider: action.payload }
        default:
            return state
    }
}