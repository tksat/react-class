import axios from "axios"

export const plus = num => ({ type: 'PLUS', payload: { num: num } })
export const minus = num => ({ type: 'MINUS', payload: { num: num } })
export const asyncPlus = num => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: 'ASINC_PLUS', payload: { num: num } })
    }, 1000)
  }
}
export const changeTitle = () => {
  const changeTitle = title => ({ type: 'CHANGE_TITLE', payload: { title } })
  return dispatch => {
    const html = "http://localhost:3000/member"
    axios.get(html).then(res => (
      dispatch(changeTitle(res.data[0].name))
    ))
  }
}
