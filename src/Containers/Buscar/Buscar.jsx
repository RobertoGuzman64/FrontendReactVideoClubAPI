import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './Buscar.css';
import LateralUsuario from '../../Components/LateralUsuario/LateralUsuario';

const Buscar = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (props.credenciales.token === '') {
            navigate("/");
        }
    })
    return (
        <div className='paginaBuscar'>
            <LateralUsuario />
            <div className='centro'>
                <div className='vistaBuscar'>
                    
                </div>
            </div>
        </div>
    );
};

export default connect((state) => ({
    credenciales: state.credenciales
}))(Buscar);