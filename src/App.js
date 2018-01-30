import React, { Component } from 'react';
import './App.css';
import Root from './Components/Root'
import Aux from './Components/Aux'
import {BrowserRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Aux classes="App">
      <BrowserRouter>
      <Root/>
      </BrowserRouter>
      </Aux>
      
    );
  }
}

export default App;
