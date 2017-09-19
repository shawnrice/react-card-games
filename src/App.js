import React, { Component } from 'react';
import './App.css';

import Deck, { getMultipleDecks, deck, shuffle } from './Deck';

// import Card, { cardBacks } from './Card';
import Card from './Card';
import { cardBackOptions } from './alt-backgrounds';
import Column from './Column.js'

class App extends Component {

  state = {
    cardBack: cardBackOptions[0],
  }

  render() {
    return (
      <div className="App">
        <div style={{ margin: '5rem' }}>
          <select
            onChange={(event) => this.setState({ ...this.state, cardBack: event.target.value })}
          >
            { cardBackOptions.map( (opt) => <option key={ opt } value={ opt }>{ opt }</option>) }
          </select>
        </div>
        <div className="App-intro" style={ { background: 'white' } }>
          {
           shuffle(getMultipleDecks(2), 3).map( (card, index) => {
            const s = card.slice(0, 1);
            const v = parseInt( card.slice(1), 10 );
              return (
                <Card
                  suite={ s }
                  value={ v }
                  key={ v + s + index }
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
