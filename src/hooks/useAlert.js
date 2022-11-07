import { useState } from 'react';

const useAlert = (options) => {
  const defaultOptions = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  };

  const [alert, setAlert] = useState({
    ...defaultOptions,
    ...options,
  });

  const toggleAlert = () => {
    setAlert(!alert.active); // con ! niegue el estado actual de alert: abrir y cerrar
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
};

export default useAlert;
