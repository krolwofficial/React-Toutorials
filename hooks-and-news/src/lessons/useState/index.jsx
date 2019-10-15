import React, {useState, useEffect} from 'react'

const useCounter = ({initialState, step}) => {
    const [count, setCount] = useState(initialState)
    const increment = () => setCount(count + step);
    return {count, increment}
}

const Component = () => {
    // 1. We make it a function so this code only runs when the Component is rendered initially
    // 2. The initialCount is a function so it will only call when it renders the first time
    // not within every render
    const initialCount = () => Number(window.localStorage.getItem('count')) || 0
    const {count, increment} = useCounter({initialState: initialCount, step: 1})

    // we want to update the localStorage when the {count} changes specifically
    // not every time when the component re renders every other reason
    useEffect(() => {
        window.localStorage.setItem('count', count)
    }, [count])

    return <button onClick={increment}>{count}</button>
}

export default Component
