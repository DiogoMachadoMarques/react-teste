import * as constants from './actionTypes';
import * as api from './api';

export function listaAtividades(operacaoId) {
    return (dispatch) => {
        dispatch({ type: constants.ATIVIDADES_FETCH_REQUEST, payload: true });
        api.fetchListaUsuarios(operacaoId)
            .then(res => {
                console.log(res);
                dispatch({ type: constants.ATIVIDADES_FETCH_SUCCESS, payload: res.data });
            }).catch(error => {
                dispatch({ type: constants.ATIVIDADES_FETCH_ERROR, payload: "Erro" });
            })
    }
}