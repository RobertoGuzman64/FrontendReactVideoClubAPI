import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Redux.
import { connect } from 'react-redux';
import { DETALLE_PELICULA } from '../../redux/types';

// Utiles.
// import {raiz} from '../../utiles';

import axios from 'axios';
import './Peliculas.css';
import LateralUsuario from '../../Components/LateralUsuario/LateralUsuario';


const Peliculas = (props) => {


    const [peliculas, setPeliculas] = useState([]);
    let navigate = useNavigate();


    useEffect( ()=> {
        //No es correcto realizar el try catch en el useEffect
        //dado que el useEffect es en si un proceso con un callback, meter un proceso
        //asíncrono traería problemas y React no lo permite, por ello, llamamos a una funcion
        //que habremos hecho nosotros y se encargará de ello
        traerPeliculas();
    },[]);


    // useEffect Personalizado para el Hook de Peliculas.
    useEffect( ()=> {
        console.log("vaya, , Peliculas ha cambiado, ", peliculas);
    },[peliculas]);


    const traerPeliculas = async () => {
        try {
            let res = await axios.get("https://rgd-videoclub-backend.herokuapp.com/peliculas");
            //Una vez han venido los datos del backend, nosotros, lo siguiente que haremos para que no se pierdan
            //será setear esos datos en el hook, haciendo que las peliculas estén disponibles 
            //para los return del componente.
            console.log(res.data)
            setTimeout( ()=> {
                setPeliculas(res.data);
            },1000);

        } catch (error) {
            console.log(error);
        }
    };


    const escogePelicula = (pelicula) => {
        console.log(pelicula);
        props.dispatch({type: DETALLE_PELICULA, payload: pelicula});
        //Redirigimos a la pagina detallePelicula con navigate
        navigate("/detallePelicula");
    };


    if (peliculas[0]?.id !==undefined){

        return(
            <div className='paginaPeliculas'>
                <LateralUsuario/>
                <div className='centro'>
                    <h1 className='Letras3'>SELECCIONA LA PELICULA QUE QUIERAS ALQUILAR</h1>
                    <div className='vistaPeliculas'>
                        {
                            //Voy a mapear las películas
                            peliculas.map(pelicula =>{
                                return (
                                    //Al mapear, cada elemento que se itera del array (en este caso pelicula es ese elemento),
                                    //si le hacemos propiedad onclick y pasamos el elemento como argumento,
                                    //a esa funcion le va a llegar el objeto que hayamos clickado entero
                                    <div className='cardPelicula' key={pelicula.id} onClick={()=>escogePelicula(pelicula)}>
                                        <img className='imagenPelicula' src={pelicula.imagen} alt={pelicula.titulo}/>
                                        <p>{pelicula.sinopsis}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        )
    } else {

        return (
            <div className='paginaPeliculas'>
            <LateralUsuario/>
            <div className='centro'>
                <div className='vistaPeliculas'>
                    <div className='espinner'></div>
                </div>
            </div>
        </div>
        )
    }

};

export default connect()(Peliculas);