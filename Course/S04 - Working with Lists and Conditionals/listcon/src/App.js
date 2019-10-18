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
        otherState: 'some other value',
        showPersons: true
    }

    deletePersonHandler = (personIndex) => {
        // const currentPersons = this.state.persons; // this deletes from state, bad practice
        const currentPersons = [...this.state.persons]; // this way we make a copy
        currentPersons.splice(personIndex, 1);
        this.setState({persons: currentPersons});
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {id: '00', name: 'Max', age: 28},
                {id: '01', name: event.target.value, age: 29},
                {id: '02', name: 'Stephanie', age: 26}
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        // this merges with the current state
        this.setState({showPersons: !doesShow});
    }

    render() {

        let personsHTML = null;
        if (this.state.showPersons) {
            personsHTML = (
                <div className="people">

                    {this.state.persons.map((guy, index) => {
                        return <Person key={guy.id} delClick={() => this.deletePersonHandler(index)} name={guy.name} age={guy.age} />
                    })}

                    {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(
                        this, 'Max!' )} changed={this.nameChangedHandler} />
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>App.js</h1>
                <button className="btn btn-success mt-4" onClick={this.togglePersonsHandler}>Toggle Persons</button>

                {personsHTML}

            </div>
        );
    }
}

export default App;
