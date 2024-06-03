import React, { createContext,useState } from 'react'

export const PostContext = createContext();

export const PostProvider = ({children}) => {

    const [posteos, setPost] = useState([])
    const [favoritos, setFavoritos] = useState([])

    const addPost = (newPost) => {
        setPost((prevPost) => [...prevPost, newPost])
    }
    const addFavorito = (post) => {
        const exists = favoritos.some(fav => fav.id === post.id);
        if (exists) {
            return 'El post ya está en favoritos';
        } else {
            setFavoritos([...favoritos, post]);
            return 'Post agregado a favoritos';
        }
    };

    const removeFavorito = (postId) => {
        setFavoritos(favoritos.filter(fav => fav.id !== postId));
        return 'Post eliminado de favoritos';
    };
    const removePost = (postId) => {
        setPost(posteos.filter(post => post.id !== postId));
        return 'Post eliminado';
    };

    

    return (
    <PostContext.Provider value = {{addPost, posteos, addFavorito, favoritos, removeFavorito , removePost}}>
         {children}
    </PostContext.Provider>
    )
}