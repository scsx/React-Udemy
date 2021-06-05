import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`btn ${classes.button}`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
