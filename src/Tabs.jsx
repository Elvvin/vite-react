import React, { useState } from 'react'

const Tabs = () => {

    const [count, setCount] = useState(0)
    const allButtons = ['one', 'two', 'three']
    return (
        <>
        <div>
            {
                allButtons.map((btn, i) => <button key={i} onClick={() => setCount(i)}> {btn} </button>)
            }
        </div>
        <div>
            {allButtons[count]}
        </div>
        </>
    )
}

export default Tabs
