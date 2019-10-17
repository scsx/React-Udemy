// THIS FILE WAS CREATED TO KEEP app.js INTACT, AS IN THE COURSE WAS TO BE CONVERTED TO functional component
import React, { useState } from 'react';
import Person from './Person/Person';

const AppFunctional = (props) => {

    // THIS HOOK (useState) IS THE SAME AS state IN CLASS-BASED app.js
    // array destructuring:
    const [personsState, setPersonsState] = useState({ // use state returns 2 items: state and function to manage state
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Lia', age: 22 },
            { name: 'Tom', age: 42 }
        ],
        team: 'Wolves'
    });

    // we can use useState() as many times as wanted
    const [teamState, setTeamState] = useState('Hogs');

    console.log(personsState, teamState);

    // this function (useState 2nd item) needs to rewrite entire state (1)
    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Lianna', age: 22 },
                { name: 'Tomasson', age: 42 }
            ],
            team: 'Wolves' // (1) if we didn't write this here again it would be lost
        });
    }

    return (
        <div className="App">
            <div className="card">
                <div className="card-body">
                    <h1 className="font-weight-bold">AppFunctional.js</h1>
                    <p>This is app.js as Functional component</p>
                    <h2 className="font-weight-bold">Team: {personsState.team}</h2>

                    <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
                    {/* Passing Method References Between Components: */}
                    <Person myClick={switchNameHandler} name={personsState.persons[1].name} age={personsState.persons[1].age}>
                        Click me to call switchNameHandler()</Person>
                    <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

                    <button onClick={switchNameHandler} type="button" className="btn btn-primary">See full names</button>
                </div>
            </div>
        </div>
    );
}

export default AppFunctional;
