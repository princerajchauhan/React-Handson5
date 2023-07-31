import React from "react";

class PureComp extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    btnStyle = {
        padding: "5px 8px",
        borderRadius: '5px',
        backgroundColor: 'black',
        color: 'white',
        marginRight: '5px',
        cursor: 'pointer'
    }
    render() {
        console.log("CheckRendering")
        return (
            <div style={{ width: '80%', margin: '20px auto', boxShadow:'0 0 5px 0 black', padding:'20px', backgroundColor:'lightgray' }}>
                <h2 style={{color:'Blue'}}>Pure Component</h2>
                <p style={{ marginTop: '-15px', marginBottom: '20px' }}> - PureComponent is similar to Component but it skips re-renders for same props and state.
                    Class components are still supported by React, but we don’t recommend using them in new code.
                </p>
                <p style={{ marginTop: '-15px', marginBottom: '20px' }}> - If state is not updating PureComponent will
                    Prevent from re-rendering.
                </p>
                <h3 style={{color:'red'}}>Count : {this.state.count}</h3>
                <div className="btn">
                    <button onClick={() => this.setState({ count: this.state.count + 1 })} style={this.btnStyle}>Increment</button>
                    <button onClick={() => this.setState({ count: this.state.count - 1 })} style={this.btnStyle}>Decrement</button>
                    <button onClick={() => this.setState({ count: this.state.count })} style={this.btnStyle}>Not Update</button>
                </div>
            </div>
        )
    }
}

export default PureComp