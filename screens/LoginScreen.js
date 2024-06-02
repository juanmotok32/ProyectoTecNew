import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

const LoginScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: <Text style={estilos.perfil}>Bienvenido a TecNews</Text>,
      headerStyle: {
        backgroundColor: '#120907',
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <View style={estilos.container}>
      <Text style={estilos.welcome}>LOGIN</Text>
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
      <View style={estilos.buttonContainer}>
        <Button color='#999be7' title="Iniciar sesion" onPress={() => navigation.navigate('Home')} />
        <Button color='#999be7' title="Crear cuenta" onPress={() => navigation.navigate('RegistrarseScreen')} />
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
