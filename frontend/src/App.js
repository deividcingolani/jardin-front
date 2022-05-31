import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Axios from 'axios';

function App() {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [consulta, setConsulta] = useState('');

  const enviarConsulta = () => {
    Axios.post("http://localhost:3001/api/insert", {
      _nombre: nombre, 
      _apellido: apellido, 
      _correo: correo, 
      _asunto: asunto, 
      _consulta: consulta
    }).then( () => {
      alert('Gracias por enviar su consulta.');
    })
  };

  return (
    <div className="App">
      <h1>Prueba</h1>

      <div className="form">
        
        <input type="text" name="nombre" onChange={(e) => {
          setNombre(e.target.value)
        }}/>
          
        <input type="text" name="apellido" onChange={(e) => {
          setApellido(e.target.value)
        }}/>

        <input type="text" name="correo" onChange={(e) => {
          setCorreo(e.target.value)
        }}/>

        <input type="text" name="asunto" onChange={(e) => {
          setAsunto(e.target.value)
        }}/>

        <input type="text" name="consulta" onChange={(e) => {
          setConsulta(e.target.value)
        }}/>

        <button onClick = {enviarConsulta}>Submit</button>

      </div>
    </div>
  );
}

export default App;
