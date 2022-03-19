import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';

import './UsuariosAdmin.css';
import axios from 'axios';
import LateralAdmin from '../../Components/LateralAdmin/LateralAdmin';

const UsuariosAdmin = (props) => {

    const [usuarios, setUsuarios] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        //No es correcto realizar el try catch en el useEffect
        //dado que el useEffect es en si un proceso con un callback, meter un proceso
        //asíncrono traería problemas y React no lo permite, por ello, llamamos a una funcion
        //que habremos hecho nosotros y se encargará de ello
        traerUsuarios();
    }, []);

    useEffect(() => {
        if (props.credenciales.usuario.rol !== true) {
            navigate("/");
        }
    })

    // useEffect Personalizado para el Hook de Pedidos.
    useEffect(() => {
        console.log("vaya, , Usuarios ha cambiado, ", usuarios);
    }, [usuarios]);

    const traerUsuarios = async () => {
        try {
            let config = {
                headers: { Authorization: `Bearer ${props.credenciales.token}` }
            };
            
            let res = await axios.get("https://rgd-videoclub-backend.herokuapp.com/usuarios", config);
            //Una vez han venido los datos del backend, nosotros, lo siguiente que haremos para que no se pierdan
            //será setear esos datos en el hook, haciendo que las peliculas estén disponibles 
            //para los return del componente.
            console.log(res.data)
            setTimeout(() => {
                setUsuarios(res.data);
            }, 1000);
            console.log("Dale papaya",res.data)
        } catch (error) {
            console.log(error);
        }
    };
    if (usuarios[0]?.id !== undefined) {
        return (
            <div className='paginaUsuariosAdmin'>
                <LateralAdmin />
                <div className='centro'>
                    <h1 className='Letras3'>AQUI PUEDES VER TODOS LOS USUARIOS REGISTRADOS</h1>
                    <div className='vistaUsuariosAdmin'>
                        {
                            //Voy a mapear los Pedidos
                            usuarios.map((usuario, index) => {
                                return (
                                    //Al mapear, cada elemento que se itera del array (en este caso pelicula es ese elemento),
                                    //si le hacemos propiedad onclick y pasamos el elemento como argumento,
                                    //a esa funcion le va a llegar el objeto que hayamos clickado entero
                                    <div className='cardUsuariosAdmin' key={index}>
                                        <p className='Letras'>{usuario.nombre}</p>
                                        <p className='Letras'>{usuario.email}</p>
                                        <img className='imagenPelicula' src={usuario.apellidos} alt={usuario.nick} />
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
            <div className='paginaUsuariosAdmin'>
                <LateralAdmin />
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
}))(UsuariosAdmin);