import React, { useContext } from 'react';
import { Text ,View, StyleSheet, FlatList, TouchableOpacity, Alert, Button} from 'react-native'
import { PostContext } from '../context/PostContext.js';
import PostCard from '../components/PostCard.jsx';

const FavoritosScreen = ({navigation}) => {

  const { favoritos, setFavoritos } = useContext(PostContext);
  
  const renderFav = ({ item : post }) => (
    <TouchableOpacity
        style={estilos.touchable}
        onPress={() => navigation.navigate('DetallePost', { post: post })}
    >
        <PostCard
            key={post.id}
            titulo={post.titulo}
            descripcion={post.descripcion}
            miniatura={post.miniatura}
        />
    </TouchableOpacity>
);
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Favoritos', 
          headerStyle: {
            backgroundColor: '#120907',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        });
      }, [navigation]);
      
    return (
      <View style={estilos.container}>
      <FlatList      
          data={favoritos}
          renderItem={renderFav}
          keyExtractor={fav => fav.id.toString()}
          contentContainerStyle={estilos.FlatListContainer}
          numColumns={1}
      />

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
        marginVertical: 20,
        textAlign: 'center',
        color: 'white',
        backgroundColor : '#5a598b',
        justifyContent: 'flex-start',
    },
    scrollContainer: {
        alignItems: 'center'
    },
    FlatListContainer:{
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
    },
    view:{
        flex:1,
        margin: 10,
        maxWidth:'45%'
    }
});

export default FavoritosScreen
