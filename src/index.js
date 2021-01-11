import React from "react"
import { render } from 'react-dom';
import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers"
import { Provider } from "react-redux"
import CountApp from "./containers/CountApp"
import thunk from "redux-thunk"

const middlewares = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

render(
  <Provider store={store}>
    <CountApp />
  </Provider>
  , document.getElementById("root"))
