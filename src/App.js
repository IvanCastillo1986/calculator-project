import React from 'react'
import './App.css';
import DisplayValue from './components/DisplayValue'
import Result from './components/Result'
import PosNeg from './components/PosNeg'
import Number from './components/Number'
import Operations from './components/Operations'
import Clear from './components/Clear'
import Equals from './components/Equals'

// Stopped watching Jimmy's recording at 35:00


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      displayValue: '0',
      previousValue: '',
      operation: '', // this should recieve the value from <Operations />
      result: 0,
    }
  }

  handleClick = (e) => {
    const {value} = e.target
    let displayValue = this.state.displayValue
    
    this.setState({
      displayValue: displayValue.concat(value)
    })
    
  }

  handleMethodClick = (e) => {
    const {displayValue} = this.state
    this.setState({
      previousValue: displayValue,
      operation: e.target.value,
      displayValue: ''
    })
    console.log('Im being clicked')
  }

  handleCalculate = (e) => {
    const {displayValue, previousValue, operation} = this.state
    const displayNum = parseInt(displayValue)
    const previousNum = parseInt(previousValue)

    if (operation === '+') {
      this.setState({
        result: previousNum + displayNum,
        displayValue: '0'
      })
    }
    else if (operation === '-') {
      this.setState({
        result: previousNum - displayNum,
        displayValue: '0'
      })
    }
    else if (operation === 'x') {
      this.setState({
        result: previousNum * displayNum,
        displayValue: '0'
      })
    }
    else if (operation === '÷') {
      this.setState({
        result: previousNum / displayNum,
        displayValue: '0'
      })
    }
    // This goes on the equal sign. It will:
      // read the numbers within the input
      // apply the operation method to those numbers
        // the methods will be 'add', 'subtract', 'multiply', 'divide'
      // display the calculated number in this.state.result with setState()
  }

  render() {
    const {displayValue, previousValue, operation, result} = this.state

    return (
      <div className='Calculator'>

        <section className='Results-container'>
          <DisplayValue displayValue={displayValue} />
          <Result result={result} />
        </section>
        <section className='Top-container'>
          <Clear />
          <PosNeg />
        </section>
        <section className='Numbers-container'>
          <Number value={1} handleClick={this.handleClick} />
          <Number value={2} handleClick={this.handleClick} />
          <Number value={3} handleClick={this.handleClick} />
          <Number value={4} handleClick={this.handleClick} />
          <Number value={5} handleClick={this.handleClick} />
          <Number value={6} handleClick={this.handleClick} />
          <Number value={7} handleClick={this.handleClick} />
          <Number value={8} handleClick={this.handleClick} />
          <Number value={9} handleClick={this.handleClick} />
          <Number value={0} handleClick={this.handleClick} />
          <Number value='.' handleClick={this.handleClick} />
        </section>
        <section className='Operations-container'>
          <Operations value='+' handleMethodClick={this.handleMethodClick} />
          <Operations value='-' handleMethodClick={this.handleMethodClick} />
          <Operations value='x' handleMethodClick={this.handleMethodClick} />
          <Operations value='÷' handleMethodClick={this.handleMethodClick} />
        </section>
        <section className='Equals-container'>
          <Equals handleCalculate={this.handleCalculate} />
        </section>

      </div>
    )
  }
}

export default App;
