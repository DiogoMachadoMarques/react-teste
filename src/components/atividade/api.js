import axios from 'axios';

export const fetchListaUsuarios = (operacaoId) => (
    axios.get(`https://localhost:8443/app/atividades?operacaoId=${operacaoId}`)
  );