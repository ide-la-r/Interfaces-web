import './App.css';
import Reiniciar from './Components/Reiniciar';
import NumeroSecreto from './Components/NumeroSecreto';
import Formulario from './Components/Formulario';
import Puntuacion from './Components/Puntuacion';
import { useState } from 'react';

function App() {

  const generarNumSecreto=()=>{
    return Math.trunc(Math.random()*20)+1
  }

  const reiniciar =()=>{
    setNumSecreto(generarNumSecreto);
    setMensaje("Empiece a adivinar");
    setPuntuacion(20);
    document.body.style.backgroundColor="";
  }

  const comparar = (numero)=>{
    if(!numero){
      setMensaje("Porfavor pon un numero")
    } else if (Number(numero) == numSecreto){
        setMensaje("Ganaste!");
        document.body.style.backgroundColor="green";
        if (puntuacionMasAlta < puntuacion) {
          setPuntuacionMasAlta(puntuacion);
        }
      if(score > puntuacion){
        setScore(puntuacion);
      }
    } else if(puntuacion == 0){
        setMensaje("Perdiste!")
        document.body.style.backgroundColor = "red";
    } else{
      if (Number(numero) < numSecreto) {
        setMensaje("El numero es menor que el numero secreto");
      } else{
        setMensaje("El numero es mas grande que el numero secreto")
      }
      setPuntuacion(puntuacion - 1);
    }
  }

  const [numSecreto, setNumSecreto] = useState(generarNumSecreto);
  const [mensaje, setMensaje] = useState("Empiece a adivinar...");
  const [puntuacion, setPuntuacion] = useState(20);
  const [score, setScore] = useState(0);
  const [puntuacionMasAlta, setPuntuacionMasAlta] = useState(0);

  return (
    <div className="container">
    <Reiniciar reiniciar={reiniciar}/>
    <h1>¡Adivina mi número!</h1>
    <NumeroSecreto/>
    <br/>
    
    <Formulario comparar={comparar}/>
    
    <Puntuacion puntMas={puntuacionMasAlta} punt={puntuacion} msj={mensaje}/>
  </div>
  );
}

export default App;
