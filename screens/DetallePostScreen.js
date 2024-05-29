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
  <Text style = {estilos.title}>{post.titulo} </Text>

    <Image
    style = {estilos.imagen}
    resizeMode='contain'
    source={{uri : post.miniatura}}/>

    <Text style = {estilos.descripcion}>{post.descripcion} </Text>
    
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
        bottom : 130,
        textAlign : 'center',
        color : 'white',
        textShadow: '2px 2px 4px black',
        fontWeight: 'bold',
        letterSpacing: 1.2,
      },
    imagen: {
      borderColor: 'black',
        width: '100%',
        height: 280,
        marginBottom: 10,
        position: 'static',
        bottom : 110
      },
      descripcion:{
        color: 'white',
        marginBottom: 20,
        bottom : 100,
        left:15,
        borderWidth: 2,
        borderColor: '#353535',
      },
      counterContainer:{
            flex: 1,
            paddin: 20,
            justifyContent: "center",
            backgroundColor: "#24213a",
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
