// THIS  IS THE MAIN APP.JS FILE, AppFunctional WAS CREATED TO KEEP BOTH, AS IN THE COURSE WAS TO BE CONVERTED TO functional component
import React, { Component } from 'react';
import './css/App.css';
import './css/exercise.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class Exercise extends Component {

    state = {
        username: 'Supermaxi'
    }

    nameFromInputHandler = (event) => {
        // console.log(this.state.username.anchor);
        this.setState({
            username: event.target.value
        });
    }

    render() {
        return (
            <div className="exercise card">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <UserInput nameHasChanged={this.nameFromInputHandler} currentName={this.state.username} />
                            {/* <button onClick={this.nameFromInputHandler} type="button">CLICK ME</button> */}
                        </div>
                        <div className="col">
                            <UserOutput userName={this.state.username} />
                            <UserOutput userName="Rod" />
                            <UserOutput userName="Ted" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Exercise;
