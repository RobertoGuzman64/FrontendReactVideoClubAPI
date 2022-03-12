import { DETALLE_PELICULA } from '../types';

const initialState = {
    pelicula: {},
    peliculas: []
};

const busquedaPeliculasReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
        case DETALLE_PELICULA :
            return {...state, film: action.payload};

        case TITULO_PELICULA :
            return {...state, peliculas: action.payload};

        default :
            return state
    }
}

export default busquedaPeliculasReducer;