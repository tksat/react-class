import giphyApi from "../APIs/giphyApi"

const reseveData = data => ({ type: 'RESEIVE_URL', payload: data })

const buttonLoading = () => ({ type: 'LOADING' })

const getImageUrls = word => {
  return dispatch => {
    dispatch(buttonLoading())
    giphyApi(word).then(res => {
      const datas = res.data.data
      const imageUrls = datas.map(data => data.images.downsized.url)
      return dispatch(reseveData(imageUrls))
    })
  }
}

export default getImageUrls
