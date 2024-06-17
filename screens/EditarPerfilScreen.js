import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Image, ActivityIndicator, ScrollView } from 'react-native';
import { LoginContext } from '../context/LoginContext';
import myImage from '../Imagenes/SegundoLogo.png';
import * as ImagePicker from 'expo-image-picker';

const EditarPerfilScreen = ({ navigation }) => {
    const { user, updateProfile } = useContext(LoginContext);
    const [nombre, setNombre] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [avatar, setAvatar] = useState(user ? user.avatar : null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSubmit = async () => {
      await updateProfile(nombre, email, password, avatar);
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

  const subirAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  
  const subirFotoDesdeCamara = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    
    <View style = {estilos.container}>
      
        <MyComponent/>
      
      <ScrollView>
      <Text style={estilos.welcome}>Username:</Text>
      <TextInput  style={estilos.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
      />
      <Text style={estilos.welcome}>Email:</Text>
      <TextInput  style={estilos.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <Text style={estilos.welcome}>Password:</Text>
      <View style={{ flexDirection: 'row' }}>
       <TextInput  style={estilos.input}
        value={password}
        onChangeText={setPassword}
        maxLength={30}
        placeholder="Contraseña"
        secureTextEntry={!isPasswordVisible}
      />
        <Button 
          color='#999be7'
    title={isPasswordVisible ? '🔒' : '👁'}
    onPress={() => setIsPasswordVisible(prevState => !prevState)}
  />
          </View>
      
          <View style={estilos.contenedorImagen}>
  <Image source={{ uri: avatar }} style={estilos.avatar} />
</View>
        
<Text style={estilos.welcome}>Cambiar perfil desde:</Text>
       <View style={estilos.buttonContainer}>
        <View style={estilos.buttonWrapper}>
        
          <Button color='#999be7' title={avatar ? 'Galería' : 'Subir Foto'} onPress={subirAvatar} />
        </View>
        <View style={estilos.buttonWrapper}>
          <Button color='#999be7' title={avatar ? "Cámara" : "Tomar Foto"} onPress={subirFotoDesdeCamara} />
        </View>
      </View>
      {avatar && (
        <Image source={{ uri: avatar }} style={estilos.imagen} />
      )}
       <View style={estilos.buttonGuardar}>
      <Button color='#999be7' title="Guardar Cambios"  onPress={handleSubmit}   />
      </View>
      </ScrollView>
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
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
      width: '100%',
      marginTop: 12,
      marginVertical: 30,
      backgroundColor: 'transparent'
    },
    buttonWrapper: {
      flex: 1,
      marginHorizontal: 5,
    },
    buttonGuardar: {
      marginVertical: 30,
      backgroundColor: 'transparent'
    },
    perfil : {
        // textDecorationLine: 'underline', 
        fontWeight: 'bold', 
        color: '#fff' 
    },
    input: {
      backgroundColor: '#999be7',
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    inputs: {
      color: 'white'
    },
    contenedorImagen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      marginVertical: 30,
      width: 200,
      height: 200,
      borderRadius: 50,
      marginBottom: 20,
    },
})
export default EditarPerfilScreen;