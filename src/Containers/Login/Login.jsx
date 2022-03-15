
// import Button from '../../Componentes/Button/Button';
import './Login.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//REDUX...
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';

const Login = (props) => {
    let navigate = useNavigate();
    // 1 - Hooks (Equivalen al estado en los componentes de clase)
    const [credenciales, setCredenciales] = useState("");
    const [ datosUsuario, setDatosUsuario] = useState({email: '', contraseña: ''});
    const [ msgError, setMsgError] = useState('');
    const [ msgError2, setMsgError2] = useState('');
    // Funciones handlers
    const rellenarDatos = (e) => {
        //Funcion handler que setea los datos en el hook...[e.target.name] obtiene 
        //el nombre de la propiedad a cambiar, e.target.value tiene el valor..ambos
        //obtienen los datos del evento, que es el hecho de escribir en un input en concreto
        setDatosUsuario({...datosUsuario, [e.target.name]: e.target.value})         // SIEMPRE SE ESCRIBE ASÍ
    };
    const checkContraseña = (e) => {
        if(e.target.value.length < 4){
            setMsgError("La contraseña debe de tener al menos 4 caracteres");
        } else {
            setMsgError("");
        }
    };
    useEffect(()=>{
        //Este useEffect se ejecutará por cada vez que se actualize el 
        //componente. Es decir, cuando cambie un hook y por lo tanto se actualize el componente.
        //Es peligroso cambiar hooks aqui, si no tenemos condicionales que eviten
        //que entremos en bucles infinitos.
        // console.log("Credenciales vale....", credenciales);
        if(credenciales?.token !== undefined){
            setTimeout(()=>{
                navigate("/usuario");
            }, 3000);
        };
    });
    // Funciones Locales.
    const Login = async () => {
        try {
            // Las credenciales que pone el Usuario en la pagina Login.
            let body = {
                email: datosUsuario.email,
                contraseña: datosUsuario.contraseña
            }
            let resultado = await axios.post("https://rgd-videoclub-backend.herokuapp.com/usuarios/login", body);                          // AQUI ES DONDE VA EL ENDPOINT DEL BACKEND.
            // Cambiamos el valor del Hook credenciales, por lo tanto recargará el componente.
            if(resultado.data === 'Usuario o contraseña inválido'){
                setMsgError2('Usuario o contraseña inválido')
            } else {
                console.log("Gitinit",resultado.data)
                setCredenciales(resultado.data)
                    // GUARDAMOS LOS DATOS DEL LOGIN EN REDUX.
                props.dispatch({type:LOGIN, payload: resultado.data});
                setTimeout(()=>{
                    navigate("/usuario");
                },1500);
            }
            console.log(resultado);
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
    return(
        <div className='paginaLogin'>
            <div className='parteIzquierda1'>
                <div className='contenedor1'>
                    <h1 className='Letras'>Introduce tus datos</h1>
                    {/* {<pre>{JSON.stringify(datosUsuario, null,2)}</pre>} */}
                    <div className='inputs'>
                        <input className='input' type="email" name="email" id="email" title="email" placeholder="Correo Electrónico" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                        <input className='input' type="password" name="contraseña" id="contraseña" title="contraseña" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e); checkContraseña(e)}}/>
                        <button className="mostrarContraseña" id="mostrarContraseña" onClick={() => {
                            let input = document.getElementById('contraseña');
                            input.type = input.type === 'password' ? 'text' : 'password';
                            let button = document.getElementById('mostrarContraseña')
                            button.innerHTML=input.type === 'password' ? 'MOSTRAR CONTRASEÑA' : 'ESCONDER CONTRASEÑA';
                            }}>
                                MOSTRAR CONTRASEÑA
                        </button>
                    </div>
                    {msgError}
                    {msgError2}
                <div className='contenedor2'>
                    <div className="boton" onClick={()=>Login()}>INICIAR SESION</div>
                        En caso de no estar registrad@
                    <div className='boton' onClick={()=>irAregistro()}>
                        REGISTRATÉ
                </div>
                </div>
                </div>
            </div>
            <div className='parteDerecha1'></div>
        </div>
    );
};

export default connect()(Login);