import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './Admin.css';
import LateralAdmin from '../../Components/LateralAdmin/LateralAdmin';

const Admin = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (props.credenciales.usuario.rol !== true) {
            navigate("/");
        }
    })
    return (
        <div className='paginaAdmin'>
            <LateralAdmin />
            <div className='centro2'>
                <h1 className='Letras1'>BIENVENIDO A TU AREA DE ADMINISTRADOR</h1>
                <div className='vistaAdministrador'>
                    <h1>Puedes dirigirte a donde quieras desde la barra de navegación</h1>
                </div>
            </div>
        </div>
    )
};

export default connect((state)=>({
    credenciales: state.credenciales
}))(Admin);