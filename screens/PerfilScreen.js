import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ActivityIndicator, ScrollView } from 'react-native';
import myImage from '../Imagenes/SegundoLogo.png';
import { LoginContext } from '../context/LoginContext';
import userDefaultImage from '../Imagenes/UserDefault.png';

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
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
  
    loadUserData();
  }, []);

  const MyComponent = () => {
    return <Image source={myImage} style={{ top: -10, alignSelf: 'center', width: 40, height: 40 }} />;
  };

 return (
  <View style={estilos.container}>
    <MyComponent/>
    <ScrollView contentContainerStyle={estilos.scrollContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : isError ? (
        <Text style={estilos.errorText}>Error al cargar la imagen</Text>
      ) : (
        <Image
          source={user && user.hasCustomAvatar ? { uri: user.avatar } : userDefaultImage}
          style={estilos.avatar}
          onError={(error) => console.log('Error al cargar la imagen', error.nativeEvent.error)}
        />
      )}
      <Text style={estilos.welcome}>Nombre de usuario: {user && user.username ? user.username : 'Loading...'}</Text>
      <Text style={estilos.welcome}>Email: {user && user.email ? user.email : 'Loading...'}</Text>
      <View style={estilos.buttonContainer}>
        <Button title="Cerrar sesión" onPress={handleLogout} color='#999be7' />
        <Button color='#999be7' title="Editar Perfil" onPress={() => navigation.navigate('EditarPerfilScreen')} />
      </View>
    </ScrollView>
  </View>
 );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#24213a",
  },
  scrollContainer: {
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
    top: 150,
    backgroundColor: 'rgba(153, 155, 231, 0.4)', 
    padding: 10, 
    borderRadius: 5, 
  },
  perfil: {
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 200,
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
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 20,
    top: 100
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  }
});

export default PerfilScreen;
