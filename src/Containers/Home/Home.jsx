
// import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () =>{
    let navigate = useNavigate();
    const irAlogin = () => {
        setTimeout( () => {
            navigate('/login');
        },500)
    }
    return(
        <div className='paginaHome' >
            <div className='parteIzquierda'>
                <h1 className='letreroPrincipal'>BIENVENID@ A NUESTRA PAGINA WEB</h1>
            </div>
            <div className='parteDerecha'>
                <div className='contenedor'>
                    <div className='contenedorCartel'>
                        <h1 className='Letras'>Para poder acceder al contenido debes logearte primero, és gratis hasta que desees alquilar alguna pelicula.</h1>
                    </div>
                    <div className='boton' onClick={ () => irAlogin()}>
                        Ir a Login
                    </div>
            </div>
            </div>
        </div>
    );
};


export default Home;