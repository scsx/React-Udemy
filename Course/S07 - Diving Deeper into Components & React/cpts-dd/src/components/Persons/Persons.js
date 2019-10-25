import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    // removed because there's no inital state to begin with
    /* static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle: [Persons.js] getDerivedStateFromProps')
        return state;
    } */

    // removed because of PureComponent
    /* shouldComponentUpdate(nextProps, nextState) {
        console.log('Lifecycle: [Persons.js] shouldComponentUpdate')
        if (nextProps.persons !== this.props.persons) {
            console.log('Lifecycle: [Persons.js] shouldComponentUpdate? TRUE')
            return true;
        } else {
            return false;
        }
    } */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle: [Persons.js] getSnapshotBeforeUpdate');
        return {someMessage: 'Snapshot is here!'};
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Lifecycle: [Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('Lifecycle: [Persons.js] componentWillUnmount');
    }

    render() {
        // this will return multiple els not wrapped in a div but it's ok b/c it's v16 and it's a list
        return this.props.persons.map((guy, index) => {
            console.log('Lifecycle: [Persons.js] rendering... (click toggle to see again)')

            return <Person key={guy.id}
                delClick={() => this.props.clickDelete(index)}
                name={guy.name}
                age={guy.age}
                changed={(event) => this.props.changeName(event, guy.id)} />
        })

    }

}

export default Persons;
