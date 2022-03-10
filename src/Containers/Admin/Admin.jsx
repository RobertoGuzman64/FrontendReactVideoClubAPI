// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Admin.css';
import React from 'react';
// import Button from '../../Componentes/Button/Button';

const Admin = () => {
    return(
        <div className='paginaAdmin'>
            <div className='lateral'>
                <div className='containerLogo'>
                    <div className='logo2'></div>
                </div>
                <div className='containerEndpoints'>
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral'></div>
                    <div className='endpointLateral'></div>
                </div>
            </div>
            <div className='centro2'>
                <h1 className='Letras1'>BIENVENIDO A TU AREA DE ADMINISTRADOR</h1>
                <div className='ENDPOINTSCENTRO'></div>
            </div>
        </div>
    )
};

export default Admin;