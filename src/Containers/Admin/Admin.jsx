// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Admin.css';
import React from 'react';
import LateralAdmin from '../../Components/LateralAdmin/LateralAdmin';

const Admin = () => {
    return(
        <div className='paginaAdmin'>
            <LateralAdmin/>
            <div className='centro2'>
                <h1 className='Letras1'>BIENVENIDO A TU AREA DE ADMINISTRADOR</h1>
                <div className='ENDPOINTSCENTRO'></div>
            </div>
        </div>
    )
};

export default Admin;