import React from 'react'

function Result(props) {
    const result = props.result
    
    return (
        <div className="Result">
            <h2>Result:</h2> <h2>{result}</h2>
        </div>
    )
}

export default Result