import {combineReducers} from 'redux';


import credenciales from './datosLogin-reducer';
import busqueda from './busquedaPeliculas-reducer';

const rootReducer = combineReducers({
    credenciales,
    busqueda
});

export default rootReducer;