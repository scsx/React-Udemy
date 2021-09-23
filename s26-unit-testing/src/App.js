import Greeting from './components/Greeting'
import Async from './components/Async'
import AsyncWithMock from './components/AsyncWithMock'
import './App.css'

function App() {
    return (
        <div className='App'>
            <h1>Welcome to testing</h1>
            <Greeting />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Async />
                        </td>
                        <td>
                            <AsyncWithMock />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default App
