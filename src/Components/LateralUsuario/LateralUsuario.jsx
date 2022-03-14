import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';
import './LateralUsuario.css';

const LateralUsuario = (props) => {
    // Usamos navigate para que cuando pulsemos logout nos redirija.
    let navigate = useNavigate();
    useEffect(()=>{
        console.log(props.credenciales)
    })
    // ESTA FUNCION HACE QUE PUEDAS DESLOGUEARTE
    const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({type:LOGOUT});
        setTimeout(()=>{
            navigate("/");
        },1500);
    }
    let navigate2 = useNavigate();
    const irAperfil = () => {
        setTimeout( () => {
            navigate2('/perfil');
        },500)
    }
    let navigate3 = useNavigate();
    const irApeliculas = () => {
        setTimeout( () => {
            navigate3('/peliculas');
        },500)
    }
    let navigate4 = useNavigate();
    const irApedidos = () => {
        setTimeout( () => {
            navigate4('/pedidos');
        },500)
    }
    return (
        <div className='lateral'>
            <div className='containerLogo'>
                <div className='logo'></div>
            </div>
            <div className='containerEndpoints'>
                <h1 className='nombre'>{props.credenciales?.usuario.nombre}</h1>
                <div className='endpointLateral'onClick={() => irApeliculas()}>
                    <h1 className='Letras'>PELICULAS</h1>
                </div>
                <div className='endpointLateral'onClick={() => irApedidos()}>
                    <h1 className='Letras'>PEDIDOS</h1>
                </div>
                <div className='endpointLateral'></div>
                <div className='endpointLateral'></div>
                <div className='endpointLateral'onClick={() => irAperfil()}>
                    <h1 className='Letras'>MODIFICAR PERFIL</h1>
                </div>
                <div className='endpointLateral' onClick={() => logOut()}>
                    <h1 className='Letras'>CERRAR SESION</h1>
                </div>
            </div>
        </div>
    )
}


export default connect((state)=>({
    credenciales: state.credenciales
}))(LateralUsuario);




