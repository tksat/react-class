import React from "react"
import { connect } from "react-redux"
import CountApp from "../component/CountApp"

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
