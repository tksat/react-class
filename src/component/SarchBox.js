import React from "react"
import styled from 'styled-components'

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
        <InputText type="text" value={this.state.text} onChange={e => this.handleChange(e)} />
        <InputButton type="submit" value="検索" />
      </form>
    )
  }
}

const InputText = styled.input.attrs(props => ({
  type: "text"
}))`
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 4px;
`

const InputButton = styled.input.attrs(props => ({
  type: "submit"
}))`
  border: none;
  background: #333;
  color: #fff;
  margin: 0 0 0 10px;
  padding: 10px 10px 10px 12px;
  border-radius: 4px;
  font-size: 14px;
  letter-spacing: 2px;
  cursor:pointer;
  line-height: 1;
  &:hover{
    background: #000;
  }
  &:focus{
    outline: 0;
  }
`

export default SarchBox
