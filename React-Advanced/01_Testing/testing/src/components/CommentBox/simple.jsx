import React from 'react'

const CommentBox = () => {
    const [comment, setComment] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(comment.trim() === '') return

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
