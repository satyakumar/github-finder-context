import React, { useContext } from 'react'
import { Row } from 'react-materialize'
import postContext from '../context/github/postContext'
import PostItem from './PostItem'



const UsersList: React.FC = () => {
    const { posts }  = useContext(postContext)
    return (
        <>
            <Row>
                {posts.map(({id, userId, title, body}) => <PostItem key={id} userId ={userId} id={id} title={title} body={body}/>)}
            </Row>
        </>
    )
}

export default UsersList
