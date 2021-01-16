import axios from "axios"

const giphyApi = word => {
  const text = word
  const apiKey = "QgQ8FCmQXZ1u6nLkFFLmPcf1Pn3aokWp"
  const limit = 20
  const url = `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${apiKey}&limit=${limit}`

  axios.get(url).then(res => {
    const datas = res.data.data
    const imageUrls = datas.map(data => data.images.downsized_small.mp4)
    console.log(imageUrls)
  })
}

export default giphyApi
