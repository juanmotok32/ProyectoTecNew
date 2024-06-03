import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert, Image,ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import myImage from '../Imagenes/LogoRegister.png';

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

  const MyComponent = () => {
    return <Image source={myImage} style={{ alignSelf : 'center',width: 200, height: 200}} />;
  };
  
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
       <View>
        <MyComponent/>
      </View>
      <ScrollView contentContainerStyle={estilos.container}>

      <Text style = {estilos.welcome}>Inicia sesion en TecNews</Text>
      <View>
      <Text style = {estilos.inputs}>Nombre de usuario</Text>
      <TextInput
        style={estilos.input}
        placeholder=''
        placeholderTextColor='black'
        value={username}
        onChangeText={setUsername}
      />
      <Text style = {estilos.inputs}>Contraseña</Text>
      <TextInput
        style={estilos.input}
        placeholder=''
        placeholderTextColor='black'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      </View>
      <View style={estilos.buttonContainer}>
        <Button color='#999be7' title="Iniciar sesion" onPress={handleLogin} />
      </View>
      </ScrollView>

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
  inputs:{
    color: 'white'
  }
});

export default LoginScreen
