import { useRef } from 'react'
import ForwardRef_ from '/Components/ForwardRef_.jsx'

function UseRef_(){

    const inputRef = useRef()
    const focusInput = () => {
        inputRef.current.focus()
    }

    return(
        <>
        <input type='text' ref={inputRef} />
        <button onClick={focusInput}>Focus</button>
        <ForwardRef_ ref={inputRef} />
        </>
    )
}

export default UseRef_