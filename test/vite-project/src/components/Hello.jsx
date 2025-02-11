import React, {useState} from 'react'

function Hello(){
    const [count, setCount]=useState(0)

    function incrementCount(){
        setCount(count+1);
    }

    function decrementCount(){
        setCount(count-1);
    }

    return (
        <div>
        <h1> count: {count}</h1>

        <button onClick={incrementCount}>increment</button>
        <button onClick={decrementCount}>decrement</button>
        </div>
    )
}

export default Hello;