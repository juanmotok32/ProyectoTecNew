import React, { useContext, useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { PostContext } from '../context/PostContext';

const AgregarPostScreen = () => {
  const navigation = useNavigation();
  const { addPost } = useContext(PostContext);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [miniatura, setMiniatura] = useState(null);

  const handleSumit = () => {
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

  const subirMiniatura = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log('SUBIR MINIATURA: ', result);
    if (!result.cancelled) {
      setMiniatura(result.assets[0].uri);
    }
  };
  

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Aca podrás crear un nuevo posteo</Text>
      <TextInput
        style={estilos.inputTitulo}
        placeholder='Titulo'
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={estilos.inputDescripcion}
        placeholder='Descripción'
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
        numberOfLines={4}
      />
      <View style={estilos.buttonContainer}>
        <Button color='#FC7E99' title='Subir Miniatura' onPress={subirMiniatura} />
      </View>
      {miniatura && (
          <Image source={{ uri: miniatura }} style={estilos.imagen} />
      )}
      <View style={estilos.buttonContainer}>
        <Button color='#FC7E99' title="POSTEAR" onPress={handleSumit} />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCC2FF',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'flex-start',
    paddingTop: 60,

  },
  title: {
    fontSize: 24,
    marginBottom: 150,
    textAlign: 'center'
  },
    inputTitulo: {
    backgroundColor: '#F4E0FA',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  inputDescripcion: {
    backgroundColor: '#F4E0FA',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginBottom: 10,
    width: '100%',
  },
  imagen: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
});

export default AgregarPostScreen;
