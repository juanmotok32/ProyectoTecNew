import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
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

  const handleLogin = async () => {
    try {
      const storedPassword = await AsyncStorage.getItem(username);
  
      if (storedPassword === password) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Nombre de usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.welcome}>LOGIN</Text>
      <TextInput
        style={estilos.input}
        placeholder='Nombre de usuario'
        placeholderTextColor='white'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={estilos.input}
        placeholder='Contraseña'
        placeholderTextColor='white'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <View style={estilos.buttonContainer}>
        <Button color='#999be7' title="Iniciar sesion" onPress={handleLogin} />
        <Button color='#999be7' title="Crear cuenta" onPress={() => navigation.navigate('RegisterScreen')} />
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#24213a",
    justifyContent: 'space-between',
    //aca pondria todo mas junto en la parte de arriba para abajo poner google/microsoft

  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#5a598b',
  },
  perfil: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
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
});

export default LoginScreen
