import axios from "axios"

const giphyApi = word => {
  const text = word
  const apiKey = "QgQ8FCmQXZ1u6nLkFFLmPcf1Pn3aokWp"
  const limit = 20
  const url = `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${apiKey}&limit=${limit}`
  return axios.get(url)
}

export default giphyApi
