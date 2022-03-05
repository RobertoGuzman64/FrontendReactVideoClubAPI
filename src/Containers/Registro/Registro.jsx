import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';
import { checkError } from '../../utiles';
import axios from 'axios';

const Registro = () => {
    let navigate = useNavigate();
    // Hooks
    const [datosUsuario, setDatosUsuario] = useState({
        nombre: '', apellidos: '', edad: '', email: '', dni: '', contraseña: '', contraseña2: '', telefono:'', numCuenta: ''
    });
    const [ msgError, setMsgError ] = useState('');
    // useEffect
    useEffect( ()=> {
        // Se ejecuta la primera vez.
    },[]);
    useEffect( ()=> {
        // Se ejecuta cada vez que se acualiza cualquier Hook.
    })
        // useEffect(()=>{
    //     //useEffect observable que sólo se ejecutará cuando
    //     //datosUsuario mute
    // },
    // [datosUsuario])
    //Handler (manejador)
    const rellenarDatos = (e) => {
        setDatosUsuario({...datosUsuario,[e.target.nombre]: e.target.value})
    };
    // Funciones Locales del Componente.
    const registrarme = async ()=> {
        // Array de distintos campos.
        setMsgError('');
        let error = '';
        let arrayCampos = Object.entries(datosUsuario);
        // 1 Comprobación de errores antes de enviar al backend.
        if(datosUsuario.contraseña !== datosUsuario.contraseña2){
            return (setMsgError('Las dos contraseñas deben de coincidir'));
        } else {
            setMsgError('');
        }
        for(let elemento of arrayCampos){
            error = checkError( elemento[0], elemento[1] );
            if(error !== 'ok'){
                setMsgError(error);
                return;
            };
        };
        console.log('Todo a ido Bien')
        // 2 Construimos el body.
        let body = {
            nombre: datosUsuario.nombre,
            apellidos: datosUsuario.apellidos,
            edad: datosUsuario.edad,
            email: datosUsuario.email,
            dni: datosUsuario.dni,
            contraseña: datosUsuario.contraseña,
            telefono: parseInt(datosUsuario.telefono),
            numCuenta: datosUsuario.numCuenta
        }
        console.log('Le LLaman Body', body);
        // 3 Envio desde AXIOS.
        try {
            let resultado = await axios.post('',body);
            console.log(resultado)
                setTimeout( ()=> {
                    navigate('/login');
                },1000);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className='paginaRegistro'>

            </div>
    )
}

// const Registro = () => {
//     return(
//         <div className='paginaRegistro'>
//             <h1 class="Cartel">SOY LA PAGINA REGISTRO</h1>
//         </div>
//     )
// };

export default Registro;