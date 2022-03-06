// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '../../Componentes/Button/Button';
import './Usuario.css';
import React from 'react';

const Usuario = () => {
    return(
        <div className='paginaUsuario'>
            <div className='lateral'>
                <div className='containerLogo'>
                    <div className='logo'></div>
                </div>
                <div className='containerEndpoints'>
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral'></div>
                </div>
            </div>
            <div className='centro'>
                <h1 className='Letras1'>BIENVENIDO A TU AREA PERSONAL</h1>
                <div className='endpointsCentro'></div>
            </div>
        </div>
    )
};

export default Usuario;