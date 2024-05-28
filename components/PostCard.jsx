import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const PostCard = ({ titulo, descripcion, miniatura }) => {
    const tituloAcortado = titulo.length > 15 ? titulo.substring(0, 20) + '...' : titulo;
    const descAcortada = descripcion.length > 15 ? descripcion.substring(0, 20) + '...' : descripcion;

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
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        padding: 10,
        borderRadius: 5,
        bottom: 0,
        position: 'absolute',
        width: '120%',
        display: "inline-flex",
    },
    card: {
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 5,
        padding: 30,
        marginBottom: 10,
        width: 380,
        height: 370,
        overflow: "hidden",
    }
});

export default PostCard;
