import { DETALLE_PELICULA, TITULO_PELICULA, ESTADO_INICIAL } from '../types';

const initialState = {
    pelicula: {},
    peliculas: []
};

const busquedaPeliculasReducer = (state = initialState, action) => {
    switch (action.type) {
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
        case DETALLE_PELICULA:
            return { ...state, pelicula: action.payload };

        case TITULO_PELICULA:
            return { ...state, peliculas: action.payload };

        case ESTADO_INICIAL:
            return initialState; // Nuevo  Return para que cuando cambie de vista me devuelva al estado inicial

        default:
            return state
    }
}

export default busquedaPeliculasReducer;