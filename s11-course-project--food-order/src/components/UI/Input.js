const Input = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.input.id} className='form-label'>
                {props.label}
            </label>
            <input
                type='number'
                className='form-control'
                {...props.input}
            />
        </div>
    )
}

export default Input
