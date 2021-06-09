import React from 'react'

import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button
            type={props.type || 'button'}
            className={`btn ${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button
