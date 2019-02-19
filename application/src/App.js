import React, { Component } from 'react';
import Navbar from './navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar title="Opt1" desc="descr1"/>
          <p>
            React application
          </p>
        </header>
      </div>
    );
  }
}

export default App;
