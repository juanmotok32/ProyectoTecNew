import React, { useContext } from 'react';
import { View, Image, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { PostContext } from '../context/PostContext';

const DetallePostScreen = ({ route, navigation }) => {
  const { post } = route.params;
  const { addFavorito, removeFavorito } = useContext(PostContext);

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
      id: post.id,
      titulo: post.titulo,
      descripcion: post.descripcion,
      miniatura: post.miniatura
    }
    console.log('SE GUARDO ', newPost.id);
    addFavorito(newPost);
    navigation.goBack();
  };

  const remove = () => {
    removeFavorito(post.id)
    navigation.goBack();
  }
return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{post.titulo}</Text>

      <Image
        style={styles.imagen}
        resizeMode='contain'
        source={{ uri: post.miniatura }}
      />

      <ScrollView style={styles.descripcionContainer}>
        <Text style={styles.descripcion}>{post.descripcion}</Text>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button color='#999be7' title="Guardar" onPress={handleSumit} />
        <Button color='#999be7' title="Eliminar" onPress={remove} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#24213a',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    marginTop: 10,
  },
  imagen: {
    width: '100%',
    height: 250,
    marginBottom: 30,
  },
  descripcionContainer: {
    maxHeight: 230,
    marginBottom: 10,
  },
  descripcion: {
    color: 'white',
    borderWidth: 2,
    borderColor: '#353535',
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60, 
  },
});

export default DetallePostScreen;