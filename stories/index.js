import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Card from '../src/Card/Card';
import { deck } from '../src/Deck';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Deck', module)
  .add('Full Deck', () =>
    <div>
      { deck.map((val) => <Card
        key={ val }
        suite={ val.slice(0, 1) }
        value={ parseInt(val.slice(1), 10)} />)
      }
    </div>
  );
storiesOf('Card', module)
  .add('Ace of Hearts', () => <Card suite='H' value={ 1 } /> );