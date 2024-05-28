import React, { useContext} from 'react';
import { View, StyleSheet, FlatList, Button, TouchableOpacity, Text } from 'react-native';
import PostCard from '../components/PostCard.jsx';
import { PostContext } from '../context/PostContext.js';
const HomeScreen = ({navigation}) => {

   const {posteos, setPosteos} = useContext(PostContext)
 
    const renderPost = ({item: post}) =>(
        <TouchableOpacity style = {estilos.touchable}
        onPress = {() =>navigation.navigate('DetallePost', {post : post})}
        >
        <PostCard
        key = {post.id}
        titulo = {post.titulo}
        descripcion = {post.descripcion}
        miniatura = {post.miniatura}
        />    
        </TouchableOpacity>
    )


    return (
       <View style = {estilos.container}>
        <Text style = {estilos.welcome}>Holaa</Text>
        <FlatList
        data = {posteos}
        renderItem ={renderPost}
        keyExtractor={post => post.id.toString()}
        contentContainerStyle = {estilos.FlatListContainer}
        numColumns={2}/>
     
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button color='#FC7E99' title= "Postear" onPress={() => navigation.navigate('CrearPost')} />
       
        </View>
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
        textAlign: 'center',
        backgroundColor : '#FC7E99',
        justifyContent: 'flex-start',
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
    }
});
export default HomeScreen
