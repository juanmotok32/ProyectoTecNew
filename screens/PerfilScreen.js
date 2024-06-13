import React, { useContext } from 'react'
import { View, Text, StyleSheet,Image, Button } from 'react-native'
import myImage from '../Imagenes/SegundoLogo.png';
import { LoginContext } from '../context/LoginContext';


const PerfilScreen = ({navigation}) => {
  const { logout } = useContext(LoginContext);

  const handleLogout = () => {
    logout();
  }
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
            <View style={estilos.buttonContainer}>
        <Button title="Cerrar sesión" onPress={handleLogout} color='#999be7' />
      </View>
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
})
export default PerfilScreen
