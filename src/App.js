import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container pt-5">
          <section id="appArticle" />
        </div>
      </div>
    );
  }
}

export default App;
