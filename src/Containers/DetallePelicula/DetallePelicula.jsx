import './DetallePelicula.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import LateralUsuario from '../../Components/LateralUsuario/LateralUsuario';
import axios from 'axios';

const DetallePelicula = (props) => {
    let navigate = useNavigate();
    useEffect(()=> {
        //Compruebo si hay datos de la película escogida en redux, en caso de NO
        //haber datos, redirijo a HOME.
        if(props.busqueda?.titulo === undefined){
            navigate("/");
        }
    });
    const alquilar = async () => {
        console.log(props)
        let body = {
            // Este body corresponde a los campos que necesitamos para hacer un pedido.
            precio: 10,
            peliculaId: props.busqueda.id,
            usuarioId: props.credenciales.usuario.id,
            fecha: "2022-02-21 12:32:43"
        };
        console.log("dale papaya",body)
        let config = {
            headers: {Authorization : `Bearer ${props.credenciales.token}`}
        };
        try {
            let res = await axios.post("https://rgd-videoclub-backend.herokuapp.com/pedidos", body, config);
            if (res) {
                console.log(res);
                navigate ("/pedidos");
            }
        } catch (error) {
            console.log(error)
        };
    }
    return(
        <div className='paginaDetallePelicula'>
            <LateralUsuario/>
            <div className='centro'>
                <div className='vistaDetallePelicula'>
                    <div className='cardDetallePelicula'>
                    <img className="imagenPelicula2" src={props.busqueda.imagen} alt={props.busqueda.titulo}/>
                    <p className='Letras6'>{props.busqueda.sinopsis}</p>
                    <div className='boton'onClick={()=>alquilar()}>ALQUILAR</div>
                    </div>
                </div>  
            </div>
        </div>
    )
};

export default connect((state) => ({
    credenciales: state.credenciales,
    busqueda : state.busqueda.pelicula
}))(DetallePelicula);