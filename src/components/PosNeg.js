import React from 'react'

function PosNeg(props) {
    return (
        <button className='PosNeg' onClick={props.handleNegative}>+/-</button>
    )
}

export default PosNeg