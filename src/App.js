import React from 'react'
import './App.css';
import Input from './components/Input'
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
      input: '',
      result: 0,
      method: '', // this should recieve the value from <Operations />
      previousVal: '',
    }

    // this.value  // When I click a number button, that value is transferred into the input
    // When I click on an operator, that operator will perform an action on these values


  }

  handleClick = (e) => {
    // This will do a few things:
      // read the value of the number
      // input the value of that number into this.state.input
    const {value} = e.target
    

    this.setState({
      input: this.state.input.concat(value)
    })
    console.log(value)
  }

  handleMethodClick = (e) => {
    // This will:
      // Set the operation method in this.state.method with setState()
    this.setState({
      method: e.target.value
    })
  }

  handleCalculate = (e) => {
    // This goes on the equal sign. It will:
      // read the numbers within the input
      // apply the operation method to those numbers
        // the methods will be 'add', 'subtract', 'multiply', 'divide'
      // display the calculated number in this.state.result with setState()
  }

  render() {
    const {input, result, method} = this.state

    return (
      <div className='Calculator'>

        <section className='Results-container'>
          <Input input={input} />
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
          <Operations value='+' handleClick={this.handleClick} />
          <Operations value='-' handleClick={this.handleClick} />
          <Operations value='x' handleClick={this.handleClick} />
          <Operations value='÷' handleClick={this.handleClick} />
        </section>
        <section className='Equals-container'>
          <Equals />
        </section>

      </div>
    )
  }
}

export default App;
