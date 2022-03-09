import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import {connect} from 'react-redux';
import './Usuario.css';


const Usuario = (props) => {
    let navigate = useNavigate();
    useEffect(()=>{
        console.log(props.credenciales)
    })
    const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({type:LOGOUT});
        setTimeout(()=>{
            navigate("/");
        },1500);
    }
    return(
        <div className='paginaUsuario'>
            <div className='lateral'>
                <div className='containerLogo'>
                    <div className='logo'></div>
                </div>
                <div className='containerEndpoints'>
                    {props.credenciales?.usuario.nombre}
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral' onClick={()=>logOut()}>
                        <h1 className='Letras'>CERRAR SESION</h1>
                    </div>
                </div>
            </div>
            <div className='centro'>
                <h1 className='Letras1'>BIENVENIDO A TU AREA PERSONAL</h1>
                <div className='endpointsCentro'></div>
            </div>
        </div>
    );
};



export default connect((state)=>({
    credenciales: state.credenciales
}))(Usuario);