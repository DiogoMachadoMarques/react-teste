import { combineReducers } from 'redux';
import atividades from './components/atividade/reducers'


const rootReducer = combineReducers({
    user: () => ({}),
    atividades
})

export default rootReducer;