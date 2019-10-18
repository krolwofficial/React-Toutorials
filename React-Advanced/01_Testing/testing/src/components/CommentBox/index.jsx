import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'

const CommentBox = () => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(comment.trim() === '') return
                
        dispatch({
            type: 'SAVE_COMMENT',
            payload: comment
        })
        setComment('')
    }

    const handleClick = (e) => {

        axios.get("http://jsonplaceholder.typicode.com/comments")
            //.then(res => JSON.stringify(res))
            .then(res => res.data.map( comment => {
                return comment.name
            }))
            //.then(arr => console.log(arr))
            .then(arr => dispatch({
                type: 'FETCH_COMMENTS',
                payload: arr
            }))
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h4>Enter a Commit</h4>
                <textarea onChange={(e) => setComment(e.target.value)} value={comment} type="text" />
                <input type="submit" value="Submit"/>
            </form>
            <input onClick={() => handleClick()} type="button" value="Fetch"/>
        </>
    )
}

export default CommentBox
