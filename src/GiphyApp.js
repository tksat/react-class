import React from "react"
import axios from "axios"
import SarchBox from "./component/SarchBox"
import styled from 'styled-components'


class GiphyApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { gifs: [] }
  }

  getGif = target => {
    const searchArray = {
      text: target,
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

  imageList = (urlList) => {
    const item = urlList.map((url, index) => <List key={index}><Img src={url} alt="" /></List>)
    return <ul>{item}</ul>
  }

  render() {
    console.log(this.state.gifs)
    return (
      <>
        <Title>Giphyを検索アプリ</Title>
        <SarchBox getGif={this.getGif} />
        {this.imageList(this.state.gifs)}
      </>
    )
  }
}

//styled
const List = styled.li`
list-style-type: none;
display: contents;
`

const Title = styled.h1`
  font-size: 20px;
  color: #333;
`

const Img = styled.img`
  width: auto;
  height: 200px;
`

export default GiphyApp
