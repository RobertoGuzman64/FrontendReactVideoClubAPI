import './LateralAdmin.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';

const LateralAdmin = (props) => {
    // Usamos navigate para que cuando pulsemos logout nos redirija.
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
    let navigate1 = useNavigate();
    const irAusuario = () => {
        setTimeout(() => {
            navigate1('/usuario');
        }, 500)
    }
    let navigate2 = useNavigate();
    const irApedidosAdmin = () => {
        setTimeout(() => {
            navigate2('/pedidosadmin');
        }, 500)
    }
    let navigate3 = useNavigate();
    const irAusuariosAdmin = () => {
        setTimeout(() => {
            navigate3('/usuariosadmin');
        }, 500)
    }
    return (
        <div className='lateral'>
            <div className='containerLogo'>
                <div className='logo2'></div>
            </div>
            <div className='containerEndpoints'>
                <h1 className='nombre'>{props.credenciales?.usuario.nombre}</h1>
                <div className='endpointLateral' onClick={() => irAusuario()}>
                    <img className='icono2'></img>
                    <h1 className='Letras'>IR A USUARIO</h1>
                    <img className='icono2'></img>
                </div>
                <div className='endpointLateral' onClick={() => irApedidosAdmin()}>
                    <img className='icono3'></img>
                    <h1 className='Letras'>PEDIDOS</h1>
                    <img className='icono3'></img>
                </div>
                <div className='endpointLateral' onClick={() => irAusuariosAdmin()}>
                    <img className='icono6'></img>
                    <h1 className='Letras'>USUARIOS</h1>
                    <img className='icono6'></img>
                </div>
                <div className='endpointLateral' onClick={() => logOut()}>
                    <img className='icono5'></img>
                    <h1 className='Letras'>CERRAR SESION</h1>
                    <img className='icono5'></img>
                </div>
            </div>
        </div>
    )
}


export default connect((state) => ({
    credenciales: state.credenciales
}))(LateralAdmin);