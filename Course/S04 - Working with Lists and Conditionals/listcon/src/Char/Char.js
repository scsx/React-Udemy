import React from 'react';

const char = (props) => {
    return (
        <span className="badge badge-info" onClick={props.clickedToDelete}>{props.character}</span>
    )
};

export default char;
