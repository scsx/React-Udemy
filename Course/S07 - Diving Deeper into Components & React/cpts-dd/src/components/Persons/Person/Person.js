import React from 'react';

const person = (props) => {

    return (
        <div className="person">
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <button className="btn btn-outline-primary" onClick={props.delClick}>Delete me</button>
            <p>{props.children}</p>
            <input className="form-control" type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    )
};

export default person;
