// import React, { Component } from 'react'

// export default class DisplayValue extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>{this.props.displayValue}</h2>
//             </div>
//         )
//     }
// }

import React from 'react'

export default function DisplayValue(props) {

        return (
            <div className='DisplayValue'>
            <h2>Input: {props.displayValue}</h2>
            </div>
        )
}
