import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import 'tachyons';

class App extends Component {

  render() {
    return (
      <div className='tc'>
        <Main />
      </div>
    );
  }
}

export default App;
