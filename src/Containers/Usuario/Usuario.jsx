import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './Usuario.css';
import LateralUsuario from '../../Components/LateralUsuario/LateralUsuario';

const Usuario = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (props.credenciales.token === '') {
            navigate("/");
        }
    })
    return (
        <div className='paginaUsuario'>
            <LateralUsuario />
            <div className='centro'>
                <h1 className='Letras1'>BIENVENIDO A TU AREA PERSONAL</h1>
                <div className='vistaUsuario'>
                    <h1>Puedes dirigirte a donde quieras desde la barra de navegación</h1>
                </div>
            </div>
        </div>
    );
};

export default connect((state) => ({
    credenciales: state.credenciales
}))(Usuario);