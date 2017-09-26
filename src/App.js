import './App.scss';

import React, { Component } from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Spider from './Spider';
import Timer from './Timer';
import GlyphCard from './Card/GlyphCard';
import { BrowserRouter } from 'react-router-dom';
import Link from 'react-router-dom/Link';
import Route from 'react-router-dom/Route';
import CardBacks from './Card/CardBacks';

const GlyphCardContainer = () => (
  <div
    style={{
      margin: '3rem auto',
      padding: '2rem',
      height: '600px',
      width: '800px',
      border: '1px solid black',
    }}
  >
    <GlyphCard width={250} suite="H" value={10} />
    <GlyphCard width={150} suite="C" value={4} />
  </div>
);

@DragDropContext(HTML5Backend)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <ul>
              <li>
                <Link to="glyph">Glyph Card</Link>
              </li>
              <li>
                <Link to="/">Spider</Link>
              </li>
              <li>
                <Link to="backs">Card Backs</Link>
              </li>
            </ul>
          </header>
          <main>
            <Route exact path="/" component={Spider} />
            <Route exact path="/backs" component={CardBacks} />
            <Route exact path="/glyph" component={GlyphCardContainer} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
