import Card from './Card';
import React, { Component } from 'react';
import { cardBackOptions } from './backgrounds';

export default class CardBacks extends Component {
  render() {
    return (
      <div style={{ width: '90vw', margin: '0 auto' }}>
        <h1>Card Backs</h1>
        <p>
          These are the different backgrounds for the cards. The colors should be set after I allow
          the props to be put on the card component. The size / positioning of the background might
          need tweaking. Also, some pretty awesome ones might need to go because they're huge. The
          last ones might be getting a bit messed up in the transformation.
        </p>
        <div>
          <ul style={{ textAlign: 'left', margin: '0', width: '20rem' }}>
            <li><strong>Credits</strong></li>
            <li>http://www.heropatterns.com/</li>
            <li>http://lea.verou.me/css3patterns/</li>
          </ul>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
          }}
        >
          {cardBackOptions.map(option => (
            <div style={{ display: 'inline-block', margin: '1rem' }} key={option}>
              <h4 style={{ maxWidth: '120px' }}>{option}</h4>
              <Card suite="H" width="100px" value={1} backTheme={option} show={false} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
