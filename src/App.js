import React, { Component } from "react";
import "./App.css";
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    const numbers = [1,2,3,4];
    return (
      <div className='App'>
        <Navbar />
      </div>
    );
  }
}

export default App;
