import React from 'react';
import { render } from 'react-dom';

class Human extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "takada" }
  }

  changeState = () => {
    this.setState({ name: this.state.name + "san" })
  }

  render() {
    return (
      <>
        <h1 onClick={this.changeState} >{this.state.name}</h1>
        <h2>{this.props.music}</h2>
      </>
    )
  }

}

render(<Human music="pops" />, document.getElementById('root'));
