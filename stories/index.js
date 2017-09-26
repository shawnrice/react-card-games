import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Card from '../src/Card/Card';
import GlyphCard from '../src/Card/GlyphCard';
import { deck } from '../src/Deck';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Deck', module).add('Full Deck', () => (
  <div>
    {deck.map(val => <Card key={val} suite={val.slice(0, 1)} value={parseInt(val.slice(1), 10)} />)}
  </div>
));

storiesOf('Single CSS Cards', module).add('Ace of Hearts', () => (
  <div>
    <div style={{ display: 'inline-block', marginRight: '1rem' }}>
      <Card width="50px" suite="H" value={1} />
    </div>
    <div style={{ display: 'inline-block', marginRight: '1rem' }}>
      <Card width="100px" suite="H" value={1} />
    </div>
    <div style={{ display: 'inline-block', marginRight: '1rem' }}>
      <Card width="150px" suite="H" value={1} />
    </div>
    <div style={{ display: 'inline-block', marginRight: '1rem' }}>
      <Card width="200px" suite="H" value={1} />
    </div>
    <div style={{ display: 'inline-block', marginRight: '1rem' }}>
      <Card width="250px" suite="H" value={1} />
    </div>
  </div>
));

storiesOf('Single CSS GlyphCards', module).add('Ace of Hearts', () => (
  <div>
    <div style={{ display: 'inline-block', marginRight: '1rem' }}>
      <GlyphCard width={50} suite="H" value={1} />
    </div>
    <div style={{ display: 'inline-block', marginRight: '1rem' }}>
      <GlyphCard width={100} suite="H" value={1} />
    </div>
    <div style={{ display: 'inline-block', marginRight: '1rem' }}>
      <GlyphCard width={150} suite="H" value={1} />
    </div>
    <div style={{ display: 'inline-block', marginRight: '1rem' }}>
      <GlyphCard width={200} suite="H" value={1} />
    </div>
    <div style={{ display: 'inline-block', marginRight: '1rem' }}>
      <GlyphCard width={250} suite="H" value={1} />
    </div>
  </div>
));
