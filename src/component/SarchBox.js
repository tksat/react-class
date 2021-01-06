import React from "react"

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = [{ text: "" }]
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventdefault()
    this.props.getGif(this.state.text)
    this.setState({ text: "" })
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.text} onChange={e => this.handleChange(e)} />
        <input type="submit" onClick={e => this.handleSubmit(e)} />
      </form>
    )
  }
}

export default SearchBox
