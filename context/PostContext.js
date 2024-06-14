import React, { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posteos, setPost] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const fetchPosts = async () => {
    try {
      const result = await fetch("https://666789b3f53957909ff4916a.mockapi.io/api/v1/Posteos");
      const posts = await result.json();
      setPost(posts);
    } catch (error) {
      console.error("Error en el fetch de posts", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = async (newPost) => {
    try {
      const result = await fetch(
        "https://666789b3f53957909ff4916a.mockapi.io/api/v1/Posteos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );

      if (result.ok) {
        const postCreado = await result.json();
        setPost([...posteos, postCreado]);
      } else {
        alert("Error en la creación del post");
      }
    } catch (error) {
      console.error("Error en la creación del post", error);
    }
  };

  const addFavorito = (post) => {
    const exists = favoritos.some((fav) => fav.id === post.id);
    if (exists) {
      return "El post ya está en favoritos";
    } else {
      setFavoritos([...favoritos, post]);
      return "Post agregado a favoritos";
    }
  };

  const removeFavorito = (postId) => {
    setFavoritos(favoritos.filter((fav) => fav.id !== postId));
    return "Post eliminado de favoritos";
  };

  const removePost = async (postId) => {
    try {
      const result = await fetch(
        `https://666789b3f53957909ff4916a.mockapi.io/api/v1/Posteos/${postId}`,
        {
          method: "DELETE",
        }
      );

      if (result.ok) {
        setPost(posteos.filter((post) => post.id !== postId));
        return "Post eliminado";
      } else {
        alert("Error al eliminar el post");
      }
    } catch (error) {
      console.error("Error al eliminar el post", error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        addPost,
        posteos,
        addFavorito,
        favoritos,
        removeFavorito,
        removePost,
        fetchPosts
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
