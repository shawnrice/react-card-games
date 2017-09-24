import './App.css';

import Deck, { deck, getMultipleDecks, shuffle } from './Deck';
import React, { Component } from 'react';


import Column from './Column.js';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Spider from './Spider';
import Timer from './Timer';
import { cardBackOptions } from './Card/backgrounds';

// {
//   shuffle(getMultipleDecks(2), 3).map((card, index) => {
//     //DevSkim: ignore DS148264
//     const s = card.slice(0, 1);
//     const v = parseInt(card.slice(1), 10);
//     return (
//       <Card
//         suite={s}
//         value={v}
//         key={v + s + index}
//         width="100px"
//         show={index % 2 === 0}
//         backTheme={this.state.cardBack}
//       />
//     );
//   });
// }

// <div style={{ margin: '5rem' }}>
//   <select onChange={event => this.setState({ ...this.state, cardBack: event.target.value })}>
//     {cardBackOptions.map(opt => (
//       <option key={opt} value={opt}>
//         {opt}
//       </option>
//     ))}
//   </select>
// </div>;

@DragDropContext(HTML5Backend)
class App extends Component {
  state = {
    cardBack: cardBackOptions[0],
  };

  render() {
    return (
      <div className="App">
        <Timer />
        <Spider />
      </div>
    );
  }
}

export default App;
