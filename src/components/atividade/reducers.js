import * as constants from './actionTypes';

const initialState = {
    inicial: false,
    loading: false,
    lista: null,
}

export default function loginUpdate(state = initialState, { type, payload }) {
    switch (type) {
        case constants.ATIVIDADES_FETCH_REQUEST:
            return {
                ...state,
                loading: true
        };
        case constants.ATIVIDADES_FETCH_SUCCESS:
            return {
                ...state,
                lista: payload,
                loading: false
            };
        case constants.ATIVIDADES_FETCH_ERROR:
            return {

            };
        default:
            return state;
    }
}