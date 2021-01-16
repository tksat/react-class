import giphyApi from "../APIs/giphyApi"

const getImageUrls = word => {
  return dispatch => {
    giphyApi(word).then(res => {
      const datas = res.data.data
      const imageUrls = datas.map(data => data.images.downsized.url)
      return dispatch({ type: 'RESEIVE_URL', payload: imageUrls })
    })
  }
}

export default getImageUrls
