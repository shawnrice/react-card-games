import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { cardBackOptions, getCardBack } from './backgrounds';
import { playingCard, suiteProp, valueProp } from './card-prop-types';

/* eslint-enable max-len */
// CSS Emulates these layouts:
// http://zachwaugh.github.io/Helveticards/

const glyphs = ['♣', '♦', '♠', '♥'];
const rotate = reverse => `rotate(${reverse ? 180 : 0}deg)`;

const oneUp = (glyph, reverse = false, compress = false) => (
  <div
    style={{
      lineHeight: compress ? '1em' : '1.5em',
      transform: rotate(reverse),
    }}
  >
    {glyph}
  </div>
);

const twoUp = (glyph, reverse = false, compress = false) => (
  <div
    style={{
      transform: rotate(reverse),
      marginTop: `${reverse && true !== compress ? '1em' : 0}`,
      height: '1em',
      display: 'flex',
      justifyContent: 'space-around',
    }}
  >
    <span>{glyph}</span>
    <span>{glyph}</span>
  </div>
);

const fiveUp = (glyph, reverse = false, compress = false) => (
  <div
    style={{
      transform: rotate(reverse),
      marginTop: `${reverse && true !== compress ? '1.25em' : 0}`,
    }}
  >
    {twoUp(glyph)}
    {oneUp(glyph, false, true)}
    {twoUp(glyph, true, true)}
  </div>
);

const getAbsoluteInner = (card, glyph) => {
  switch (card) {
    case 'A':
    case 'J':
    case 'Q':
    case 'K':
      return oneUp(card);
    case 2:
      return twoUp(glyph, false, true);
    case 3:
      return (
        <div>
          {oneUp(glyph)}
          {oneUp(glyph)}
          {oneUp(glyph)}
        </div>
      );
    case 4:
      return (
        <div>
          {twoUp(glyph)}
          {twoUp(glyph, true)}
        </div>
      );
    case 5:
      return fiveUp(glyph);
    case 6:
      return (
        <div>
          {twoUp(glyph)}
          {twoUp(glyph)}
          {twoUp(glyph, true)}
        </div>
      );
    case 7:
      return (
        <div>
          {fiveUp(glyph)}
          {twoUp(glyph, true)}
        </div>
      );
    case 8:
      return (
        <div>
          {twoUp(glyph)}
          {twoUp(glyph)}
          {twoUp(glyph, true, false)}
          {twoUp(glyph, true, true)}
        </div>
      );
    case 9:
      return (
        <div>
          {twoUp(glyph)}
          {fiveUp(glyph)}
          {twoUp(glyph, true, true)}
        </div>
      );

    case 10:
      return (
        <div
          style={{
            // display: 'flex',
            // flexDirection: 'columns',
            // alignItems: 'stretch',
          }}
        >
          {fiveUp(glyph, false, true)}
          {fiveUp(glyph, true, true)}
        </div>
      );
    default:
      return oneUp(glyph);
  }
};

// const getFlexInner = ( card, glyph ) => {
//   switch ( card ) {
//     case 'A':
//     case 'J':
//     case 'Q':
//     case 'K':
//       return ( <div>{ card }</div>);
//     default:
//       const arr = new Array( card );
//       return arr.fill( <div>{ glyph }</div> );
//   }
// }

export default class Card extends PureComponent {
  static propTypes = {
    card: playingCard,
    show: PropTypes.bool,
    suite: suiteProp,
    value: valueProp,
    width: PropTypes.string,
    backTheme: PropTypes.oneOf(cardBackOptions),
  };

  static defaultProps = {
    show: true,
    width: '100px',
    backTheme: 'Houndstooth',
  };

  constructor(props) {
    super(props);
    this.state = { show: !!props.show };
  }

  toggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { suite, value, show, width } = this.props;
    let glyph;
    let color;
    if ('C' === suite) {
      glyph = glyphs[0];
      color = 'black';
    } else if ('D' === suite) {
      glyph = glyphs[1];
      color = 'red';
    } else if ('S' === suite) {
      glyph = glyphs[2];
      color = 'black';
    } else {
      glyph = glyphs[3];
      color = 'red';
    }

    let card;
    switch (value) {
      case 1:
        card = 'A';
        break;
      case 11:
        card = 'J';
        break;
      case 12:
        card = 'Q';
        break;
      case 13:
        card = 'K';
        break;
      default:
        card = value;
        break;
    }

    const height = 1.4 * parseInt(width, 10) + width.replace(parseInt(width, 10), '');

    const getTop = c => {
      switch (c) {
        case 'A':
        case 'J':
        case 'Q':
        case 'K':
          return 35 * 6;
        case 2:
          return 50 * 6;
        case 3:
          return 40;
        case 4:
          return 80;
        case 5:
          return 80;
        case 6:
          return 50;
        case 7:
          return 30;
        case 8:
          return 30;
        case 9:
          return 30;
        default:
          return 15;
      }
    };

    const absoluteInner = {
      position: 'absolute',
      transform: `translate( 20%, ${getTop(card)}% )`,
      width: '70%',
    };

    let cardBacking;
    if ('string' === typeof this.props.backTheme) {
      cardBacking = cardBackOptions.includes(this.props.backTheme)
        ? getCardBack(this.props.backTheme, 'rgb(123, 99, 15)', '#abcabc')
        : { backgroundColor: 'gray' };
    } else if ('object' === typeof this.props.backTheme) {
      cardBacking = this.props.backTheme;
    }

    return (
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          fontWeight: 'bold',
          textAlign: 'center',
          color,
          width,
          height,
          border: '1px solid black',
          borderRadius: '5%',
          userSelect: 'none',
          cursor: 'pointer',
          transform: `rotateY( ${this.state.show ? 0 : -180}deg )`,
          transformStyle: 'preserve-3d',
          transition: 'transform 300ms ease-in-out',
          perspective: '800px',
          position: 'relative',
        }}
        onClick={() => this.toggle()}
      >
        {/* Card Back */}
        <div
          style={Object.assign(
            {
              display: 'block',
              height: '90%',
              position: 'absolute',
              borderRadius: '5%',
              border: '5px solid white',
              transform: 'translateZ(-1px)',
              width: '90%',
              backfaceVisibility: 'hidden',
              backgroundSize: '100%',
            },
            cardBacking
          )}
        />
        <div
          style={{
            backgroundColor: 'rgb(123, 99, 15)',
            display: 'block',
            height: '100%',
            width: '100%',
            position: 'absolute',
            borderRadius: '5%',
          }}
        />
        {/* Card Front */}
        <div
          style={{
            backgroundColor: 'white',
            display: 'block',
            height: '100%',
            width: '100%',
            transform: 'translateZ(1px)',
            borderRadius: '5%',
          }}
        >
          {/* Upper left */}
          <div style={{ position: 'absolute', top: '2%', left: '2%' }}>
            <div>{card}</div>
            <div style={{ fontSize: '.5em' }}>{glyph}</div>
          </div>

          {/* Inner */}
          <div style={absoluteInner}>{getAbsoluteInner(card, glyph)}</div>

          {/* Bottom Right */}
          <div
            style={{ transform: 'rotate(180deg)', position: 'absolute', bottom: '2%', right: '2%' }}
          >
            <div>{card}</div>
            <div style={{ fontSize: '.5em' }}>{glyph}</div>
          </div>
        </div>
      </div>
    );
  }
}
