import React from "react";
import './App.css';
import { useSelector } from "react-redux"; // te permite acceder al estado de redux

const MostrarDatos = () => {
  // Obtener los valores del formulario desde Redux
  const valores = useSelector((state) => state.form.miFormulario?.values);//va al estado de mi formulario y ve si hay valores o no, is no hay nada es undefinded por el ?
  const contraseniaEncriptada = "*******";
  return (
    <div className="mostrarFormulario">
      <p><b>Nombre:</b> {valores?.nombre || "Aún no ingresado"}</p>
      <p><b>Primer apellido:</b> {valores?.primerApellido || "Aun no ingresado"}</p>
      <p><b>Segundo apellido:</b> {valores?.segundoApellido || "Aun no ingresado"}</p>
      <p><b>Email:</b> {valores?.email || "Aun no ingresado"}</p>
      <p><b>Contraseña:</b> {valores?.contrasenia ? contraseniaEncriptada : "Aun no ingresado"}</p>
    </div>
  );
};

export default MostrarDatos;