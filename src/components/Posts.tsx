import React, { useContext, useEffect } from 'react'
import postContext from '../context/github/postContext'
import LoadingSpinner from './pages/LoadingSpinner'
import PostsList from './PostsList'
const Users: React.FC = () => {
    const {isLoading, getPosts} = useContext(postContext)
    useEffect(() => {
        if (getPosts) getPosts()
    }, [])

    return isLoading ? <LoadingSpinner/> : <PostsList/>
}

export default Users
