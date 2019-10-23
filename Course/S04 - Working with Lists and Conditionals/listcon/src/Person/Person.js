import React from 'react';
import Radium from 'radium';

const person = ( props ) => {

    const mediaStyle = {
        '@media (max-width: 500px)': {
            background: 'green'
        }
    }


    // error to test section 6
    /*
    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error('There was an error');
    }
    */

    return (
        <div className="person" style={mediaStyle}>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <button className="btn btn-outline-primary" onClick={props.delClick}>Delete me</button>
            <p>{props.children}</p>
            <input className="form-control" type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    )
};

export default Radium(person);
