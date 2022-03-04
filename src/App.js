
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Contenedores/Home';
import Login from './Contenedores/Login';
import Pedidos from './Contenedores/Pedidos';
import Peliculas from './Contenedores/Peliculas';
import Perfil from './Contenedores/Perfil';
import Registro from './Contenedores/Registro';
import Admin from './Contenedores/Admin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Pedidos' element={<Pedidos/>}/>
        <Route path='/Peliculas' element={<Peliculas/>}/>
        <Route path='/Perfil' element={<Perfil/>}/>
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/Admin' element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
