export const plus = num => ({ type: 'PLUS', payload: { num: num } })
export const minus = num => ({ type: 'MINUS', payload: { num: num } })
export const asyncPlus = num => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: 'ASINC_PLUS', payload: { num: num } })
    }, 1000)
  }
}
