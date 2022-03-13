import './DetallePelicula.css';
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import LateralUsuario from '../../Components/LateralUsuario/LateralUsuario';

const DetallePelicula = (props) => {
    let navigate = useNavigate();
    useEffect(()=> {
        //Compruebo si hay datos de la película escogida en redux, en caso de NO
        //haber datos, redirijo a HOME.
        if(props.busqueda?.titulo === undefined){
            navigate("/");
        }
    });
    return(
        <div className='paginaDetallePelicula'>
            <LateralUsuario/>
            <div className='centro'>
                <div className='vistaDetallePelicula'>
                    <div className='cardDetallePelicula'>
                    <img className="imagenPelicula2" src={props.busqueda.imagen} alt={props.busqueda.titulo}/>
                    <p>{props.busqueda.sinopsis}</p>
                    <div className='boton'>ALQUILAR</div>
                    </div>
                </div>  
            </div>
        </div>
    )
};

export default connect((state) => ({
    credenciales: state.credenciales,
    busqueda : state.busqueda.pelicula
}))(DetallePelicula);