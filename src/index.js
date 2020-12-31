import React from 'react';
import { render } from 'react-dom';
import style from "./style.css"

class H2o extends React.Component {
  constructor(props) {
    super(props)
    this.state = { temp: 15 }
  }

  onPlusClick = () => { this.setState({ temp: this.state.temp + 1 }) }
  onMinusClick = () => { this.setState({ temp: this.state.temp - 1 }) }
  onPlus10Click = () => { this.setState({ temp: this.state.temp + 10 }) }
  onMinus10Click = () => { this.setState({ temp: this.state.temp - 10 }) }

  H2oState = (temp) => {
    if (temp > 60) {
      return "steam"
    } else if (temp < -3) {
      return "ice"
    } else {
      return "water"
    }
  }

  render() {
    return (
      <>
        <h1 className={this.H2oState(this.state.temp)}>温度：{this.H2oState(this.state.temp)} {this.state.temp}</h1>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onPlus10Click}>+10</button>
        <button onClick={this.onMinus10Click}>-10</button>
      </>
    )
  }
}

render(<H2o />, document.getElementById('root'));
