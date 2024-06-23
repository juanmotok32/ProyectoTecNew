import React from 'react';
import { Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import corazon from '../Imagenes/Corazon.png';
import corazonRelleno from '../Imagenes/CorazonRelleno.png';






const PostCard = ({ titulo, miniatura, onPress, isFavorito }) => {


    const tituloAcortado = titulo.length > 14 ? titulo.substring(0, 17) + '...' : titulo;


    return (
        <ImageBackground source={{ uri: miniatura }} style={estilos.card}>
            <Text style={estilos.title}>{tituloAcortado}</Text>
            <Image
                style={estilos.imagen}
                resizeMode='contain'
            />
            <TouchableOpacity onPress={onPress} style={estilos.hearth}>
                <Image source={isFavorito ? corazonRelleno : corazon} style={isFavorito ? estilos.favoritoRelleno : estilos.favorito} />
            </TouchableOpacity>


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
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontWeight: 'bold',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        bottom: -10,
        position: 'absolute',
        letterSpacing: 1.1,
        margin: 10,
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
    },
    favorito: {
        width: 35,
        height: 31,
        right: -3,
    },
    favoritoRelleno: {
        width: 42,
        height: 31,
    },
    hearth: {
        width: 35,
        height: 27,
        position: 'absolute',
        top: 40,
        right: 40,
    },


});


export default PostCard;


