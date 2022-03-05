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
    const registrame = async ()=> {
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
            <div className='contenedor3'>
                    <h2 className='Letras'>Introduce tus datos aqui</h2>
                    <input className='input' type="text" name="nombre" id="nombre" title="nombre" placeholder="Nombre:" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input' type="text" name="apellido" id="apellido" title="apellido" placeholder="Apellidos:" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input' type="text" name="edad" id="edad" title="edad" placeholder="Edad:" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input' type="email" name="email" id="email" title="email" placeholder="Correo Electrónico:" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input' type="text" name="dni" id="dni" title="dni" placeholder="DNI" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input' type="password" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input' type="password" name="password2" id="password2" title="password2" placeholder="Repite contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input' type="text" name="telefono" id="telefono" title="telefono" placeholder="Telefono" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input' type="text" name="numCuenta" id="numCuenta" title="numCuenta" placeholder="NºCuenta" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <div className="boton" onClick={()=>registrame()}>
                        Registrarme
                    </div>
                    {msgError}
            </div>
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