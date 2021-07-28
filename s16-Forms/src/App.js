import SimpleInput from './components/SimpleInput'
import MultipleInputs from './components/MultipleInputs'

function App() {
    return (
        <div className='container app py-4'>
            {' '}
            <h1>MyTravel</h1>
            <div className='row'>
                <div className='col'>
                    <SimpleInput />
                </div>
                <div className='col'>
                    <MultipleInputs />
                </div>
            </div>
        </div>
    )
}

export default App
