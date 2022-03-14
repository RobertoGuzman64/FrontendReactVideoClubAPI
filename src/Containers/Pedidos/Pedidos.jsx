// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '../../Componentes/Button/Button';
import './Pedidos.css';
import React from 'react';
import LateralUsuario from '../../Components/LateralUsuario/LateralUsuario';

const Pedidos = () => {
    return(
        <div className='paginaPedidos'>
            <LateralUsuario/>
            <div className='centro'>
                <div className='vistaPedidos'>
                    
                </div>
            </div>
        </div>
    )
};

export default Pedidos;