import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';
import NotesList from './components/NotesList';
import CreateUser from './components/CreateUser';
function App() {
  return (
    <div> 
      <Navigation/>
          <Routes>
            <Route path="/" element={<div><NotesList/></div>}/>
            <Route path='/edit/:id' element={<div><CreateNote /></div>}/>
            <Route path='/create' element={<div><CreateNote /></div>}/>
            <Route path='/user' element={<div><CreateUser/></div>}/>
          </Routes>  
    </div>
  );
}


export default App;
