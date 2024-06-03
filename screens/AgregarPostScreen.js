import React, { useContext, useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, Image, Keyboard, ScrollView  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { PostContext } from '../context/PostContext';

const AgregarPostScreen = () => {
  const { addPost } = useContext(PostContext);

  const navigation = useNavigation();

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [miniatura, setMiniatura] = useState(null);

  const handleSumit = () => {
    const newPost = {
      id: Math.random().toString(),
      titulo,
      descripcion,
      miniatura
    }
    console.log('El nuevo post es: ',  newPost.id);
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
    console.log('SUBIR MINIATURA: ', result);
    if (!result.cancelled) {
      setMiniatura(result.assets[0].uri);
    }
  };
  
  return (
    <ScrollView contentContainerStyle={estilos.container}>
    <Text style={estilos.title}>Aca podrás crear un nuevo posteo</Text>
    <TextInput
      style={estilos.inputTitulo}
      placeholder='Titulo'
      placeholderTextColor='white'
      value={titulo}
      onChangeText={setTitulo}
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
      <Button color='#999be7' title= {miniatura ? 'Cambiar miniatura' : 'Subir Foto'} onPress={subirMiniatura} />
      </View>
      {miniatura && (
          <Image source={{ uri: miniatura }} style={estilos.imagen} />
      )}
      <View style={estilos.buttonContainer}>
        <Button color='#999be7' title= "POSTEAR" onPress={handleSumit} />
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
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
