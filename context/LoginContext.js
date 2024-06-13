import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState("checking");

  useEffect(() => {
    const cargarEstado = async () => {
      const resultado = await AsyncStorage.getItem('isLogged');
      if (resultado === 'true') {
        setIsLogged("logged");
      } else {
        setIsLogged("notLogged");
      }
    }
    cargarEstado();
  }, []);

  const login = async (username, password) => {
    try {
      const result = await fetch("https://666789b3f53957909ff4916a.mockapi.io/api/v1/Usuarios");
      const users = await result.json();
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        await AsyncStorage.setItem('isLogged', 'true');
        setIsLogged("logged");
      } else {
        alert('Usuario o contraseña incorrectos');
        setIsLogged("notLogged");
      }
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      alert("Error en el login");
    }
  }

  const register = async (username, password, navigation) => {
    try {
      const result = await fetch("https://666789b3f53957909ff4916a.mockapi.io/api/v1/Usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
  
      if (result.ok) {
        alert("Usuario registrado");
        navigation.navigate('LoginScreen'); 
      } else {
        alert("Error al registrarse");
      }
    } catch (error) {
      console.error('Error al Registrarse', error);
      alert("Error en el registro");
    }
  }
  

  const logout = async () => {
    await AsyncStorage.removeItem('isLogged');
    setIsLogged("notLogged");
  }

  return (
    <LoginContext.Provider value={{ isLogged, login, register, logout }}>
      {children}
    </LoginContext.Provider>
  );
}
