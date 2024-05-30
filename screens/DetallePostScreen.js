import React, { useContext, useState } from 'react';
import { View, Image, Button, Text, StyleSheet } from 'react-native'
import { PostContext } from '../context/PostContext';

const DetallePostScreen = ({ route, navigation }) => {

  const { post } = route.params;
  const { addFavorito,  removeFavorito} = useContext(PostContext);

  React.useLayoutEffect(() => {
      navigation.setOptions({
          title: 'Detalles',
          headerStyle: {
              backgroundColor: '#120907',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontWeight: 'bold',
          },
          headerRight: () => (
              <Button
                  color='#999be7'
                  title="Perfil"
                  onPress={() => navigation.navigate('PerfilScreen')}
              />
          ),
      });
  }, [navigation]);
  const handleSumit = () => {
    const newPost = {
      id : post.id,
      titulo : post.titulo,
      descripcion : post.descripcion ,
      miniatura : post.miniatura
    }
    console.log('SE GUARDO ',  newPost.id);
    addFavorito(newPost);
    navigation.goBack();
  };
  const remove = () => {
    removeFavorito(post.id)
    navigation.goBack();
  }
  
  return (
      <View style={estilos.counterContainer}>
          <Text style={estilos.title}>{post.titulo}</Text>

          <Image
              style={estilos.imagen}
              resizeMode='contain'
              source={{ uri: post.miniatura }}
          />

          <Text style={estilos.descripcion}>{post.descripcion}</Text>

          <View style={estilos.buttonContainer}>
              <Button color='#999be7' title="Guardar" onPress={handleSumit} />
              <Button color='#999be7' title="Eliminar" onPress={remove} />

          </View>
      </View>
  );
};

/*
<View style={estilos.buttonContainer}>
                <Button color='#999be7' title="Favoritos" onPress={() => navigation.navigate('FavoritosScreen')} />
                <Button color='#999be7' title="Postear" onPress={() => navigation.navigate('CrearPost')} />
            </View>
*/
const estilos = StyleSheet.create({
  title: {
      fontSize: 24,
      marginBottom: 20,
      bottom: 130,
      textAlign: 'center',
      color: 'white',
      textShadow: '2px 2px 4px black',
      fontWeight: 'bold',
      letterSpacing: 1.2,
  },
  imagen: {
      borderColor: 'black',
      width: '100%',
      height: 280,
      marginBottom: 10,
      position: 'static',
      bottom: 110,
  },
  descripcion: {
      color: 'white',
      marginBottom: 20,
      bottom: 100,
      left: 0,
      borderWidth: 2,
      borderColor: '#353535',
      overflow: 'hidden',
      borderRadius: 5,
      width: '90%',
      alignSelf: 'center',
  },
  counterContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#24213a',
  },
  buttonContainer: {
      flexDirection: 'row', // Alinea los botones en una fila
      justifyContent: 'space-between', // Espacio entre los botones
      alignItems: 'flex-end', // Alinea los botones en la parte inferior
  },
  flecha: {
      width: 50,
      height: 50,
      backgroundColor: '#5a598b',
      borderRadius: 5,
      margin: 10,
  },
});

export default DetallePostScreen;
