import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { suiteProp, valueProp } from './card-prop-types';

import styles from './GlyphCard.scss';

const classes = items => items.filter(x => x).join(' ');

const oneUp = (glyph, rotate = false, compact = false) => (
  <div className={classes([rotate && 'rotate', compact && 'compact'])}>{glyph}</div>
);

const twoUp = (glyph, rotate = false, compact = false) => (
  <div style={{ width: '100%' }} className={rotate ? 'rotate space' : 'space'}>
    <div>{glyph}</div>
    <div>{glyph}</div>
  </div>
);

const fiveUp = (glyph, rotate = false, compact = false) => (
  <div style={{ height: '50%', width: '100%' }} className={classes([rotate && 'rotate'])}>
    {twoUp(glyph)}
    {oneUp(glyph, false, true)}
    {twoUp(glyph)}
  </div>
);

const getCardFace = (glyph, value) => {
  switch (value) {
    case 1:
    case 11:
    case 12:
    case 13:
      return oneUp(glyph);
    case 2:
      return twoUp(glyph);
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
    case 10:
      return (
        <div>
          {fiveUp(glyph)}
          {fiveUp(glyph, true)}
        </div>
      );
    default:
      return oneUp(glyph);
  }
};

export default class GlyphCard extends Component {
  static propTypes = {
    suite: suiteProp,
    value: valueProp,
    width: PropTypes.number,
  };

  static defaultProps = {
    width: 100,
  };

  static glyphs = {
    H: '♥',
    C: '♣',
    D: '♦',
    S: '♠',
  };

  constructor(props) {
    super(props);
    this.state = { show: !!props.show };
    this.onClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { suite, value, width } = this.props;
    const { show } = this.state;

    const outerStyles = {
      width: `${width}px`,
      height: `${width * 1.4}px`,
    };

    const innerStyles = {
      border: `${width / 20}px solid white`,
    };

    const frontStyles = {
      color: ['H', 'D'].includes(suite) ? 'red' : 'black',
    };

    console.log(innerStyles);
    return (
      <div
        className={['glyphCard', show && 'show'].filter(x => x).join(' ')}
        style={outerStyles}
        onClick={this.onClick}
      >
        <div className="back">
          <div className="inner" style={innerStyles}>
            Background
          </div>
        </div>
        <div className="front" style={frontStyles}>
          <div className="inner" style={innerStyles}>
            <div className="upper-left">
              <div>{value}</div>
              <div>{GlyphCard.glyphs[suite]}</div>
            </div>
            <div className="bottom-right">
              <div>{value}</div>
              <div>{GlyphCard.glyphs[suite]}</div>
            </div>
            <div className="card-face">{getCardFace(GlyphCard.glyphs[suite], value)}</div>
          </div>
        </div>
      </div>
    );
  }
}
