import React from 'react';

const userOutput = (props) => {
    return (
        <div className="useroutput">
            <p>User: {props.userName}</p>
            <p>I won't last long</p>
        </div>
    );
};

export default userOutput;
