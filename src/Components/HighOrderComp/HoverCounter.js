import React from 'react'
import HOC from './HOC'

const HoverCounter = (props) =>{
    return(
        <>
            <h2 style={{color: 'tomato'}}>Hover Count : {props.count}</h2>
            <button onMouseOver={props.handleIncrement} style={props.btnStyle}>Increment</button>
            <button onMouseOver={props.handleDecrement} style={props.btnStyle}>Decrement</button>
        </>
    )
}

export default HOC(HoverCounter)