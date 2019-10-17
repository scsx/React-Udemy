import React from 'react';

const Person = (props) => {
    return (
        <div className="person">
            <p className="font-weight-bold">I'm { props.name } and I'm { props.age } years old!</p>
            {/* This paragraph will contain text or elements inside the cpt tag (parent cpt) called with props.children */}
            <p className="cursorpointer text-primary" onClick={props.myClick}>{ props.children }</p>

            <input onChange={props.changedName} value={props.name} className="form-control text-center" type="text" placeholder="Change my name (only for Lia)" />
        </div>
    )
};

export default Person;
