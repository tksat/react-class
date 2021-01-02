import React from "react"

class AddTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ""
    }
  }

  handleClick = e => {
    const text = e.target.value
    this.setState({ title: text })
  }

  handleSubmit = (e) => {
    const { title } = this.state
    e.preventDefault();
    this.props.addTodo(title)
    this.setState({ title: "" })
  }

  render() {
    return (
      <>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={this.handleClick} />
          <input type="submit" value="登録" />
        </form>
      </>
    )
  }
}

export default AddTodo
