import { useState } from 'react'

function Counter(){

    const [count, setCount] = useState(0)

    function increaseCounter(){
        setCount(count + 1)
    }

    function decreaseCounter(){
        setCount(count - 1)
    }

    return(
        <div style={{backgroundColor: 'white'}}>
            <button onClick={increaseCounter}>+</button>
            {count}
            <button onClick={decreaseCounter}>-</button>
        </div>
    )
}

export default Counter