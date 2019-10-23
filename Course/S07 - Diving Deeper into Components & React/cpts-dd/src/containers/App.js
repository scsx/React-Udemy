import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 0, name: 'Max', age: 28},
            {id: 1, name: 'Manu', age: 29},
            {id: 2, name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: true
    }

    deletePersonHandler = (personIndex) => {
        const currentPersons = [...this.state.persons];
        currentPersons.splice(personIndex, 1);
        this.setState({persons: currentPersons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const personsCopy = [...this.state.persons];
        personsCopy[personIndex] = person;
        this.setState({
            persons: personsCopy
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {

        let personsHTML = null;

        if (this.state.showPersons) {
            personsHTML = (
                <div className="people">
                    {this.state.persons.map((guy, index) => {
                        return <Person key={guy.id} delClick={() => this.deletePersonHandler(index)}
                            name={guy.name}
                            age={guy.age}
                            changed={(event) => this.nameChangedHandler(event, guy.id)} />
                    })}
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
