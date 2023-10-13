import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import LoginUser from './components/LoginComponents/LoginUser';
import Navigator from './components/MainComponents/Navitagor';
import Transportes from './components/MainComponents/Transportes';
import Centrales from './components/MainComponents/Centrales';
import RegisterUser from './components/LoginComponents/RegisterUser';
import { Wrapper } from "@googlemaps/react-wrapper";
function App() {
  return (
    <div> 
      <Routes>
        <Route index element={<div><LoginUser/></div>}/>
        <Route path='/resgistro' element={<div><RegisterUser/></div>}/>
        <Route element={<div><Navigator/></div>}>
          <Route path='/transportes' element={<div><Transportes/></div>}/>
          <Wrapper apiKey={process.env.REACT_APP_API_KEY}>
            <Route path='/centrales' element={<div><Centrales/></div>}/>
          </Wrapper>
        </Route>
      </Routes>  
    </div>
  );
}


export default App;
