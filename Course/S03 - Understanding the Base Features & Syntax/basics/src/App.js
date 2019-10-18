// THIS  IS THE MAIN APP.JS FILE, AppFunctional WAS CREATED TO KEEP BOTH, AS IN THE COURSE WAS TO BE CONVERTED TO functional component
import React, { Component } from 'react';
import './css/App.css';
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
        console.log(event);
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 22 },
                { name: 'Tomasson', age: 42 }
            ]
        });
    }

    render() {
        // inline styles
        const myStyle = {
            color: 'gold',
            fontWeight: 700
        }

        return (
            <div className="App">
                <div className="card text-white bg-dark">
                    <div className="card-header">
                        <h1 className="font-weight-bold">App.js</h1>
                    </div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">This is app.js as Class-based component</h6>

                        <ul className="list-group list-group-flush mb-4">
                            <li className="list-group-item bg-success">
                                <h2 className="font-weight-bold">Team: {this.state.team}</h2>
                            </li>
                            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

                            {/* The text "Change the next input..." will be rendered by Person.js with { props.children } */}
                            <Person changedName={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>
                                <small>Change the next input to see two-way binding</small>
                            </Person>

                            {/* Passing Method References Between Components (myClick) */}
                            <Person myClick={this.switchNameHandler.bind(this, 'Maximilian Bind')} name={this.state.persons[2].name} age={this.state.persons[2].age}>Click me to call switchNameHandler()</Person>

                        </ul>

                        <button onClick={ () => this.switchNameHandler('Maximilian Arrow') } type="button" className="btn btn-primary">See full names</button>

                        <div className="mt-4">
                            <code style={myStyle}>{ JSON.stringify(this.state) }</code>
                        </div>
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
