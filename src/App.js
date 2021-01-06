import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Top } from './pageComponents/top';
import { Bot } from './pageComponents/bot';
import { Core } from './pageComponents/core';
import { Image } from './pageComponents/image';

class App extends Component {//importing a class from react
  render() {
    return (
      <div className="App">
        <Top></Top>
        <Image></Image>
        <Core></Core>
        <Bot></Bot>
      </div>
    );//change local time / date to bottom
  }//closing the render method
}

export default App;
