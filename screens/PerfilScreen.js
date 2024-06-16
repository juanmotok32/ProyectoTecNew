import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ActivityIndicator } from 'react-native';
import myImage from '../Imagenes/SegundoLogo.png';
import { LoginContext } from '../context/LoginContext';

const PerfilScreen = ({navigation}) => {
  const { user, logout } = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleLogout = () => {
    logout();
  }

  React.useLayoutEffect(() => {
    console.log(user);

    navigation.setOptions({
      title: <Text style={estilos.perfil}>Perfil</Text>,
      headerStyle: {
        backgroundColor: '#120907',
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

 useEffect(() => {
    const loadUserData = async () => {
      try {
        // Aquí es donde cargarías los datos del usuario
        // Por ejemplo:
        // const userData = await fetchUserData();
        // setUser(userData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
  
    loadUserData();
  }, []);

  const MyComponent = () => {
    return <Image source={myImage} style={{  top: -10 , alignSelf: 'center',width: 40, height: 40}} />;
  };

 return (
  <View style = {estilos.container}>
    <MyComponent/>
    {isLoading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : isError ? (
      <Text>Error al cargar la imagen</Text>
    ) : (
      <>
        <Image
          source={{ uri: user ? user.avatar : null }}
          style={estilos.avatar}
          onError={(error) => console.log('Error al cargar la imagen', error.nativeEvent.error)}
        />
      </>
    )}
    <Text style={estilos.welcome}>Nombre de usuario: {user && user.username ? user.username : 'Loading...'}</Text>
    <Text style={estilos.welcome}>Email: {user && user.email ? user.email : 'Loading...'}</Text>
    <View style={estilos.buttonContainer}>
      <Button title="Cerrar sesión" onPress={handleLogout} color='#999be7' />
      <Button color='#999be7' title="Editar Perfil" onPress={() => navigation.navigate('EditarPerfilScreen')} />
    </View>
  </View>
);
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
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 20,
    },
})
export default PerfilScreen
