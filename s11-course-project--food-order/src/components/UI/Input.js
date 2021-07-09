import React from 'react'

const Input = React.forwardRef((props, ref) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.input.id} className='form-label'>
                {props.label}
            </label>
            <input ref={ref} {...props.input} />
        </div>
    )
})

export default Input
