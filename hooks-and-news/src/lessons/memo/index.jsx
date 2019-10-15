import React, {useState} from 'react'

const Upper = React.memo(({children}) => {
    const [count, setCount] = useState(0)
    console.log('rendered', children)

    return (
        <div>
            <span >Uppercase version: </span>
            <span style={{color: 'red'}}>{children.toUpperCase()}{' '}</span>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
})

const Form = () => {
    const [first, setFirstName] = useState('')
    const [last, setLastName] = useState('')

    return (
        <div>
            <label htmlFor="first-name-input">First Name</label>
            <input
                id="first-name-input"
                onChange={e => setFirstName(e.target.value)}
            />
            <Upper>{first}</Upper>
            <label htmlFor="last-name-input">Last Name</label>
            <input
                id="last-name-input"
                onChange={e => setLastName(e.target.value)}
            />
            <Upper>{last}</Upper>
        </div>
    )
}

export default Form
