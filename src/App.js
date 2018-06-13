import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Todo</h1>
        </header>
        <div className="container">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
