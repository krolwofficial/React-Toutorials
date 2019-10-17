import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

const CommentBox = () => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(comment.trim() === '') return
                
        dispatch({
            type: 'TEST_ACTION',
            payload: comment
        })
        setComment('')
    }

    return (
            <form onSubmit={(e) => handleSubmit(e)}>
                <h4>Enter a Commit</h4>
                <textarea onChange={(e) => setComment(e.target.value)} value={comment} type="text" />
                <input type="submit" value="Submit"/>
            </form>
    )
}

export default CommentBox