import React from 'react'

function Number(props) {
    const value = props.value
    
    return (
        <button className="Number" value={value} onClick={props.handleClick}>
            {value}
        </button>
    )
}

export default Number