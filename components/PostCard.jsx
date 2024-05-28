import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PostCard = ({ titulo, descripcion, miniatura }) => {
    const tituloAcortado = titulo.length > 15 ? titulo.substring(0, 20) + '...' : titulo;
    const descAcortada = descripcion.length > 15 ? descripcion.substring(0, 20) + '...' : descripcion;

    return (
        <View style={estilos.card}>
            <Text style={estilos.title}>{tituloAcortado}</Text>
            <Image
                style={estilos.imagen}
                resizeMode='contain'
                source={{ uri: miniatura }}
            />
            <View style={estilos.descriptionContainer}>
                <Text style={estilos.description}>{descAcortada}</Text>
            </View>
        </View>
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
        marginTop: 10
    },
    description: {
        fontSize: 14,
        color: '#333'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    card: {
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 5,
        padding: 30,
        marginBottom: 10,
        backgroundColor: '#fff',
        width: 170,
        height: 370,
    }
});

export default PostCard;
