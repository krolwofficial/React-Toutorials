import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

const CommentBox = () => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(comment.trim() === '') return
        
        console.log(comment);
        
        dispatch({
            type: 'TEST_ACTION',
            payload: comment
        })
        setComment('')
    }

    return (
            <form onSubmit={(e) => handleSubmit(e)}>
                Enter a Commit
                <input onChange={(e) => setComment(e.target.value)} value={comment} type="text" />
                <input type="submit" value="Submit"/>
            </form>
    )
}

export default CommentBox
