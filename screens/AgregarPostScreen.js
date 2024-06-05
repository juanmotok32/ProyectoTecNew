import React, { useContext, useState, useEffect } from 'react';
import { Button, TextInput, View, StyleSheet, Text, Image, Keyboard, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { PostContext } from '../context/PostContext';
import myImage from '../Imagenes/SegundoLogo.png';


const AgregarPostScreen = () => {
  const { addPost } = useContext(PostContext);
  const navigation = useNavigation();

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [miniatura, setMiniatura] = useState(null);

  const MyComponent = () => {
    return <Image source={myImage} style={{ top: -20, alignSelf: 'center', width: 40, height: 40 }} />;
  };

  const handleSumit = () => {
    if (!titulo || titulo.length > 30) {
      Alert.alert('Error', 'El título no puede ser nulo y debe tener menos de 30 caracteres.');
      return;
    }

    if (!miniatura) {
      Alert.alert('Error', 'Debe subir una miniatura.');
      return;
    }

    const newPost = {
      id: Math.random().toString(),
      titulo,
      descripcion,
      miniatura
    };
    console.log('El nuevo post es: ', newPost);
    addPost(newPost);
    navigation.goBack();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Crear Post',
      headerStyle: {
        backgroundColor: '#120907',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [navigation]);

  const subirMiniatura = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setMiniatura(result.assets[0].uri);
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
      setMiniatura(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={{...estilos.container, flexGrow: 1}}>
      <MyComponent />
      <Text style={estilos.title}>Aca podrás crear un nuevo posteo</Text>
      <TextInput
        style={estilos.inputTitulo}
        placeholder='Titulo'
        placeholderTextColor='white'
        value={titulo}
        onChangeText={text => {
          if (text.length <= 30) setTitulo(text);
        }}
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType='done'
      />
      <TextInput
        style={estilos.inputDescripcion}
        placeholder='Descripción'
        placeholderTextColor='white'
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
        numberOfLines={4}
      />
      <View style={estilos.buttonContainer}>
        <View style={estilos.buttonWrapper}>
        <Button color='#999be7' title={miniatura ? 'Cambiar desde galería' : 'Subir Foto'} onPress={subirMiniatura} />
        </View>
        <View style={estilos.buttonWrapper}>
        <Button color='#999be7' title={miniatura ? "Cambiar desde cámara" : "Tomar Foto"} onPress={subirFotoDesdeCamara} />
        </View>
      </View>
      {miniatura && (
        <Image source={{ uri: miniatura }} style={estilos.imagen} />
      )}
      <View style={estilos.buttonPostear}>
        <Button color='#999be7' title="POSTEAR" onPress={handleSumit} />
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#24213a',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: 'center',
    color: 'white'
  },
  scrollContainer: {
    alignItems: 'center'
  },
  inputTitulo: {
    backgroundColor: '#5a598b',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  inputDescripcion: {
    backgroundColor: '#5a598b',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '100%',
    textAlignVertical: 'top',
    maxHeight: 110,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '100%',
    marginTop: 12,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonPostear: {
    marginBottom: 5,
    width: '100%',
    marginTop: 20,
  },
  imagen: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
  },
});


export default AgregarPostScreen;



