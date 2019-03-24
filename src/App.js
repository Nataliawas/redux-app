import React, { Component } from 'react';
import Counter from './Counter'
import TodoList from './TodoList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       <TodoList />
      </div>
    );
  }
}

export default App;
