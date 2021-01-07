import React from "react"

class SarchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.getGif(this.state.text)
    this.setState({ text: "" })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={e => this.handleChange(e)} />
        <input type="submit" value="sartch" />
      </form>
    )
  }
}

export default SarchBox
