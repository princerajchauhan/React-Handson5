import React from 'react'
import HOC from './HOC'

const ClickCounter = (props) => {
    
    
    return (
        <>
            <h2 style={{color: 'green'}}>ClickCount : {props.count}</h2>
            <button onClick={props.handleIncrement} style={props.btnStyle}>Increment</button>
            <button onClick={props.handleDecrement} style={props.btnStyle}>Decrement</button>
        </>
    )
}

export default HOC(ClickCounter)