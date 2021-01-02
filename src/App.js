import axios from "axios"

const url = "https://jsondata.okiba.me/v1/json/EZh9y210102232741"
const getJson = (url) => {
  axios.get(url).then(res => {
    console.log(res.data)
  })
}

const App = () => {
  { getJson(url) }
  return "JSONについての学習です"
}

export default App
