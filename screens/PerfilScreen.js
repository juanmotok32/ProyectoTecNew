import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import myImage from '../Imagenes/SegundoLogo.png';

const PerfilScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: <Text style={estilos.perfil}>Perfil</Text>,
          headerStyle: {
            backgroundColor: '#120907',
          },
          headerTintColor: '#fff',
        });
      }, [navigation]);

      
  const MyComponent = () => {
    return <Image source={myImage} style={{  top: -10 , alignSelf: 'center',width: 40, height: 40}} />;
  };
  

    
    return (
        <View style = {estilos.container}>
          <MyComponent/>
            <Text style={estilos.welcome}>Nombre de usuario</Text>
        </View>
          )
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#24213a",
    },
    welcome: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      backgroundColor: '#5a598b',
      justifyContent: 'flex-start',
    },
    perfil : {
        // textDecorationLine: 'underline', 
        fontWeight: 'bold', 
        color: '#fff' 
    }
})
export default PerfilScreen
