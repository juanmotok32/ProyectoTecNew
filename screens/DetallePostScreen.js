import React, { useContext } from "react";
import { View, Image, Button, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { PostContext } from "../context/PostContext";
import corazon from "../Imagenes/Corazon.png";
import corazonRelleno from "../Imagenes/CorazonRelleno.png";
import myImage from "../Imagenes/SegundoLogo.png";
import { LoginContext } from "../context/LoginContext";

const DetallePostScreen = ({ route, navigation }) => {
  const { post } = route.params;
  const { user } = useContext(LoginContext);
  const { favoritos, addFavorito, removeFavorito, removePost } =
  useContext(PostContext);

  const isFavorito = favoritos.some((fav) => fav.id === post.id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Detalles",
      headerStyle: {
        backgroundColor: "#120907",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerRight: () => (
        <Button
          color="#24213a"
          title="👤"
          onPress={() => navigation.navigate("PerfilScreen")}
        />
      ),
    });
  }, [navigation]);

  const handleFavoritoPress = () => {
    if (isFavorito) {
      removeFavorito(post.id);
    } else {
      addFavorito(post);
    }
  };
  const handleDeletePost = () => {
    removePost(post.id);
    removeFavorito(post.id);
    navigation.navigate("Home");
  };

  const MyComponent = () => {
    return (
      <Image
        source={myImage}
        style={{ top: 10, alignSelf: "center", width: 40, height: 40 }}
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <MyComponent />

      <Text style={estilos.title}>{post.titulo}</Text>
      <Image
        style={estilos.imagen}
        resizeMode="contain"
        source={{ uri: post.miniatura }}
      />

      <ScrollView
        style={estilos.descripcionContainer}
        nestedScrollEnabled={true}
      >
        <Text style={estilos.descripcion}>{post.descripcion}</Text>
      </ScrollView>

      <View style={estilos.buttonContainer}>
        <TouchableOpacity onPress={handleFavoritoPress}>
          <Image
            source={isFavorito ? corazonRelleno : corazon}
            style={isFavorito ? estilos.favoritoRelleno : estilos.favorito}
          />
        </TouchableOpacity>
        {user && user.admin && (
          <Button
            color="#999be7"
            title="Eliminar Post"
            onPress={handleDeletePost}
          />
        )}
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#24213a",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: "center",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    fontWeight: "bold",
    letterSpacing: 1.2,
    marginTop: 50,
  },
  imagen: {
    width: "100%",
    height: 250,
    marginBottom: 30,
  },
  descripcionContainer: {
    maxHeight: 230,
    marginBottom: 10,
  },
  descripcion: {
    color: "white",
    borderWidth: 2,
    borderColor: "#353535",
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
  },
  favorito: {
    width: 33,
    height: 31,
    right: -3,
  },
  favoritoRelleno: {
    width: 40,
    height: 30,
  },
});

export default DetallePostScreen;
