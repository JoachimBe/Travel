import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mes superbes voyages</h1>
        </header>
        <Travel 
          destination="la plage"
          character="Moi a la plage"
          country="Espagne"
          image="http://cercamon.e.c.f.unblog.fr/files/2010/05/losroques399.jpg"
          distance="1800km"/>
        <Travel 
          destination="montagne"
          country="France"
          image="https://www.etapes-marocaines.com/files/2015/02/voyage-maroc-montagne_grand.jpg"
          distance="1100km"
        />
      </div>
    );
  }
}

export default App;
