import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import AgregarPostScreen from './screens/AgregarPostScreen.js';
import { PostProvider } from './context/PostContext.js';
import DetallePostScreen from './screens/DetallePostScreen.js';
import FavoritosScreen from './screens/FavoritosScreen.js'
import PerfilScreen from './screens/PerfilScreen.js'
import RegisterScreen from './screens/RegisterScreen.js';
import PrincipalScreen from './screens/PrincipalScreen.js';

const Stack = createStackNavigator();

export default function App() {
    return (
      <PostProvider>
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Principal">
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name= 'RegisterScreen' component={RegisterScreen}/>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='CrearPost' component={AgregarPostScreen} />
                <Stack.Screen name='DetallePost' component={DetallePostScreen} />
                <Stack.Screen name= 'FavoritosScreen' component={FavoritosScreen}/>
                <Stack.Screen name= 'PerfilScreen' component={PerfilScreen}/>
                <Stack.Screen name= 'Principal' component={PrincipalScreen}/>
                
            </Stack.Navigator>
        </NavigationContainer>
      </PostProvider>
    );
}