import React from 'react';
import { render } from 'react-dom';

const title = "変数でタイトルを入れました"
const body = "変数でボディを入れました"
const returnString = () => "文字を返す関数です"

const reactElement = (
  <div>
    <h1>{title}</h1>
    <h2>{body}</h2>
    <div>{Math.random()}</div>
    <div>{returnString()}</div>
  </div>)

render(reactElement, document.getElementById('root'));
