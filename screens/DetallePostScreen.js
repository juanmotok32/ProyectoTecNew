import React from 'react'
import { View, Image, Button, Text, StyleSheet, TouchableOpacity } from 'react-native'

const DetallePostScreen = ({route, navigation}) => {

    const {post} = route.params; 

    React.useLayoutEffect(() => {
      navigation.setOptions({
        title: 'Detalles', 
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
    
<View style = {estilos.counterContainer}>
    <Image 
    style = {estilos.imagen}
    resizeMode='contain'
    source={{uri : post.miniatura}}/>
    <Text style = {estilos.title}>{post.Titulo} </Text>

    <Text style = {estilos.description}>{post.Descripcion} </Text>
    
    {/* <TouchableOpacity onPress={ () => navigation.navigate('Home')}>
  <Image style = {estilos.flecha} source = {require('../assets/flecha-izq.png')} />
</TouchableOpacity> */}
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
            justifyContent: "center",
            backgroundColor: "#24213a",
        },
    description: {
        fontSize: 14,
        color: 'white'
    },
    flecha: {
      width: 50,
      height: 50,
      backgroundColor: '#5a598b',
      borderRadius: 5,
      margin: 10
    }
})

export default DetallePostScreen
