import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState("checking");
  const [user, setUser] = useState({});

  useEffect(() => {
    const cargarEstado = async () => {
      const resultado = await AsyncStorage.getItem('isLogged');
      if (resultado === 'true') {
        const storedUser = await AsyncStorage.getItem('user');
        setUser(JSON.parse(storedUser));
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
        await AsyncStorage.setItem('user', JSON.stringify(user));
        setUser(user);
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
const register = async (username, password, avatar, navigation) => {
    try {
      const result = await fetch("https://666789b3f53957909ff4916a.mockapi.io/api/v1/Usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password,
          admin: false, // por defecto, los nuevos usuarios no son administradores
          email: `${username}@gmail.com`,
          avatar: avatar,
        })
      });

      if (result.ok) {
        alert("Usuario registrado");
        navigation.navigate('LoginScreen'); 
      } else {
        alert("Error al registrarse");
      }
    } catch (error) {
      console.error('Error al registrarse', error);
      alert("Error en el registro");
    }
  }

  const logout = async () => {
    await AsyncStorage.removeItem('isLogged');
    await AsyncStorage.removeItem('user');
    setUser(null);
    setIsLogged("notLogged");
  }

  const updateProfile = async (username, email, avatar) => {
    try {
      // Aquí es donde actualizarías los detalles del usuario en tu base de datos
      // Por ejemplo:
      const result = await fetch(`https://666789b3f53957909ff4916a.mockapi.io/api/v1/Usuarios/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email,
          avatar: avatar,
        })
      });
  
      if (result.ok) {
        const updatedUser = await result.json();
        setUser(updatedUser);
        await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
        alert("Perfil actualizado");
      } else {
        alert("Error al actualizar el perfil");
      }
    } catch (error) {
      console.error('Error al actualizar el perfil', error);
      alert("Error en la actualización del perfil");
    }
  }

  return (
    <LoginContext.Provider value={{ isLogged, user, login, register, logout, updateProfile }}>
      {children}
    </LoginContext.Provider>
  );
}