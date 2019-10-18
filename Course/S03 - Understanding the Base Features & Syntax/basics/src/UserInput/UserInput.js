import React from 'react';

const userInput = (props) => {
    const classJustForFun = "form-control userinput";
    return <input onChange={props.nameHasChanged} className={classJustForFun} type="text" value={props.currentName} />;
};

export default userInput;
