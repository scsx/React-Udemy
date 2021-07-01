import './scss/App.scss'
import { Row, Col } from 'antd'
import Header from './components/Layout/Header'

function App() {
    return (
        <div className='App'>
            <Header />
            <Row>
                <Col span={24}>col</Col>
            </Row>
            <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
        </div>
    )
}

export default App
