import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "../reducers"
import ImageList from "../containers/ImageList"
import Serch from "./Serch"

const store = createStore(rootReducer)

const GiphyApp = () => {
  return (
    <Provider store={store}>
      <Serch />
      <ImageList />
    </Provider >
  )
}

export default GiphyApp
