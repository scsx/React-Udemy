import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium'; // StyleRoot only for media-queries
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
        // const currentPersons = this.state.persons; // this deletes from state, bad practice
        const currentPersons = [...this.state.persons]; // this way we make a copy
        currentPersons.splice(personIndex, 1);
        this.setState({persons: currentPersons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        // (a) spread operator has been used in arrays but works also for a single object:
        const person = {
            ...this.state.persons[personIndex]
        };
        // (b) alternative syntax:
        // const person = Object.assign({}, this.state.persons[personIndex]);

        // now this is a copy and can be changed:
        person.name = event.target.value;
        // more copy, change and write safelly
        const personsCopy = [...this.state.persons];
        personsCopy[personIndex] = person;
        this.setState({
            persons: personsCopy
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        // this merges with the current state
        this.setState({showPersons: !doesShow});
    }

    render() {

        let personsHTML = null;
        const buttonStyle = {
            backgroundColor: 'pink',
            borderColor: 'red',
            ':hover': {
                backgroundColor: 'grey'
            }
        }

        let dynamicClasses = []; // bootstrap classes
        if (this.state.persons.length <= 2) {
            dynamicClasses.push('font-weight-bold ')
        }
        if (this.state.persons.length <= 1) {
            dynamicClasses.push('text-white bg-dark')
        }

        if (this.state.showPersons) {
            personsHTML = (
                <div className="people">

                    {this.state.persons.map((guy, index) => {
                        // !! To test ErrorBoundary (now assumes the key)
                        /*
                        return <ErrorBoundary key={guy.id}><Person delClick={() => this.deletePersonHandler(index)}
                            name={guy.name}
                            age={guy.age}
                            changed={(event) => this.nameChangedHandler(event, guy.id)} />
                        </ErrorBoundary>
                        */

                        return <Person key={guy.id} delClick={() => this.deletePersonHandler(index)}
                            name={guy.name}
                            age={guy.age}
                            changed={(event) => this.nameChangedHandler(event, guy.id)} />
                    })}
                </div>
            );
            // this is just javascript actually:
            buttonStyle.backgroundColor = 'orange';
            buttonStyle.borderColor = 'black';
            buttonStyle[':hover'] = {
                backgroundColor: 'black'
            }
        }

        return (
            <StyleRoot>{/* radium */}
                <div className="App">
                    <h1 className={dynamicClasses.join(' ')}>App.js</h1>
                    <button style={buttonStyle} className="btn btn-success mt-4" onClick={this.togglePersonsHandler}>Toggle Persons</button>

                    {personsHTML}

                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
