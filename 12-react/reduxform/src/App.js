import logo from './logo.svg';
import './App.css';
import MyForm from "./MyForm.js"; // Importamos el formulario
import MostrarDatos from "./MostrarDatos.js"; // Importamos el componente que muestra los datos

function App() {
  return (
    <div className="App">
      <h1>Formulario con redux form</h1>
      <MyForm />
      <h2>Datos ingresados:</h2>
      <MostrarDatos />
    </div>
  );
}

export default App;
