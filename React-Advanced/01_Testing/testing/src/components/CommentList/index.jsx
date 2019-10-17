import React from 'react'
import {useSelector} from 'react-redux'

const CommentList = () => {
    const comments = useSelector(state => state.box)

    return (
        <ul>
            {
                comments.map(comment => (
                    <li key={comment.id}>{comment.text}</li>
                ))
            }
        </ul>
    )
}

export default CommentList
