import './App.css';
import React from 'react';
import Mensaje from './components/Mensaje';
import Contenedores from './components/Contenedores';


export default function App() {



  let famosos = [
    {
      nombre:"Pablo",
      apellido:"Alboran",
      color:"red",
      precio:100
    },
    {
      nombre:"Aitana",
      apellido:"",
      color:"purple",
      precio:120
    },
    {
      nombre:"Abraham",
      apellido:"Mateo",
      color:"blue",
      precio:140
    },
    {
      nombre:"Ana",
      apellido:"Mena",
      color:"violet",
      precio:150
    },
    {
      nombre:"Manuel",
      apellido:"Carrasco",
      color:"green",
      precio:125
    },
    {
      nombre:"Rosalia",
      apellido:"",
      color:"orange",
      precio:180
    }
  ];

  return (
    <div className="App">
      <Mensaje />
      <br/>
      <Contenedores famosos={famosos}/>
    </div>
  );
}
