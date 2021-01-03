import React from "react"
import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { member: [] }
  }

  getJson = () => {
    const url = "https://jsondata.okiba.me/v1/json/EZh9y210102232741"
    axios.get(url).then(res => {
      this.setState(res.data)
    })
  }

  memberList = (items) => {
    const list = items.map(item => <li>{`${item.name} : ${item.age}`}</li>)
    return <ul>{list}</ul>
  }

  render() {
    console.log(this.state)
    return (
      <>
        <h1>JSONを取得して表示します</h1>
        <button onClick={this.getJson}>JSONを取得する</button>
        {this.memberList(this.state.member)}
      </>
    )
  }
}

export default App
