import React, {useState, useContext, createContext} from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

//crear un nuevo contexto
const AuthContext = createContext();

//se encapsula nuestra aplicación
export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

//logica para exponer información requerida
export const useAuth = () => {
  return useContext(AuthContext);
};

//Captar información del usuario
function useProvideAuth() {
  const [user, setUser] = useState(null);
  //funcion de iniciar sesion
  const singIn = async (email, password) => {
    setUser('login'); //retornar el user y leer el token
  };
  return {
    user,
    singIn,
  };
}
