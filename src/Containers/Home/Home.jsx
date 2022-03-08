
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () =>{
    let navigate = useNavigate();
    // Comprobamos en el Hook si tenemos el TOKEN (Si estamos Logeados).
    const [credenciales, setCredenciales] = useState(JSON.parse(localStorage.getItem('datosUsuario')));
    const irAlogin = () => {
        setTimeout( () => {
            navigate('/login');
        },500)
    }
    if(credenciales?.datosUsuario?.token !== undefined){
        return(
            <div>
                Hola {credenciales.datosUsuario.nombre}, Bienvenido al VideoClub,
            </div>
        )
    }else{
        return(
            <div className='paginaHome' >
                <div className='parteIzquierda'>
                    <h1 className='letreroPrincipal'>BIENVENID@ A NUESTRA PAGINA WEB</h1>
                </div>
                <div className='parteDerecha'>
                    <div className='contenedor'>
                        <div className='contenedorCartel'>
                            <h1 class='Letras'>Para poder acceder al contenido debes logearte primero.</h1>
                        </div>
                        <div className='boton' onClick={ () => irAlogin()}>
                            Ir a Login
                        </div>
                </div>
                </div>
            </div>
        )
    }
};

export default Home;