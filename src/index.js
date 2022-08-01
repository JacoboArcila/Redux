import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux/es/exports";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { featuring, logger, prefix } from "./middlewares";

const root = ReactDOM.createRoot(document.getElementById("root"));

//la constante composedEnhancers son potenciadores de la store
//El primero es para habilitar la extencion de el navegador
//El segundo es para añadirle el middleware, appyMiddleware es una funcion del redux que se encarga
//de pasarle todos los parametros que tiene el logger, si no lo pones no pasan los parametros

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring, prefix)
);
const store = createStore(pokemonsReducer, composedEnhancers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
