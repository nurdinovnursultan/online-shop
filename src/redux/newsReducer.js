import { GET_COMPANY_INFORMATION, GET_NEWS } from "./types"

const initialState = {
    news: [],
    companyInformation: []
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return { ...state, news: action.payload }
        case GET_COMPANY_INFORMATION:
            return { ...state, companyInformation: action.payload }
        default:
            return state
    }
}