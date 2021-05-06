import React from 'react'

function Result(props) {
    const result = props.result
    
    return (
        <div className="Result">
            <h2>Result: {result}</h2>
        </div>
    )
}

export default Result