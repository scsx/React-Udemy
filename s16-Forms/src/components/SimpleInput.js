const SimpleInput = (props) => {
    return (
        <form>
            <div className='input-group input-group-lg mb-3'>
                <input
                    type='text'
                    className='form-control'
                    placeholder="Recipient's username"
                    id='name'
                />
                <button
                    className='btn btn-primary'
                    type='submit'
                    id='button-addon2'>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default SimpleInput
