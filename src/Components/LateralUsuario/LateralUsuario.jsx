import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';
import './LateralUsuario.css';


const LateralUsuario = (props) => {
    // Usamos navigate para que cuando pulsemos los botones nos redirija.
    let navigate = useNavigate();
    useEffect(() => {
        console.log(props.credenciales)
    })
    // ESTA FUNCION HACE QUE PUEDAS DESLOGUEARTE
    const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({ type: LOGOUT });
        setTimeout(() => {
            navigate("/");
        }, 1500);
    }
    let navigate2 = useNavigate();
    const irAperfil = () => {
        setTimeout(() => {
            navigate2('/perfil');
        }, 500)
    }
    let navigate3 = useNavigate();
    const irApeliculas = () => {
        setTimeout(() => {
            navigate3('/peliculas');
        }, 500)
    }
    let navigate4 = useNavigate();
    const irApedidos = () => {
        setTimeout(() => {
            navigate4('/pedidos');
        }, 500)
    }
    let navigate5 = useNavigate();
    const irAadmin = () => {
        setTimeout(() => {
            navigate5('/admin');
        }, 500)
    }
    let navigate6 = useNavigate();
    const irAbuscar = () => {
        setTimeout(() => {
            navigate6('/buscar');
        }, 500)
    }
    if (props.credenciales.usuario.rol === true) {
        return (
            <div className='lateral'>
                <div className='containerLogo'>
                    <div className='logo'></div>
                </div>
                <div className='containerEndpoints'>
                    <h1 className='nombre'>{props.credenciales?.usuario.nick}</h1>
                    <div className='endpointLateral' onClick={() => irAadmin()}>
                        <img className='icono'></img>
                        <h1 className='Letras'>ADMINISTRADOR</h1>
                        <img className='icono'></img>
                    </div>
                    <div className='endpointLateral' onClick={() => irAbuscar()}>
                        <img className='icono7'></img>
                        <h1 className='Letras'>BUSCAR PELICULA</h1>
                        <img className='icono7'></img>
                    </div>
                    <div className='endpointLateral' onClick={() => irApeliculas()}>
                        <img className='icono1'></img>
                        <h1 className='Letras'>PELICULAS</h1>
                        <img className='icono1'></img>
                    </div>
                    <div className='endpointLateral' onClick={() => irApedidos()}>
                        <img className='icono3'></img>
                        <h1 className='Letras'>PEDIDOS</h1>
                        <img className='icono3'></img>
                    </div>
                    <div className='endpointLateral' onClick={() => irAperfil()}>
                        <img className='icono4'></img>
                        <h1 className='Letras'>MODIFICAR PERFIL</h1>
                        <img className='icono4'></img>
                    </div>
                    <div className='endpointLateral' onClick={() => logOut()}>
                        <img className='icono5'></img>
                        <h1 className='Letras'>CERRAR SESION</h1>
                        <img className='icono5'></img>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='lateral'>
                <div className='containerLogo'>
                    <div className='logo'></div>
                </div>
                <div className='containerEndpoints'>
                    <h1 className='nombre'>{props.credenciales?.usuario.nick}</h1>
                    <div className='endpointLateral' onClick={() => irAbuscar()}>
                        <img className='icono7'></img>
                        <h1 className='Letras'>BUSCAR PELICULA</h1>
                        <img className='icono7'></img>
                    </div>
                    <div className='endpointLateral' onClick={() => irApeliculas()}>
                        <img className='icono1'></img>
                        <h1 className='Letras'>PELICULAS</h1>
                        <img className='icono1'></img>
                    </div>
                    <div className='endpointLateral' onClick={() => irApedidos()}>
                        <img className='icono3'></img>
                        <h1 className='Letras'>PEDIDOS</h1>
                        <img className='icono3'></img>
                    </div>
                    <div className='endpointLateral' onClick={() => irAperfil()}>
                        <img className='icono4'></img>
                        <h1 className='Letras'>MODIFICAR PERFIL</h1>
                        <img className='icono4'></img>
                    </div>
                    <div className='endpointLateral' onClick={() => logOut()}>
                        <img className='icono5'></img>
                        <h1 className='Letras'>CERRAR SESION</h1>
                        <img className='icono5'></img>
                    </div>
                </div>
            </div>
        )
    };
};


export default connect((state) => ({
    credenciales: state.credenciales
}))(LateralUsuario);




