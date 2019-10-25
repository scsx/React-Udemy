import React, { Component } from 'react';
import '../css/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

// simulate imported classes from CSS in Udemy
const classForHoc = "withclass";

class App extends Component {

    constructor(props) {
        super(props);
        console.log('Lifecycle: [App.js] constructor');
        // this.state = {persons ...} could be here;
    }

    state = {
        persons: [
            {id: 0, name: 'Max', age: 28},
            {id: 1, name: 'Manu', age: 29},
            {id: 2, name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: true,
        showCockpit: true,
        nameChangeCounter: 0,
        authenticated: false
    }

    returnClass() {
        return this.state.cssClass;
    }

    static getDerivedStateFromProps(state, props) {
        console.log('Lifecycle: [App.js] getDerivedStateFromProps' + props);
        return state;
    }

    componentDidMount() {
        console.log('Lifecycle: [App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Lifecycle: [App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('Lifecycle: [App.js] componentDidUpdate');
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
        // updating state when it depends on a previous state - which might be outdated
        // use as function and return new state:
        this.setState( (oldState, props) => {
            return {
                persons: personsCopy,
                nameChangeCounter: oldState.nameChangeCounter + 1
            }
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    fakeLoginHandler =() => {
        this.setState({authenticated: true});
    }

    render() {
        console.log('Lifecycle: [App.js] render')
        let personsHTML = null;
        if (this.state.showPersons) {
            personsHTML =
            <div className="people">
                <Persons
                persons={this.state.persons}
                clickDelete={this.deletePersonHandler}
                changeName={this.nameChangedHandler}
                isAuthenticatedAppJs={this.state.authenticated} />
            </div>
        }
        return (
            // HOC
            <Aux>
                <div className="App">
                    <button type="button"
                    className="btn btn btn-outline-secondary"
                    onClick={()=>{this.setState({showCockpit: !this.state.showCockpit})}}>Toggle cockpit</button>

                    {/* AuthContext.Provider shall wrap ALL PARTS that need it's context */}
                    <AuthContext.Provider value={
                        {
                            authenticated: this.state.authenticated,
                            fakeLogin: this.fakeLoginHandler
                        }
                    }>
                        {this.state.showCockpit ? (
                            <Cockpit
                            appTitleToCockpit={this.props.appTitle}
                            personsLength={this.state.persons.length}
                            showPersons={this.state.showPersons}
                            clickShowPersons={this.togglePersonsHandler} />
                        ) : null }

                        {personsHTML}
                    </AuthContext.Provider>
                </div>
            </Aux>
        );
    }
}

export default withClass(App, classForHoc);
