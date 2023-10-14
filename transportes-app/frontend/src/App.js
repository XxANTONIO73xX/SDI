import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes, useNavigate } from 'react-router-dom';
import LoginUser from './components/LoginComponents/LoginUser';
import RegisterUser from './components/LoginComponents/RegisterUser';
import Contactos from './components/MainComponents/Contactos';
import Categorias from './components/MainComponents/Categorias';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import Navigator from './components/MainComponents/Navigator';
function App() {
  const [isLogged, setLogged] = useState(false)
  const navigate = useNavigate();
  return (
    <div> 
      <Routes>
        <Route index element={<div><LoginUser isLogged={isLogged} setLogged={setLogged} navigate={navigate}/></div>}/>
        <Route path='/resgistro' element={<div><RegisterUser/></div>}/>
        <Route element={<ProtectedRoutes isLogged={localStorage.getItem('isLogged')}/>}>
          <Route element={<Navigator setLogged={setLogged} navigate={navigate}/>}>
            <Route path='/contactos' element={<div><Contactos/></div>}/>
            <Route path='/categorias' element={<div><Categorias/></div>}/> 
          </Route>
        </Route>
      </Routes>
    </div>
  );
}


export default App;
