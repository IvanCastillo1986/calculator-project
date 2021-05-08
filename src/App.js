import React from 'react'
import './App.css';
import DisplayValue from './components/DisplayValue'
import Result from './components/Result'
import PosNeg from './components/PosNeg'
import Number from './components/Number'
import Operations from './components/Operations'
import Clear from './components/Clear'
import Equals from './components/Equals'



class App extends React.Component {
  constructor() {
    super()

    this.state = {
      displayValue: '0',
      previousValue: '',
      operation: '',
      result: '0',
    }
  }


  commafy = (num) => {
    const str = String(num)
    const splitNum = str.split('')
    for (let i = splitNum.length - 4; i > -1; i = i - 3) {
      splitNum[i] = splitNum[i] + ','
    }
    return splitNum.join('')
  }
  handleClick = (e) => {
    const {value} = e.target
    let displayValue = this.state.displayValue
  
    if (this.state.displayValue === '0') {
      this.setState({
        displayValue: value
      })
    } else {
      this.setState({
        displayValue: displayValue + value
      })
    }
  }

  handleMethodClick = (e) => {
    const {displayValue} = this.state
    this.setState({
      previousValue: displayValue,
      operation: e.target.value,
      displayValue: ''
    })
  }
  handleClear = () => {
    this.setState({
      displayValue: '0',
      previousValue: '',
      result: '0',
    })
  }
  handleNegative = () => {
    const {displayValue} = this.state
    this.setState({
      displayValue: displayValue - (displayValue * 2)
    })
  }

  handleCalculate = () => {
    const {displayValue, previousValue, operation} = this.state
    const displayNum = parseFloat(displayValue)
    const previousNum = parseFloat(previousValue)

    if (operation === '+') {
      const result = previousNum + displayNum

      this.setState({
        result: result,
        displayValue: '0'
      })
    }
    else if (operation === '-') {
      const result = previousNum - displayNum

      this.setState({
        result: result,
        displayValue: '0'
      })
    }
    else if (operation === 'x') {
      const result = previousNum * displayNum

      this.setState({
        result: result,
        displayValue: '0'
      })
    }
    else if (operation === '÷') {
      const result = parseInt(previousNum / displayNum)

      this.setState({
        result: result,
        displayValue: '0'
      })
    }
  }


  render() {
    const {displayValue, previousValue, operation, result} = this.state
    const displayVal = this.commafy(displayValue)
    const finalResult = this.commafy(result)

    return (
      <div className='Calculator'>

        <section className='Results-container'>
          <DisplayValue displayValue={displayVal} />
          <hr />
          <Result result={finalResult} />
        </section>
        <section className='Top-container'>
          <Clear handleClear={this.handleClear} />
          <PosNeg handleNegative={this.handleNegative} />
        </section>
        <section className='Numbers-container'>
          <Number value={'1'} handleClick={this.handleClick} />
          <Number value={'2'} handleClick={this.handleClick} />
          <Number value={'3'} handleClick={this.handleClick} />
          <Number value={'4'} handleClick={this.handleClick} />
          <Number value={'5'} handleClick={this.handleClick} />
          <Number value={'6'} handleClick={this.handleClick} />
          <Number value={'7'} handleClick={this.handleClick} />
          <Number value={'8'} handleClick={this.handleClick} />
          <Number value={'9'} handleClick={this.handleClick} />
          <Number value={'0'} handleClick={this.handleClick} />
          <Number value={'.'} handleClick={this.handleClick} />
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
