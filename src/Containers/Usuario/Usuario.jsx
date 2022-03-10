import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';
import './Usuario.css';

import LateralUsuario from '../../Components/LateralUsuario/LateralUsuario';

const Usuario = () => {
    return(
        <div className='paginaUsuario'>
            <LateralUsuario/>
            <div className='centro'>
                <h1 className='Letras1'>BIENVENIDO A TU AREA PERSONAL</h1>
                <div className='vistaUsuario'></div>
            </div>
        </div>
    );
};

export default connect((state)=>({
    credenciales: state.credenciales
}))(Usuario);