import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Image } from 'react-native';
import { LoginContext } from '../context/LoginContext';
import myImage from '../Imagenes/SegundoLogo.png';


const EditarPerfilScreen = ({ navigation }) => {
    const { user, updateProfile } = useContext(LoginContext);
    const [nombre, setNombre] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [avatarUrl, setAvatarUrl] = useState(user.avatar);

    const handleSubmit = () => {
        updateProfile(nombre, email, avatarUrl);
        navigation.navigate('PerfilScreen');
      };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: <Text style={estilos.perfil}>Editar Perfil</Text>,
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
      <Text>Editar Perfil</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
  value={avatarUrl}
  onChangeText={setAvatarUrl}
  placeholder="URL del nuevo avatar"
/>
      <Button title="Guardar Cambios" onPress={handleSubmit}   />
    </View>
  );
};
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
export default EditarPerfilScreen;