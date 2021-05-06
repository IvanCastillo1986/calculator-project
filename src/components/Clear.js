import React from 'react'

function Clear(props) {
    return (
        <button onClick={props.handleClear} className='Clear'>AC</button>
    )
}

export default Clear