import React, { useState } from "react";

const HOC = (WrappedComponent) => {
    function Hoc(){
        const [count, setCount] = useState(0)

        const handleIncrement = () =>{
            setCount(count + 1)
        }

        const handleDecrement = () =>{
            setCount(count - 1)
        }

        const btnStyle = {
            padding: "5px 8px",
            borderRadius: '5px',
            backgroundColor: 'black',
            color: 'white',
            marginRight: '5px',
            cursor: 'pointer'
        }

        return(
            <WrappedComponent count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} btnStyle={btnStyle} />
        )
    }

    return Hoc;
}

export default HOC