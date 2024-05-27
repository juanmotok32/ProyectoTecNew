import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import PostCard from '../components/PostCard';
import { PostContext } from '../context/PostContext';
const HomeScreen = ({navigation}) => {
   const {posteos, setPosteos} = useContext(PostContext)
 
   const renderPost = ({post}) =>(
    <TouchableOpacity
    key = {post.id}
    onPress={() =>navigation.navigate('DetallePost', {post : post})}
    >
    <PostCard
    key = {post.id}
    Titulo = {post.titulo}
    Descripcion = {post.descripcion}
    Miniatura = {post.miniatura}
    />    
    </TouchableOpacity>
   )


    return (
        <View style = {estilos.container}>

        <FlatList
        data = {posteos}
        renderPost={renderPost}
        keyExtractor={post => post.id.toString()}
        contentContainerStyle = {estilos.FlatListContainer}
        numColumns={2}/>
        
         <Button
                title="Postear"
                onPress={ () => navigation.navigate('CrearPost')}
            />

        </View>
  
          )
}


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center'
    },
    scrollContainer: {
        alignItems: 'center'
    },
    FlatListContainer:{
        justifyContent: 'center'
    },
    view:{
        flex:1,
        margin: 10,
        maxWidth:'45%'
    },
    touchable :{

    }
});
export default HomeScreen
