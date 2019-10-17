// THIS  IS THE MAIN APP.JS FILE, AppFunctional WAS CREATED TO KEEP BOTH, AS IN THE COURSE WAS TO BE CONVERTED TO functional component
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    // name is reserved
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Lia', age: 22 },
            { name: 'Tom', age: 42 }
        ],
        team: 'Wolves'
    }

    switchNameHandler = (newName) => {
        // this.state.persons[1].name = "Dora"; // Dont do this!
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Lianna', age: 22 },
                { name: 'Tomasson', age: 42 }
            ]
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 22 },
                { name: 'Tomasson', age: 42 }
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <div className="card">
                    <div className="card-body">
                        <h1 className="font-weight-bold">App.js</h1>
                        <p>This is app.js as Class-based component</p>
                        <h2 className="font-weight-bold">Team: {this.state.team}</h2>

                        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

                        {/* The text My hobbies... will be rendered by Person.js with { props.children } */}
                        <Person changedName={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Racing</Person>

                        {/* Passing Method References Between Components (myClick) */}
                        <Person myClick={this.switchNameHandler.bind(this, 'Maximilian Button')} name={this.state.persons[2].name} age={this.state.persons[2].age}>Click
                            me to call switchNameHandler()</Person>

                        <button onClick={ () => this.switchNameHandler('Maximilian Arrow') } type="button" className="btn btn-primary">See full names</button>
                    </div>
                </div>
            </div>
        );

        // this jsx will be converted to this, which is valid code:
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m here!'));
        // follows (element, object, text/children)
    }
}

export default App;
