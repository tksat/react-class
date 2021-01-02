import React from "react"

class TodoLists extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const lists = this.props.lists.map(list => {
      return (
        <li key={list.id}>{
          `${list.id}: ${list.title}`}
          <button onClick={() => this.props.deleteTodo(list.id)}>削除</button>
        </li>
      )
    })

    return (
      <>
        <h2>TodoList</h2>
        <ul>{lists}</ul>
      </>
    )
  }
}

export default TodoLists
