import { connect } from "react-redux"
import CountApp from "../component/CountApp"
import { plus, minus, asyncPlus, changeTitle } from "../actions"

//CountApp内でprops.numberで呼び出せる
const mapStateToProps = state => {
  return {
    number: state.numbers,
    day: state.day,
    title: state.title
  }
}

//CountApp内でprops.plus、plops.minusで呼び出せる
const mapDispatchToProps = dispatch => {
  return {
    plus: num => dispatch(plus(num)),
    minus: num => dispatch(minus(num)),
    asyncPlus: num => dispatch(asyncPlus(num)),
    changeTitle: () => dispatch(changeTitle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountApp)
