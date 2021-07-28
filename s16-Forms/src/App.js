import SimpleInput from './components/SimpleInput'
import MultipleInputs from './components/MultipleInputs'
import BasicForm from './components/BasicForm'

function App() {
    return (
        <div className='container app py-4'>
            {' '}
            <h1>MyReactForms</h1>
            <div className='row'>
                <div className='col'>
                    <SimpleInput />
                </div>
                <div className='col'>
                    <MultipleInputs />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <BasicForm />
                </div>
            </div>
        </div>
    )
}

export default App
