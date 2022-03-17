import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { TITULO_PELICULA } from '../../redux/types';

import './Buscar.css';
import LateralUsuario from '../../Components/LateralUsuario/LateralUsuario';
import axios from 'axios';

const Buscar = (props) => {


    let navigate = useNavigate();
    const [titulo, setTitulo] = useState("");


    useEffect(()=>{
        console.log(props.peliculas);
    },[]);


    useEffect(() => {
        if (props.credenciales.token === '') {
            navigate("/");
        }
    })


    const manejador = (ev) => {
        setTitulo(ev.target.value);
    }


    const busquedaPorTitulo = async () => {
        //Axios que trae resultados....
        try {
            let resultados = await axios.get(`https://rgd-videoclub-backend.herokuapp.com/peliculas/titulo/${titulo}`);
            //Guardo en redux los resultados de las películas
            props.dispatch({ type: TITULO_PELICULA, payload: resultados.data });
            // setTimeout(()=>{
            //     navigate("/searchresults");
            // },500);
        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <div className='paginaBuscar'>
            <LateralUsuario />
            <div className='centro'>
                <div className='buscador'>
                    <input className='input3' placeholder="Busca una Película por Título" autoComplete="off" onChange={(ev) => manejador(ev)} />
                    <button onClick={() => busquedaPorTitulo()} className='botonBusqueda' type='primary'>
                        Buscar
                    </button>
                </div>
                <div className='vistaBuscar'>
                    {
                        //Voy a mapear las películas
                        props.peliculas.map(pelicula => {
                            return (
                                //Al mapear, cada elemento que se itera del array (en este caso pelicula es ese elemento),
                                //si le hacemos propiedad onclick y pasamos el elemento como argumento,
                                //a esa funcion le va a llegar el objeto que hayamos clickado entero
                                <div className='cardPelicula' key={pelicula.id} /*onClick={() => escogePelicula(pelicula)}*/>
                                    <p className='Letras'>{pelicula.titulo}</p>
                                    <img className='imagenPelicula' src={pelicula.imagen} alt={pelicula.titulo} />
                                    <p>{pelicula.sinopsis}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default connect((state) => ({
    credenciales: state.credenciales,
    peliculas: state.busqueda.peliculas
}))(Buscar);