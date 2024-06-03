import React from 'react'
import { Text , View, Button, StyleSheet, Image } from 'react-native'
import myImage from '../Imagenes/SegundoLogo.png';

const PrincipalScreen = ({navigation}) => {

    const MyComponent = () => {
        return <Image source={myImage} style={{width: 100, height: 100}} />;
      };
      React.useLayoutEffect(() => {
        navigation.setOptions({
          title: <Text style={estilos.perfil}></Text>,
          headerStyle: {
            backgroundColor: '#120907',
          },
          headerTintColor: '#fff',
        });
      }, [navigation]);
    

  return (
    <View style = {estilos.container}>
    <MyComponent />
    <View>
   <Text style = {estilos.texto}> La tecnologia sucede </Text>
   <Text style = {estilos.texto}> No te quedes atras </Text>
   
   </View>
   <View style ={estilos.buttonCrear}>
   <Button color='#999be7' title="Crear cuenta" onPress={() => navigation.navigate('RegisterScreen')} />
   </View>
   <View style ={estilos.buttonContainer}>
   <Text style = {estilos.textoCrear}> Ya tenes una cuenta?</Text>
   <Button color='#999be7' title="Ya tengo cuenta" onPress={() => navigation.navigate('LoginScreen')} />

 

   </View>
   </View>
  )
}

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: "#24213a",
      justifyContent: 'space-between',
    },
    texto :{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
    textoCrear :{
        textAlign: 'center',
        color: 'white',
    },
    buttonContainer: {
    color: '#999be7',
    marginVertical: 70,
    margin: 40,
    marginBottom: 100,
    padding: 10
    },
    buttonCrear:{
        margin: 20,
        marginVertical: 70,
        marginBottom: 10,
        padding: 10
    }
});

export default PrincipalScreen
