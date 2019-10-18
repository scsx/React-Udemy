import React from 'react';

const person = ( props ) => {
    return (
        <div className="person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input className="form-control" type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    )
};

export default person;
