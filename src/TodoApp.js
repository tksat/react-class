import React from 'react';
import AddTodo from "./components/AddTodo"
import TodoLists from "./components/TodoLists"

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      nextId: 0
    }
  }

  addTodo = (todo) => {
    const { todos, nextId } = this.state
    this.setState({
      todos: [...todos, { id: nextId + 1, title: todo }],
      nextId: nextId + 1
    })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const deleteTodo = todos.filter(todo => todo.id !== id)
    this.setState({ todos: deleteTodo })
  }

  render() {
    return (
      <>
        <h1>Todo App</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoLists lists={this.state.todos} deleteTodo={this.deleteTodo} />
      </>
    )
  }
}

export default TodoApp
