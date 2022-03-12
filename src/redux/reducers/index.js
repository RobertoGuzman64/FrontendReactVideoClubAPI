import {combineReducers} from 'redux';


import credenciales from './datosLogin-reducer';
// AQUI PONDREMOS LA BUSQUEDA DE PELICULA POR TITULO

const rootReducer = combineReducers({
    credenciales
});

export default rootReducer;