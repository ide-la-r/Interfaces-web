import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Imagen from './components/Imagen';
import imagen1 from "./images/yoorichiManga.jpg";
import imagen2 from "./images/zenitsu.jpg";

export default function App() {

  const saludar = (nombre, edad)=>{
    if (edad <= 12) {
      setMensaje(`Hola ${nombre}, eres un Niño`)
    } else if (edad > 12 && edad <= 20) {
      setMensaje(`Hola ${nombre}, eres un Joven`)
    } else if (edad > 20 && edad <= 40) {
      setMensaje(`Hola ${nombre}, eres un Mayor`)
    } else{
      setMensaje(`Hola ${nombre}, eres un Viejo`)
    }
  }

  const img1 = imagen1;
  const img2 = imagen2;

  const [srcImagen, setSrcImagen] = useState(img1)
  const [mensaje, setMensaje] = useState();

  const cambiarImagen = () =>{
    setSrcImagen(nextImage => (nextImage === img1 ? img2 : img1));
  }

  return (
    <div className="App">
      <Formulario saludar={saludar}/>
      <br/>
      <Mensaje msj={mensaje}/>
      <br/>
      <Imagen src={srcImagen} width="300px" method={cambiarImagen}/>
    </div>
  );
}
