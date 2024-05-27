import React, { createContext,useState } from 'react'

export const PostContext = createContext();

export const PostProvider = ({children}) => {

    const [posteos, setPost] = useState([])

    const addPost = (newPost) => {
        setPost((prevPost) => [...prevPost, newPost])
    }

    return (
    <PostContext.Provider value = {{addPost, posteos, setPost}}>
         {children}
    </PostContext.Provider>
    )
}