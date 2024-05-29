import React, { createContext,useState } from 'react'

export const PostContext = createContext();

export const PostProvider = ({children}) => {

    const [posteos, setPost] = useState([])
    const [favoritos, setFavoritos] = useState([])

    const addPost = (newPost) => {
        setPost((prevPost) => [...prevPost, newPost])
    }

    const addFavorito = (newFavorito) => {
        setFavoritos((prevFavorito) => [...prevFavorito, newFavorito])
    }
    
    return (
    <PostContext.Provider value = {{addPost, posteos, addFavorito, favoritos}}>
         {children}
    </PostContext.Provider>
    )
}