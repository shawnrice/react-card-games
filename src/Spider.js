import { getMultipleDecks, shuffle } from './Deck';
import React, { Component } from 'react';

import Card from './Card/DraggableCard';
import Column from './Column';
import { cardBackOptions, getCardBack } from './Card/backgrounds';

export default class Spider extends Component {
  constructor(props) {
    super(props);
    this.setup();
  }

  setup() {
    const deck = shuffle(getMultipleDecks(2), 3);
    const columns = [];
    for (let i = 0; i < 10; i++) {
      columns[i] = [];
    }
    for (let i = 0; i < 54; i++) {
      const card = (
        <Card suite={ deck[i].slice(0, 1) } value={parseInt(deck[i].slice(1), 10)} show={ false }/>
      );
      columns[i % 10].push(card);
    }
    this.columns = columns;
  }

  render() {
    return (
      <div style={{
        backgroundColor: '#abc',
        boxSizing: 'border-box',
        height: '90%',
        margin: '0 0 0 5%',
        padding: '3rem',
        position: 'absolute',
        width: '90%',
      }}>
        { this.columns.map((col, index) => <Column cards={col} offset={ index } />) }
      </div>
    );
  }
}
