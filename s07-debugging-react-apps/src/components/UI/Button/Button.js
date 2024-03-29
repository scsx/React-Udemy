import React from 'react'

const Button = (props) => {
    return (
        <button
            type={props.type}
            className='button btn'
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button
