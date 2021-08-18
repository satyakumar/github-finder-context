import React, { useContext, useEffect } from 'react'
import { CardPanel, Col, Row } from 'react-materialize'
import postContext from '../../context/github/postContext'
import Comment from '../Comment'

type Props = {
    match: {
        params: {
            id: number
        }
    }
}

const PostDetail: React.FC<Props> = ({match}) => {
    const {getPost, post, getComments, comments} = useContext(postContext)
    useEffect(() => {
        if (getPost) getPost(match.params.id)
        if (getComments) getComments(match.params.id);
    }, [])
    return (
        <>
        <Row>
            <Col
                m={6}
                s={12}
            >
                <CardPanel className="teal">
                    {post?.title}
                <span className="white-text">
                    {post?.body}
                </span>
                </CardPanel>
            </Col>
        </Row>
        {comments.map(comment => <Comment key={comment.id} id={comment.id} postId={comment.postId} name={comment.name} email={comment.email} body={comment.body}/>)}
        </>
    )
}

export default PostDetail
