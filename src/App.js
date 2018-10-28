import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mes superbes voyages</h1>
        </header>
        <Travels 
          destination="la plage"
          character="Moi a la plage"
          country="Espagne"
          image="http://cercamon.e.c.f.unblog.fr/files/2010/05/losroques399.jpg"
          distance="1800km"/>
      </div>
    );
  }
}

export default App;
