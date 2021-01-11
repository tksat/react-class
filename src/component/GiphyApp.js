import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "../reducers"
import ImageList from "../containers/ImageList"

const store = createStore(rootReducer)

const GiphyApp = () => {
  return (
    <Provider store={store}>
      <ImageList />
    </Provider >
  )
}

export default GiphyApp
