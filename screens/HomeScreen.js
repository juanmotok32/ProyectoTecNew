import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Button, TouchableOpacity, Text } from 'react-native';
import PostCard from '../components/PostCard.jsx';
import { PostContext } from '../context/PostContext.js';

const HomeScreen = ({ navigation }) => {
    const { posteos, setPosteos } = useContext(PostContext);

    const renderPost = ({ item: post }) => (
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
            title: 'TecNews',
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

    return (
        <View style={estilos.container}>
            <Text style={estilos.welcome}>Posteos</Text>
            <FlatList
                data={posteos}
                renderItem={renderPost}
                keyExtractor={post => post.id.toString()}
                contentContainerStyle={estilos.FlatListContainer}
                numColumns={1}
            />
            <View style={estilos.buttonContainer}>
                <Button color='#999be7' title="Favoritos" onPress={() => navigation.navigate('FavoritosScreen')} />
                <Button color='#999be7' title="Postear" onPress={() => navigation.navigate('CrearPost')} />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: "#24213a"
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#5a598b',
        justifyContent: 'flex-start',
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
  },
    scrollContainer: {
        alignItems: 'center'
    },
    FlatListContainer: {
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
    },
    view: {
        flex: 1,
        margin: 10,
        maxWidth: '45%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 0,
        backgroundColor: 'transparent'
    }
});

export default HomeScreen;
