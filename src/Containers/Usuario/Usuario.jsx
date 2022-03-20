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
            <div className='centroUsuario'>
                <h1 className='Letras11'>BIENVENIDO A TU AREA PERSONAL</h1>
                <div className='vistaUsuario'>
                    <h1 className='Letras77'>PUEDES DIRIGIRTE A DONDE QUIERAS DESDE LA BARRA DE NAVEGACIÓN</h1>
                    <h1 className='Letras77'>PUEDES BUSCAR UNA PELICULA POR TITULO</h1>
                    <h1 className='Letras77'>PUEDES MOSTRAR TODAS LAS PELICULAS QUE TENEMOS</h1>
                    <h1 className='Letras77'>PUEDES VER TUS PEDIDOS</h1>
                    <h1 className='Letras77'>PUEDES MODIFICAR TU PERFIL</h1>
                    <h1 className='Letras77'>PUEDES CERRAR SESION Y VOLVER CUANDO QUIERAS</h1>
                </div>
            </div>
        </div>
    );
};

export default connect((state) => ({
    credenciales: state.credenciales
}))(Usuario);
