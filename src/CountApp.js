import React from "react"
import { connect } from "react-redux"

//ファンクショナルコンポーネントでpropsのみ受け取る場合は
// const CountApp = ({ number, plus, minus }) => {

class CountApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { num: null }
  }

  handleChange = e => {
    const num = Number(e.target.value)
    this.setState({ num })
  }

  stateReset = () => this.setState({ num: 0 })

  render() {
    const { number, plus, minus } = this.props

    const handlePlusClick = () => {
      plus(this.state.num)
      this.stateReset()
    }

    const handleMinusClick = () => {
      minus(this.state.num)
      this.stateReset()
    }
    return (
      <>
        <h2>{number}</h2>
        <input type="text" value={this.state.num} onChange={this.handleChange} />
        <button onClick={handlePlusClick}>+</button>
        <button onClick={handleMinusClick}>-</button>
      </>
    )
  }
}

//CountApp内でprops.numberで呼び出せる
const mapStateToProps = state => {
  return { number: state }
}

//CountApp内でprops.plus、plops.minusで呼び出せる
const mapDispatchToProps = dispatch => {
  return {
    plus: num => { dispatch({ type: 'PLUS', payload: { num: num } }) },
    minus: num => { dispatch({ type: 'MINUS', payload: { num: num } }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountApp)
