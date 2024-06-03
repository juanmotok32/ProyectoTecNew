import React from 'react';
import { Text, Image, StyleSheet, ImageBackground } from 'react-native';

const PostCard = ({ titulo, miniatura }) => {

    const tituloAcortado = titulo.length > 15 ? titulo.substring(0, 20) + '...' : titulo;

    return (
        <ImageBackground source={{ uri: miniatura }} style={estilos.card}>
            <Text style={estilos.title}>{titulo}</Text>
            <Image
                style={estilos.imagen}
                resizeMode='contain'
            // source={{ uri: miniatura }}
            />

        </ImageBackground>

    );
};

const estilos = StyleSheet.create({
    imagen: {
        width: '100%',
        height: 200,
        marginBottom: 10
    },
    descriptionContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        color: '#333',
        textAlignVertical: 'bottom'

    },
    title: {
        fontSize: 28,
        textShadow: '2px 2px 4px black',
        fontWeight: 'bold',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        bottom: -10,
        left: 30,
        position: 'absolute',
        letterSpacing: 1.2,
        margin: 15,
    },
    card: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        marginBottom: 10,
        width: 340,
        height: 320,
        overflow: "hidden",
        marginTop: 20
    }
});

export default PostCard;
