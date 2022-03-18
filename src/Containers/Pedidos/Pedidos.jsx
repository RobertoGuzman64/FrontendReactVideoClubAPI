import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';

import './Pedidos.css';
import axios from 'axios';
import LateralUsuario from '../../Components/LateralUsuario/LateralUsuario';

const Pedidos = (props) => {
    // let id = props.credenciales.id
    const [pedidos, setPedidos] = useState([]);
    let navigate = useNavigate();
    let config = {
        headers: { Authorization: `Bearer ${props.credenciales.token}` }
    };


    useEffect(() => {
        //No es correcto realizar el try catch en el useEffect
        //dado que el useEffect es en si un proceso con un callback, meter un proceso
        //asíncrono traería problemas y React no lo permite, por ello, llamamos a una funcion
        //que habremos hecho nosotros y se encargará de ello
        traerPedidos();
    }, []);

    useEffect(() => {
        if (props.credenciales.token === '') {
            navigate("/");
        }
    })

    // useEffect Personalizado para el Hook de Pedidos.
    useEffect(() => {
        console.log("vaya, , Pedidos ha cambiado, ", pedidos);
    }, [pedidos]);

    const traerPedidos = async () => {
        try {
            let res = await axios.post(`https://rgd-videoclub-backend.herokuapp.com/pedidos/usuario/${props.credenciales.usuario.id}`, config);
            //Una vez han venido los datos del backend, nosotros, lo siguiente que haremos para que no se pierdan
            //será setear esos datos en el hook, haciendo que las peliculas estén disponibles 
            //para los return del componente.
            console.log(res.data)
            setTimeout(() => {
                setPedidos(res.data);
            }, 1000);

        } catch (error) {
            console.log(error);
        }
    };
    if(pedidos[0]?.nick !== undefined) {
        return (
            <div className='paginaPedidos'>
                <LateralUsuario />
                <div className='centro'>
                    <h1 className='Letras3'>AQUI PUEDES VER LAS PELICULAS QUE HAS ALQUILADO</h1>
                    <div className='vistaPedidos'>
                        {
                            //Voy a mapear los Pedidos
                            pedidos.map((pedido, index) => {
                                return (
                                    //Al mapear, cada elemento que se itera del array (en este caso pelicula es ese elemento),
                                    //si le hacemos propiedad onclick y pasamos el elemento como argumento,
                                    //a esa funcion le va a llegar el objeto que hayamos clickado entero
                                    <div className='cardPedidos' key={index}>
                                        <p className='Letras'>{pedido.titulo}</p>
                                        <img className='imagenPelicula' src={pedido.imagen} alt={pedido.titulo} />
                                        <p>{pedido.sinopsis}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='paginaPedidos'>
                <LateralUsuario />
                <div className='centro'>
                    <div className='vistaPeliculas'>
                        <div className='espinner'></div>
                    </div>
                </div>
            </div>
        )
    };
};


export default connect((state) => ({
    credenciales: state.credenciales
}))(Pedidos);