import React from "react"
import { render } from 'react-dom';
import { createStore } from "redux"
import { Provider } from "react-redux"
import CountApp from "./CountApp"

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

render(
  <Provider store={store}>
    <CountApp />
  </Provider>
  , document.getElementById("root"))
