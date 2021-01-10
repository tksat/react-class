import React from "react"
import { createStore } from "redux"

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'PLUS':
      return state + action.payload.num;
    case 'MINUS':
      return state - action.payload.num
    default:
      return state
  }
}

const store = createStore(reducer)

store.dispatch({ type: 'PLUS', payload: { num: 5 } })

class CountApp extends React.Component {
  constructor() {
    super()
  }

  render() {
    console.log(store.getState())
    return (
      <>sample</>
    )
  }
}

export default CountApp
