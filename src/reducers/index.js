import { combineReducers } from "redux"
import numbers from "./numbers"
import title from "./title"
import day from "./day"

export default combineReducers({
  numbers,
  title,
  day
})
