import React, { useContext, useState } from 'react';
import { View, StyleSheet, FlatList, Button, TouchableOpacity, Text, Image, RefreshControl } from 'react-native';
import PostCard from '../components/PostCard.jsx';
import { PostContext } from '../context/PostContext.js';
import myImage from '../Imagenes/SegundoLogo.png';
import { LoginContext } from '../context/LoginContext.js';

const HomeScreen = ({ navigation }) => {
    const { posteos, favoritos, addFavorito, removeFavorito, fetchPosts } = useContext(PostContext);
    const [refresh, setRefresh] = useState(false);
    const { user, logout } = useContext(LoginContext);

    const onRefresh = async () => {
        setRefresh(true);
        await fetchPosts();
        setRefresh(false);
    };

    const renderPost = ({ item: post }) => {
        const isFavorito = favoritos.some(fav => fav.id === post.id);

        return (
            <TouchableOpacity
                style={estilos.touchable}
                onPress={() => navigation.navigate('DetallePost', { post })}
            >
                <PostCard
                    key={post.id}
                    titulo={post.titulo}
                    miniatura={post.miniatura}
                    isFavorito={isFavorito}
                    onPress={() => isFavorito ? removeFavorito(post.id) : addFavorito(post)}
                />
            </TouchableOpacity>
        );
    };

    const Logo = () => {
        return <Image source={myImage} style={{ top: -10, alignSelf: 'center', width: 40, height: 40 }} />;
    };

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
                    color='#24213a'
                    title="👤"
                    onPress={() => navigation.navigate('PerfilScreen')}
                />

            ),
        });
    }, [navigation]);

    return (
        <View style={estilos.container}>
            <Logo />
            <Text style={estilos.welcome}>Posteos</Text>
            <FlatList
                data={posteos}
                renderItem={renderPost}
                keyExtractor={post => post.id.toString()}
                contentContainerStyle={estilos.FlatListContainer}
                numColumns={1}
                refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
                }
            />
            <View style={estilos.buttonContainer}>
                <Button color='#999be7' title="Favoritos" onPress={() => navigation.navigate('FavoritosScreen')} />
                <Button color='#999be7' title="Postear" onPress={() => navigation.navigate('AgregarPost')} />
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
