import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api';

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
    const options = {
      Headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
    if (access_token) {
      Cookie.set('token', access_token.access_token, { expires: 5 });
    }
  };
  return {
    user,
    singIn,
  };
}
