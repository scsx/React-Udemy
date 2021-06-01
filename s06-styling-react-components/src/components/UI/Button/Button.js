import React from 'react'
import styled from 'styled-components'

import './Button.css'

const Button = styled.button`
    font: inherit;
    height: 5rem;
    width: 5rem;
    border: none;
    color: white;
    background: #0f3ca0;
    cursor: pointer;
    border-radius: 50%;
    margin-top: 1rem;

    &:focus {
        outline: none;
    }

    &:hover,
    &:active {
        background: #09286f;
    }
`
/* const Button = (props) => {
    return (
        <button type={props.type} className='button' onClick={props.onClick}>
            {props.children}
        </button>
    )
} */

export default Button
