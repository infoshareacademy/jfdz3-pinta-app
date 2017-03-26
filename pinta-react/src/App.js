import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './pages_layouts/navbar/navbar';
import Main from './PageLayouts/main/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <div className="Navbar">
                <Navbar/>
            </div>
            <div className="Main">
                <Main/>
            </div>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2>Welcome to React</h2>*/}
        </div>
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}

      </div>
    );
  }
}

export default App;
