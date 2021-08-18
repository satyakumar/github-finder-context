import React from 'react'
import { Col, Collection, CollectionItem, Row } from 'react-materialize'
import IComment from '../interfaces/comment'

const Comment: React.FC<IComment> = ({name, id, body, email, postId}) => {
    return (
        <>
            <Row>
                <Col
                    m={10}
                    s={12}
                >
                    <Collection>
                    <CollectionItem>
                        {body}
                    </CollectionItem>
                    </Collection>
                </Col>
            </Row>  
        </>
    )
}

export default Comment
