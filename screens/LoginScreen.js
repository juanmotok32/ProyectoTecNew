import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, ScrollView } from 'react-native';
import myImage from '../Imagenes/LogoRegister.png';
import { LoginContext } from '../context/LoginContext';

const LoginScreen = ({ navigation }) => {
  const { isLogged, login } = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: <Text style={estilos.perfil}>Bienvenido a TecNews</Text>,
      headerStyle: {
        backgroundColor: '#120907',
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  const MyComponent = () => {
    return <Image source={myImage} style={{ alignSelf: 'center', width: 200, height: 200 }} />;
  };

  const handleLogin = async () => {
    if (!username || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    try {
      await login(username, password);
    } catch (error) {
      alert('Error al iniciar sesión. Inténtalo de nuevo.');
    }
  };

  useEffect(() => {
    if (isLogged === "logged") {
      navigation.navigate('Home');
    }
  }, [isLogged, navigation]);

  return (
    <View style={estilos.container}>
      <View>
        <MyComponent />
      </View>
      <ScrollView contentContainerStyle={estilos.container}>
        <Text style={estilos.welcome}>Inicia sesión en TecNews</Text>
        <View>
          <Text style={estilos.inputs}>Nombre de usuario</Text>
          <TextInput
            style={estilos.input}
            placeholder='Nombre de usuario'
            placeholderTextColor='white'
            value={username}
            onChangeText={setUsername}
          />
          <Text style={estilos.inputs}>Contraseña</Text>
          <TextInput
            style={estilos.input}
            placeholder='Contraseña'
            placeholderTextColor='white'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={estilos.buttonContainer}>
          <Button color='#999be7' title="Iniciar sesión" onPress={handleLogin} />
        </View>
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#24213a",
    justifyContent: 'space-between',
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: 'white',
  },
  perfil: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 150,
    backgroundColor: 'transparent'
  },
  input: {
    backgroundColor: '#5a598b',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputs: {
    color: 'white'
  }
});

export default LoginScreen;
