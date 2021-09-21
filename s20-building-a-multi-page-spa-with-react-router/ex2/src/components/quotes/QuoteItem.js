import { Link } from 'react-router-dom'
import classes from './QuoteItem.module.css'

const QuoteItem = (props) => {

    return (
        <li className={classes.item}>
            <figure>
                <blockquote className='cinzel'>
                    <p>{props.text}</p>
                </blockquote>
                <figcaption>{props.author}</figcaption>
            </figure>
            <Link to={`/quotes/${props.id}`} className='btn btn-sm btn-info'>View</Link>
        </li>
    )
}

export default QuoteItem
