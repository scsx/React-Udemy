const CourseCard = (props) => {
    return (
        <div className={`coursecard ${props.className}`}>
            {props.children}
        </div>
    )
}

export default CourseCard
