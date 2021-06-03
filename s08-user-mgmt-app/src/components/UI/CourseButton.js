const CourseButton = (props) => {
    return (
        <button
            className={`btn ${props.className}`}
            type={props.type || 'button'}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default CourseButton
