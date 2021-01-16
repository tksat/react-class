import React from "react"
import ImageList from "../containers/ImageList"
import Serch from "../containers/Serch"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootReducer from "../reducers"
import thunk from "redux-thunk"
const middlewwares = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middlewwares))

const GiphyApp = () => {
  return (
    <Provider store={store}>
      <Serch />
      <ImageList />
    </Provider >
  )
}

export default GiphyApp
