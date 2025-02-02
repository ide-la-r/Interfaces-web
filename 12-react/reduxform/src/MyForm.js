import React from "react";
import './App.css';
//field es un componente que se usa en redux form para los campos de los formularios
import { Field, reduxForm } from "redux-form";

const validate = (values) => {
    const errors = {};

    if (!values.nombre) errors.nombre = "El nombre es obligatorio";
    
    if (!values.primerApellido) errors.primerApellido = "El primer apellido es obligatorio";
    
    if (!values.segundoApellido) errors.segundoApellido = "El segundo apellido es obligatorio";

    if (!values.email) {
        errors.email = "El email es obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email invalido";
    }

    if (!values.contrasenia) {
        errors.contrasenia = "La contraseña es obligatoria";
    } else if (values.contrasenia.length < 8) {
        errors.contrasenia = "La contraseña debe tener al menos 6 caracteres";
    }

    return errors;
}

const MyForm = ({ handleSubmit }) => {
  return (
    //Esto hace qye redux form maneje el envio del formulario y los datos se guardan en redux
    <form className="formulario" onSubmit={handleSubmit}>
      <div>
        {/*Campo de redux-form en vez de poner input directamente */}
        <label>Nombre:</label>
        <Field name="nombre" component="input" type="text" />
        <br/>
        <Field name="nombre" component={({ meta }) => 
          meta.touched && meta.error ? <span style={{ color: "red" }}>{meta.error}</span> : null
        } />
        <br/><br/>
        <label>Primer apellido:</label>
        <Field name="primerApellido" component="input" type="text" />
        <br/>
        <Field name="primerApellido" component={({ meta }) => 
          meta.touched && meta.error ? <span style={{ color: "red" }}>{meta.error}</span> : null
        } />
        <br/><br/>
        <label>Segundo apellido:</label>
        <Field name="segundoApellido" component="input" type="text" />
        <br/>
        <Field name="segundoApellido" component={({ meta }) => 
          meta.touched && meta.error ? <span style={{ color: "red" }}>{meta.error}</span> : null
        } />
        <br/><br/>
        <label>Email:</label>
        <Field name="email" component="input" type="email" />
        <br />
        <Field name="email" component={({ meta }) => 
          meta.touched && meta.error ? <span style={{ color: "red" }}>{meta.error}</span> : null
        } />
        <br/><br/>
        <label>Contraseña:</label>
        <Field name="contrasenia" component="input" type="password" />
        <br />
        <Field name="contrasenia" component={({ meta }) => 
          meta.touched && meta.error ? <span style={{ color: "red" }}>{meta.error}</span> : null
        } />
      </div>

      <button className="botonForm" disabled>Enviar</button>
    </form>
  );
};

// Conectar el formulario con Redux Form
export default reduxForm({ form: "miFormulario", validate })(MyForm);