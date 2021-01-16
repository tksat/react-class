import React from "react"

class Serch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
  }

  handleOnChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.getImageUrls(this.state.text)
    this.setState({ text: "" })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={e => this.handleOnChange(e)} />
        <input type="submit" />
      </form>
    )
  }
}

export default Serch
