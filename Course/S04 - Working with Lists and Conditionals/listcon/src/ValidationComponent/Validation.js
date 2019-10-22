import React from 'react';

const validation = ( props ) => {
    return (
        <div className="val">
            {
                props.inputLength > 5 ?
                    <p className="text-success">Text long enough</p>
                :
                    <p className="text-danger">Text too short</p>
            }
        </div>
    )
};

export default validation;
