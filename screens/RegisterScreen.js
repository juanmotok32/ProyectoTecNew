import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert,Image,ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import myImage from '../Imagenes/LogoRegister.png';

const RegisterScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: <Text style={estilos.perfil}>Crear cuenta</Text>,
      headerStyle: {
        backgroundColor: '#120907',
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  const MyComponent = () => {
    return <Image source={myImage} style={{ alignSelf : 'center',width: 200, height: 200}} />;
  };

  const handleRegister = async () => { 
    if (username === '' || password === '') {
      Alert.alert('Error', 'El nombre de usuario y la contraseña no pueden estar vacíos');
      return;
    } else if (password != confirmPassword){
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    } 
  
    try {
      await AsyncStorage.setItem(username, password);
      console.log('Usuario registrado');
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error al registrar el usuario', error);
    }
  }
  
  return (
    <View style={estilos.container}>

      <View>
      <MyComponent/>
      <Text style={estilos.welcome}>Registrarse</Text>
      <View>
    
      <Text style = {estilos.inputs}> Nombre de usuario</Text>
      <TextInput
        style={estilos.input}
        placeholder=''
        placeholderTextColor='white'
        value={username}
        onChangeText={setUsername}
      />
      
      <Text style = {estilos.inputs}> Ingresar contraseña</Text>
      <TextInput
        style={estilos.input}
        placeholder=''
        placeholderTextColor='white'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Text style = {estilos.inputs}> Confirmar contraseña</Text>
      <TextInput
        style={estilos.input}
        placeholder=''
        placeholderTextColor='white'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}F
      />
      </View>
      </View>
      <View style={estilos.buttonContainer}>
        <Button color='#999be7' title="Ya tengo una cuenta" onPress={() => navigation.navigate('LoginScreen')} />
        <Button color='#999be7' title="Registrarse" onPress={handleRegister} />
        
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
  inputs : {
    color: 'white'
  }
});

export default RegisterScreen
