// THIS FILE WAS CREATED TO KEEP app.js INTACT, AS IN THE COURSE WAS TO BE CONVERTED TO functional component
import React, { useState } from 'react';
import Person from './Person/Person';

const AppFunctional = (props) => {

    // THIS HOOK (useState) IS THE SAME AS state IN CLASS-BASED app.js
    // array destructuring:
    const [personsState, setPersonsState] = useState({ // use state returns 2 items: state and function to manage state
        persons: [
            { name: 'Bob', age: 28 },
            { name: 'Mia', age: 52 },
            { name: 'Sam', age: 22 }
        ],
        team: 'Bears'
    });

    // we can use useState() as many times as wanted
    const [teamState, setTeamState] = useState('Hogs');

    // this function (useState 2nd item) needs to rewrite entire state (1)
    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Robert', age: 28 },
                { name: 'Marianna', age: 52 },
                { name: 'Samantha', age: 22 }
            ],
            team: 'Bears' // (1) if we didn't write this here again it would be lost
        });
    }

    return (
        <div className="App">
            <div className="card bg-light">
                <div className="card-header">
                    <h1 className="font-weight-bold">AppFunctional.js</h1>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">This is app.js as Functional component</h6>

                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item bg-success">
                            <h2 className="font-weight-bold">Team: {personsState.team}</h2>
                        </li>
                        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
                        {/* Passing Method References Between Components: */}
                        <Person myClick={switchNameHandler} name={personsState.persons[1].name} age={personsState.persons[1].age}>
                            Click me to call switchNameHandler()</Person>
                        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
                    </ul>

                    <button onClick={switchNameHandler} type="button" className="btn btn-primary">See full names</button>

                    <div className="mt-4">
                        <code>{ JSON.stringify(personsState) }</code>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppFunctional;
