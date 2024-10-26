import { useState, useEffect } from 'react'

function Counter(){

    const [count, setCount] = useState(0)

    function incrementHandler(){
        setCount(count + 1)
    }

    function decrementHandler(){
        setCount(count - 1)
    }

    return (
        <>
            <div className="header" style={{backgroundColor: 'white'}}>
                <button onClick={incrementHandler}>+</button>
                {count}
                <button onClick={decrementHandler}>-</button>
            </div>
        </>
    )
}

function Timer(){

    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval)
    }, []);

    return <p>Keçən vaxt: {seconds} saniyə</p>
}

function CntrAndTmr(){
    const [showTimer, setShowTimer] = useState(true);

    return (
        <div style={{backgroundColor: 'white'}}>
            <Counter />
            <button onClick={() => setShowTimer(!showTimer)}>
                {showTimer ? "Vaxtlayıcını Gizlət" : "Vaxtlayıcını Göstər"}
            </button>
            {showTimer && <Timer />}
        </div>
    )
}

export default CntrAndTmr