import './App.scss';

import React, { Component } from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Spider from './Spider';
import Timer from './Timer';
import GlyphCard from './Card/GlyphCard';
import SimpleGlyphCard from './Card/SimpleGlyphCard';
import { BrowserRouter } from 'react-router-dom';
import Link from 'react-router-dom/Link';
import Route from 'react-router-dom/Route';
import CardBacks from './Card/CardBacks';
import { deck } from './Deck';
import Card from './Card/Card';

function randomCard() {
  return Math.floor(Math.random() * 13) + 1;
}

function randomSuite() {
  const suites = ['H', 'C', 'D', 'S'];
  return suites[Math.floor(Math.random() * 4)];
}

const GlyphCardContainer = () => (
  <div
    style={{
      margin: '3rem auto',
      padding: '2rem',
      border: '1px solid black',
    }}
  >
    <GlyphCard width={150} suite="C" value={randomCard()} />
    <GlyphCard width={100} suite="C" value={randomCard()} />
    <GlyphCard width={350} suite="D" value={randomCard()} />
    <GlyphCard width={150} suite="C" value={randomCard()} />
    <GlyphCard width={50} suite="C" value={randomCard()} />
    <GlyphCard width={150} suite="S" value={randomCard()} />
    <GlyphCard width={150} suite="C" value={randomCard()} />
    <GlyphCard width={550} suite="S" value={randomCard()} />
    <GlyphCard width={150} suite="C" value={randomCard()} />
    <GlyphCard width={88} suite="H" value={randomCard()} />
    <GlyphCard width={250} suite="D" value={randomCard()} />
    <GlyphCard width={50} suite="C" value={randomCard()} />
    <GlyphCard width={300} suite="H" value={randomCard()} theme="tartan" />
  </div>
);

const SimpleGlyphCardContainer = () => (
  <div
    style={{
      margin: '3rem auto',
      padding: '2rem',
      border: '1px solid black',
    }}
  >
    <SimpleGlyphCard width={150} suite="C" value={randomCard()} />
    <SimpleGlyphCard width={100} suite="C" value={randomCard()} />
    <SimpleGlyphCard width={350} suite="D" value={randomCard()} />
    <SimpleGlyphCard width={150} suite="C" value={randomCard()} />
    <SimpleGlyphCard width={50} suite="C" value={randomCard()} />
    <SimpleGlyphCard width={150} suite="S" value={randomCard()} />
    <SimpleGlyphCard width={150} suite="C" value={randomCard()} />
    <SimpleGlyphCard width={550} suite="S" value={randomCard()} />
    <SimpleGlyphCard width={150} suite="C" value={randomCard()} />
    <SimpleGlyphCard width={88} suite="H" value={randomCard()} />
    <SimpleGlyphCard width={250} suite="D" value={randomCard()} />
    <SimpleGlyphCard width={50} suite="C" value={randomCard()} />
    <SimpleGlyphCard width={300} suite="H" value={randomCard()} theme="tartan" />
  </div>
);

const OriginalCards = () =>
  deck.map(card => (
    <Card key={card} value={parseInt(card.slice(1), 10)} suite={card.slice(0, 1)} width="100px" />
  ));

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
                <Link to="simple-glyph">Simple Glyph Card</Link>
              </li>
              <li>
                <Link to="/">Spider</Link>
              </li>
              <li>
                <Link to="backs">Card Backs</Link>
              </li>
              <li>
                <Link to="original">Original Cards</Link>
              </li>
            </ul>
          </header>
          <main>
            <Route exact path="/" component={Spider} />
            <Route exact path="/backs" component={CardBacks} />
            <Route exact path="/glyph" component={GlyphCardContainer} />
            <Route exact path="/simple-glyph" component={SimpleGlyphCardContainer} />
            <Route exact path="/original" component={OriginalCards} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
