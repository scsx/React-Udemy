import CourseCard from './CourseCard'
import CourseButton from './CourseButton'

const ErrorModal = (props) => {
    return (
        <div className='modalbox' onClick={props.onConfirm}>
            <div className='coursemodal'>
                <CourseCard>
                    <h5>{props.title}</h5>
                    <p>{props.message}</p>
                    <p>Click anywhere to dismiss</p>
                    <CourseButton
                        className='btn-success'
                        onClick={props.onConfirm}>
                        Okay
                    </CourseButton>
                </CourseCard>
            </div>
        </div>
    )
}

export default ErrorModal
