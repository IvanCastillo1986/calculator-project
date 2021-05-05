import React from 'react'

function Equals(props) {
    return (
        <div onClick={props.handleCalculate} className="Equals">
            <div>=</div>
        </div>
    )
}

export default Equals