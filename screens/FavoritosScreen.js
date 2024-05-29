import React from 'react'
import { Text ,View, StyleSheet} from 'react-native'

const FavoritosScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Favoritos', 
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
        <View style = {estilos.container}>
            <Text style = {estilos.welcome}>FAVORITOS</Text>
        </View>
          )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#24213a",
        
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
        color: 'white',
        backgroundColor : '#5a598b',
        justifyContent: 'flex-start',
    },
    scrollContainer: {
        alignItems: 'center'
    },
    FlatListContainer:{
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
    },
    view:{
        flex:1,
        margin: 10,
        maxWidth:'45%'
    }
});

export default FavoritosScreen
