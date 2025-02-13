//Creamos el allmacen store donde se guardara el estado de la app
//Combina varios reductores que son funciones que modifican el estado de redux
import { createStore, combineReducers } from "redux";
//Importamos el "reductor" que manejara los datos de los formularios
import { reducer as formReducer } from "redux-form";

// Agrupa todos los reducers en uno solo(los reducers son funciones que definen como cambia el estado de la aplicacion)
const rootReducer = combineReducers({
  form: formReducer, // Redux Form usa esta clave 'form' por defecto
});

// Crear el store de Redux
const store = createStore(rootReducer);

export default store;