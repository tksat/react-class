import React from "react"
import axios from "axios"
import SarchBox from "./component/SarchBox"

class GiphyApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { gifs: [] }
  }

  getGif = serchText => {
    const searchArray = {
      text: serchText,
      limit: 10,
      apiKey: "QgQ8FCmQXZ1u6nLkFFLmPcf1Pn3aokWp"
    }
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchArray.text}&api_key=${searchArray.apiKey}&limit=${searchArray.limit}`

    axios.get(url).then(res => {
      const dataObj = res.data.data
      const imageUrlList = dataObj.map(data => data.images.downsized.url)
      this.setState({ gifs: imageUrlList })
    })
  }

  imageList = (urlList, index) => {
    const item = urlList.map(url => <li key={index}><img src={url} /></li>)
    console.log(urlList)
    return <ul>{item}</ul>
  }

  componentDidMount() {
    this.getGif()
  }

  render() {
    return (
      <>
        <h1>Giphyを検索アプリ</h1>
        <SarchBox getGif={this.getGif()} />
        {this.imageList(this.state.gifs)}
      </>
    )
  }
}

export default GiphyApp
