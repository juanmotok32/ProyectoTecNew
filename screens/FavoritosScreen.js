import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Button,Image} from 'react-native'
import { PostContext } from '../context/PostContext.js';
import PostCard from '../components/PostCard.jsx';
import myImage from '../Imagenes/SegundoLogo.png';


const FavoritosScreen = ({navigation}) => {

  const { favoritos, removeFavorito } = useContext(PostContext);
  
  
  const MyComponent = () => {
    return <Image source={myImage} style={{ top: -10 , alignSelf: 'center',width: 40, height: 40}} />;
  };
  
  const renderFav = ({ item : post }) => {
    const isFavorito = favoritos.some(fav => fav.id === post.id);
    return(
    <TouchableOpacity
        style={estilos.touchable}
        onPress={() => navigation.navigate('DetallePost', { post: post })}
    >
        <PostCard
            key={post.id}
            titulo={post.titulo}
            descripcion={post.descripcion}
            miniatura={post.miniatura}
            isFavorito={isFavorito}
                onPress={() => removeFavorito(post.id)}
        
        />
    </TouchableOpacity>
    )
  

  }
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
        <MyComponent/>
      <FlatList      
          data={favoritos}
          renderItem={renderFav}
          keyExtractor={fav => fav.id.toString()}
          contentContainerStyle={estilos.FlatListContainer}
          numColumns={1}
      />
    <Button title = 'Volver' 
      color='#999be7'r
      onPress={() => navigation.navigate('Home')}></Button>
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
