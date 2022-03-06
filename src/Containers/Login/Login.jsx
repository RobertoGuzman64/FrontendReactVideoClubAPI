
// import Button from '../../Componentes/Button/Button';
import './Login.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    let navigate = useNavigate();
    // 1 - Hooks (Equivalen al estado en los componentes de clase)
    const [ credenciales, setCredenciales] = useState('');
    const [ datosUsuario, setDatosUsuario] = useState({email: '', contraseña: ''});
    const [ msgError, setMsgError] = useState('');
    const [ msgError2, setMsgError2] = useState('');
    // Funciones handlers
    const rellenarDatos = (e) => {
        //Funcion handler que setea los datos en el hook...[e.target.name] obtiene 
        //el nombre de la propiedad a cambiar, e.target.value tiene el valor..ambos
        //obtienen los datos del evento, que es el hecho de escribir en un input en concreto
        setDatosUsuario({...datosUsuario, [e.target.nombre]: e.target.value})
    };
    const checkContraseña = (e) => {
        if(e.target.value.lenght < 4 ){
            setMsgError('La contraseña debe de tener 4 caracteres');
        } else {
            setMsgError('');
        }
    };
    //3-useEffect
    // useEffect(()=>{
    //     //Este useEffect, sólo se ejecuta la primera vez que
    //     //se monta el componente. Se diferencia por el argumento 
    //     //de array vacio que hemos puesto
    //     console.log("Me he montado por primera y única vez");
    // },[]);
    useEffect( ()=> {
        //Este useEffect se ejecutará por cada vez que se actualize el 
        //componente. Es decir, cuando cambie un hook y por lo tanto se actualize el componente.
        //Es peligroso cambiar hooks aqui, si no tenemos condicionales que eviten
        //que entremos en bucles infinitos.
        // console.log("Credenciales vale....", credenciales);
        if(credenciales?.token !== undefined){
            setTimeout( ()=> {
                navigate('/');
            },1500);
        };
    });
    // Funciones Locales.
    const Login = async () => {
        try {
            // Me invento las credenciales.
            let body = {
                email: datosUsuario.email,
                contraseña: datosUsuario.contraseña
            }
            let resultado = await axios.post(''.body);                                                  // AQUI ES DONDE VA EL ENDPOINT DEL BACKEND.
            // Cambiamos el valor del Hook credenciales, por lo tanto recargará el componente.
            if(resultado.data === 'Usuario o contraseña inválido'){
                setMsgError2('Usuario o contraseña inválido')
            } else {
                setCredenciales(resultado.data);
            }
        } catch (error) {
            console.log(error)
        }
    };
    const irAregistro = () => {
        setTimeout( ()=> {
            navigate('/registro');
        }, 500);
    }
    // 2 - Render (Lo que pinta en Pantalla).
    if(credenciales?.token !== undefined){
        return(
            <div>Hola {credenciales?.usuario?.nombre}, Bienvenido al Videoclub </div>
        )
    } else {
        return(
            <div className='paginaLogin'>
                <div className='parteIzquierda1'>
                    <div className='contenedor1'>
                        <h1 className='Letras'>Introduce tus datos</h1>
                        {/* {<pre>{JSON.stringify(datosUsuario, null,2)}</pre>} */}
                        <div className='inputs'>
                            <input className='input' type="email" name="email" id="email" title="email" placeholder="Correo Electrónico" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                            <input className='input' type="password" name="password" id="contraseña" title="contraseña" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e); checkContraseña(e)}}/>
                            {msgError}
                            {msgError2}
                        </div>
                    <div className='contenedor2'>
                        <div className="boton" onClick={()=>Login()}>INICIAR SESION</div>
                            En caso de no estar registrad@
                        <div className='boton' onClick={()=>irAregistro()}>
                            REGISTRATE
                    </div>
                    </div>
                    </div>
                </div>
                <div className='parteDerecha1'></div>
            </div>
        )
    }
};




export default Login;