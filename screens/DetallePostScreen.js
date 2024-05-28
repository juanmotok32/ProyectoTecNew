import React from 'react'
import { View, Image, Button, Text, StyleSheet } from 'react-native'

const DetallePostScreen = ({route, navigation}) => {

    const {post} = route.params; 

  return (
    
<View style = {estilos.counterContainer}>
    <Image 
    style = {estilos.imagen}
    resizeMode='contain'
    source={{uri : post.miniatura}}/>
    <Text style = {estilos.title}>{post.Titulo} </Text>
    <Text style = {estilos.description}>{post.Descripcion} </Text>
    <Text style = {estilos.separador}>------------------------------------------------------------------------------------------</Text>
    <Button title = 'Volver Atras' onPress={ () => navigation.navigate('Home')}/>
    </View>
  )
}

const estilos = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center"
      },
    imagen: {
      borderColor: 'black',
        width: '100%',
        height: 200,
        marginBottom: 10 
    }, title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    cantidad: {
        fontSize: 16,
        color: 'green',
        marginBottom: 5
    }, texto: {
        fontSize: 15,
        marginBottom: 15,
        textAlign: "center"
      },
      separador:{
        color: 'black'
      },
      counterContainer:{
            flex: 1,
            paddin: 20,
            justifyContent: "center"
        },
    description: {
        fontSize: 14,
        color: '#333'
    },
})

export default DetallePostScreen
