import React from 'react'

function Operations(props) {
    const value = props.value

    return (
        <button className='Operations' value={value} onClick={props.handleClick}>
            {value}
        </button>
    )
}

export default Operations