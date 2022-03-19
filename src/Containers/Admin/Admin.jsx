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
                    <h1 className='Letras7'>PUEDES DIRIGIRTE A DONDE QUIERAS DESDE LA BARRA DE NAVEGACIÓN</h1>
                    <h1 className='Letras7'>PUEDES MOSTRAR TODOS LOS PEDIDOS DE LOS USUARIOS</h1>
                    <h1 className='Letras7'>PUEDES MOSTRAR TODOS LOS USUARIOS DE NUESTRA APP</h1>
                    <h1 className='Letras7'>PUEDES VOLVER A LA ZONA DE USUARIO</h1>
                    <h1 className='Letras7'>PUEDES CERRAR SESION Y VOLVER CUANDO QUIERAS</h1>
                </div>
            </div>
        </div>
    )
};

export default connect((state) => ({
    credenciales: state.credenciales
}))(Admin);