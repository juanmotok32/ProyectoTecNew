import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const PostCard = (Titulo, Descripcion, Miniatura) => {
    const tituloAcortado = Titulo.lenght > 15 ? Titulo.substring(0, 20) + '...' : Titulo
    return (
        <View style={estilos.card}>
            <Text style={estilos.title}>{tituloAcortado}</Text>
            <Image
                style={estilos.imagen}
                resizeMode='contain'
                source={{ uri: Miniatura }} />
            <View style={estilos.descriptionContainer}>
                <Text style={estilos.description}>{Descripcion}</Text>
            </View>
        </View>
    )
}

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
    price: {
        fontSize: 16,
        color: 'green',
        marginBottom: 5
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
})

export default PostCard
