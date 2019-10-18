import React, {
    Component
} from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max',age: 28},
            {name: 'Manu',age: 29},
            {name: 'Stephanie',age: 26}
        ],
        otherState: 'some other value'
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName,age: 28},
                {name: 'Manu',age: 29},
                {name: 'Stephanie',age: 27}
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max',age: 28},
                {name: event.target.value,age: 29},
                {name: 'Stephanie',age: 26}
            ]
        })
    }

    render() {

        return (
            <div className="App">
                <h1>App.js</h1>

                <div>
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(
                        this, 'Max!' )} changed={this.nameChangedHandler} />
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

                    <button className="btn btn-success mt-4" onClick={this.togglePersonsHandler}>Toggle Persons</button>

                </div>
            </div>
        );
    }
}

export default App;
