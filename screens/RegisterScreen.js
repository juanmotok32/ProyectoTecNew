import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, Image, ScrollView } from 'react-native';
import myImage from '../Imagenes/LogoRegister.png';
import { LoginContext } from '../context/LoginContext';


const RegisterScreen = ({ navigation }) => {
  const { register } = useContext(LoginContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
    register(username, password, confirmPassword, navigation);
  }

  return (
    <View style={estilos.container}>
        <ScrollView>

      <View>
        <MyComponent />
        <Text style={estilos.welcome}>Registrarse</Text>
        <View>
          <Text style={estilos.inputs}> Nombre de usuario</Text>
          <TextInput
            style={estilos.input}
            placeholder='Nombre de usuario'
            placeholderTextColor='white'
            value={username}
            onChangeText={setUsername}
          />
          <Text style={estilos.inputs}> Ingresar contraseña</Text>
          <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={estilos.input}
            placeholder='Contraseña'
            placeholderTextColor='white'
            maxLength={30}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <Button 
          color='#999be7'
    title={isPasswordVisible ? '🔒' : '👁'}
    onPress={() => setIsPasswordVisible(prevState => !prevState)}
  />
          </View>
          <Text style={estilos.inputs}> Confirmar contraseña</Text>
          <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={estilos.input}
            placeholder='Confirmar contraseña'
            placeholderTextColor='white'
            maxLength={30}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <Button 
          color='#999be7'
    title={isPasswordVisible ? '🔒' : '👁'}
    onPress={() => setIsPasswordVisible(prevState => !prevState)}
  />
          </View>
        </View>
      </View>
      <View style={estilos.buttonContainer}>
        <Button color='#999be7' title="Ya tengo una cuenta" onPress={() => navigation.navigate('LoginScreen')} />
        <Button color='#999be7' title="Registrarse" onPress={handleRegister} />
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
  inputs: {
    color: 'white'
  }
});

export default RegisterScreen;
