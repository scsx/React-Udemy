import { Container, Row, Col } from 'react-bootstrap'

function App() {
    return (
        <Container fluid>
            <Row className='maingrid'>
                <Col xs={3} className='console'>
                    <h2 className='blue'>New user</h2>
                </Col>
                <Col className='users'>
                    <h2>User List</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default App
