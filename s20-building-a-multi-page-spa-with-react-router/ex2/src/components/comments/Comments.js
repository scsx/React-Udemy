import { useState } from 'react'
import NewCommentForm from './NewCommentForm'

const Comments = () => {
    const [isAddingComment, setIsAddingComment] = useState(false)

    const startAddCommentHandler = () => {
        setIsAddingComment(true)
    }

    return (
        <section className='comments'>
            <h5 className='cinzel'>User Comments</h5>
            <ul className='list-group'>
                <li className='list-group-item'>Tive o grato prazer de conversar alguns minutos com JPB em Dezembro último</li>
                <li className='list-group-item'>Que grandes prazeres me dão estes teus artigos tão verdadeiros e comoventes! Abraço</li>
                <li className='list-group-item'>Só para gente fina e erudita: Χάρηκα που τα είπαμε</li>
            </ul>
            {!isAddingComment && (
                <button
                    className='btn btn-sm btn-info mt-3'
                    onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && <NewCommentForm />}
        </section>
    )
}

export default Comments
