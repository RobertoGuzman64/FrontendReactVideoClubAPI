
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
        },2000)
    }
    if(credenciales?.datosUsuario?.token !== undefined){
        return(
            <div>
                Hola {credenciales.datosUsuario.nombre}, Bienvenido al VideoClub,
            </div>
        )
    }else{
        return(
            <div className='paginaHome'>
                Hola, Disculpa pero para acceder a las Peliculas debes Logearte primero....
                <div className='botonHome' onClick={ () => irAlogin()}>
                    Ir a Login
                </div>
            </div>
        )
    }
}

export default Home;