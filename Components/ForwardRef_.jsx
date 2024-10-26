import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
    const Input = forwardRef((props, ref) => {
        return <input type='text' ref={ref} {...props}/>
    })

export default Input