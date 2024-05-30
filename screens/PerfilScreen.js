import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PerfilScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: <Text style={estilos.perfil}>Perfil</Text>,
          headerStyle: {
            backgroundColor: '#120907',
          },
          headerTintColor: '#fff',
        });
      }, [navigation]);
    return (
        <View style = {estilos.container}>
            <Text style={estilos.welcome}>Nombre Usuario</Text>
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
        backgroundColor: '#5a598b',
        justifyContent: 'flex-start',
    },
    perfil : {
        textDecorationLine: 'underline', 
        fontWeight: 'bold', 
        color: '#fff' 
    }
})
export default PerfilScreen
