import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AgregarPostScreen from './screens/AgregarPostScreen';
import { PostProvider } from './context/PostContext';
import DetallePostScreen from './screens/DetallePostScreen';
import FavoritosScreen from './screens/FavoritosScreen';
import PerfilScreen from './screens/PerfilScreen';
import RegisterScreen from './screens/RegisterScreen';
import PrincipalScreen from './screens/PrincipalScreen';
import { LoginContext, LoginProvider } from './context/LoginContext';

const Stack = createStackNavigator();

function AppNavigation() {
  const { isLogged } = useContext(LoginContext);

  if (isLogged === "checking") {
    return null; // Puedes mostrar un spinner aquí
  }

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      {
        isLogged !== "logged" ? (
          <>
            <Stack.Screen name="PrincipalScreen" component={PrincipalScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </>)
          : (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="AgregarPost" component={AgregarPostScreen} />
              <Stack.Screen name="DetallePost" component={DetallePostScreen} />
              <Stack.Screen name="FavoritosScreen" component={FavoritosScreen} />
              <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
            </>)
      }
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <LoginProvider>
      <PostProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PostProvider>
    </LoginProvider>
  );
}
