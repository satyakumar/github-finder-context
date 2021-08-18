import React from 'react'
import { Col, ProgressBar, Row } from 'react-materialize'

const LoadingSpinner = () => {
    return (
        <Row>
            <Col s={12}>
                <ProgressBar />
            </Col>
        </Row>
    )
}

export default LoadingSpinner
