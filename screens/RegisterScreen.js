import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

const RegisterScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: <Text style={estilos.perfil}>Crear cuenta</Text>,
      headerStyle: {
        backgroundColor: '#120907',
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <View style={estilos.container}>
      <Text style={estilos.welcome}>Registrarse</Text>
      <TextInput
        style={estilos.input}
        placeholder='Nombre de usuario'
        placeholderTextColor='white'
        value = ''
        onChangeText= ''
      />
      <TextInput
        style={estilos.input}
        placeholder='Contraseña'
        placeholderTextColor='white'
        value = ''
        onChangeText= ''
        secureTextEntry={true}
      />
      <TextInput
        style={estilos.input}
        placeholder='Confirmar contraseña'
        placeholderTextColor='white'
        value = ''
        onChangeText= ''
        secureTextEntry={true}
      />
      <View style={estilos.buttonContainer}>
        <Button color='#999be7' title="Ya tengo una cuenta" onPress={() => navigation.navigate('LoginScreen')} />
        <Button color='#999be7' title="Registrarse" onPress={() => navigation.navigate('Home')} />
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

export default RegisterScreen
