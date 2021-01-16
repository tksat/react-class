import React from "react"
import ImageList from "../containers/ImageList"
import Serch from "./Serch"
import giphyApi from "../APIs/giphyApi"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootReducer from "../reducers"
// import { thunk } from "redux-thunk"
// const middlewwares = [thunk]
const store = createStore(rootReducer)


const GiphyApp = () => {
  giphyApi("cat")

  return (
    <Provider store={store}>
      <Serch />
      <ImageList />
    </Provider >
  )
}

export default GiphyApp
