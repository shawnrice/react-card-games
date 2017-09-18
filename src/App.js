import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Deck, { deck, shuffle } from './Deck';

import Card, { cardBacks } from './Card';
// import Column from './Column.js'

class App extends Component {

  state = {
    cardBack: Object.keys( cardBacks )[0],
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <select onChange={ (event) => this.setState( { ...this.state, cardBack: event.target.value } ) }>
          { Object.keys( cardBacks ).map( (opt) => <option value={ opt }>{ opt }</option>) }
        </select>
        <div className="App-intro" style={ { background: 'white' } }>
          {
           shuffle( deck, 3 ).map( (card, index) => {
            const s = card.slice(0, 1);
            const v = parseInt( card.slice(1), 10 );
              return (
                <Card
                  suite={ s }
                  value={ v }
                  key={ v + s }
                  width='100px'
                  show={ index % 2 === 0 }
                  backTheme={ this.state.cardBack }
                />
             );
          } ) }
        </div>
      </div>
    );
  }
}

export default App;
