import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

// simulate imported classes from CSS in Udemy
const classForHoc = "withclass";

class Person extends Component {

    constructor(props) {
        super(props);
        this.myElementRef = React.createRef();
    }

    // static means it can be accessed from the outside without instantiating the Person Class
    static contextType = AuthContext;

    componentDidMount() {
        // this.myNewClassProperty.classList.add("addedByRef"); // Ref method 1
        this.myElementRef.current.classList.add("addedByRef"); // Ref method 2

        console.log(this.context.authenticated);
    }

    render() {
        console.log('Lifecycle: [Person.js] rendering... (click toggle to see again)')
        // NORMAL
        /* return (
            <div className="person">
                <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <button className="btn btn-outline-primary" onClick={this.props.delClick}>Delete me</button>
                <p>{this.props.children}</p>
                <input className="form-control" type="text" onChange={this.props.changed} defaultValue={this.props.name} />
            </div>
        ) */
        // HOC
        return (
            <Aux>
                {/* "simple context use"
                <AuthContext.Consumer>
                    {myContext => myContext.authenticated ? <p>Logged in</p> : <p>Please login</p> }
                </AuthContext.Consumer>
                */}
                {/* context used from property */}
                {this.context.authenticated ? <p>Logged in</p> : <p>Please login</p> }


                <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <button className="btn btn-outline-primary" onClick={this.props.delClick}>Delete me</button>
                <p>{this.props.children}</p>
                <input
                // ref={(myInput) => { this.myNewClassProperty = myInput }}
                ref={this.myElementRef}
                className="form-control"
                type="text"
                onChange={this.props.changed}
                defaultValue={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    delClick: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classForHoc);
