import React from 'react';

const Person = (props) => {
    return (
        <li className="list-group-item person">
            <p className="font-weight-bold">I'm { props.name } and I'm { props.age } years old!</p>
            {/* This paragraph will contain text or elements inside the cpt tag (parent cpt) called with props.children */}
            <p className="cursorpointer text-primary" onClick={props.myClick}>{ props.children }</p>

            <input onChange={props.changedName} defaultValue={props.name} className="form-control form-control-sm text-center" type="text" placeholder="Change my name (only for Lia)" />
        </li>
    )
};

export default Person;
