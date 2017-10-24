import axios from 'axios';

export const fetchListaUsuarios = (operacaoId) => (
    axios.get(`https://localhost:8443/app/atividades?operacaoId=${operacaoId}`)
);

export const enviarArquivo = (file) => {
    console.log("api");
    const data = new FormData();
    data.append('file', file);
    return axios.post(`https://localhost:8443/app/atividades`, data)
};