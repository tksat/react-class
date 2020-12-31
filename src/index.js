import React from 'react';
import { render } from 'react-dom';

const ReactElement = ({ name, music }) => (
  <div>
    <h1>{name}</h1>
    <h2>{music}</h2>
  </div>)

render(<ReactElement name="takada" music="pops" />, document.getElementById('root'));
