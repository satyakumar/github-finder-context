import React from 'react'
import { Card, Col, Icon } from 'react-materialize'
import { Link } from 'react-router-dom'
import Iuser from '../interfaces/post'

const UserItem: React.FC<Iuser> = ({id, userId, title, body}) => {
    const cardStyle = {
        display: 'block',
        width: '20vw',
        transitionDuration: '0.3s',
        height: '25vw',
        overflow: 'hidden'
    }
    return (
      
            <Col m={3} s={6}
        >
        <Card style={cardStyle}
            actions={[
            <Link to={`/post/${id}`}>Go to Post</Link>,
            ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            title={title}
        >
            {body}
        </Card>
        </Col>
    
    )
}

export default UserItem
