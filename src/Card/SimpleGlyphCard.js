import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { suiteProp, valueProp } from './card-prop-types';
import { cardBackOptions, getCardBack } from './backgrounds';
import './GlyphCard.scss';

const classes = items => items.filter(x => x).join(' ');

const oneUp = (glyph, rotate = false, compact = false, big = false) => (
  <div
    style={{ fontSize: big ? '3em' : '1em' }}
    className={classes([rotate && 'rotate', compact && 'compact'])}
  >
    {glyph}
  </div>
);

export default class SimpleGlyphCard extends Component {
  static propTypes = {
    suite: suiteProp.isRequired,
    value: valueProp.isRequired,
    width: PropTypes.number,
    theme: PropTypes.oneOf(cardBackOptions),
    foreground: PropTypes.string,
    background: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    theme: 'madras',
    foreground: '',
    background: '',
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
    this.onClick = props.onClick ? props.onClick.bind(this) : this.handleOnClick.bind(this);

    switch (props.value) {
      case 1:
        this.symbol = 'A';
        break;
      case 11:
        this.symbol = 'J';
        break;
      case 12:
        this.symbol = 'Q';
        break;
      case 13:
        this.symbol = 'K';
        break;
      default:
        this.symbol = props.value;
    }
  }

  handleOnClick() {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { background, foreground, suite, theme, value, width } = this.props;
    const { show } = this.state;

    const outerStyles = {
      width: `${width}px`,
      height: `${width * 1.4}px`,
      fontSize: `${width / 11}px`,
    };

    const innerStyles = {
      border: `${width / 20}px solid white`,
    };

    const cardBackground = Object.assign(
      {},
      innerStyles,
      getCardBack(theme, foreground, background)
    );

    const frontStyles = {
      color: ['H', 'D'].includes(suite) ? 'red' : 'black',
    };

    return (
      <div
        className={classes(['glyphCard', show && 'show'])}
        style={outerStyles}
        onClick={this.onClick}
      >
        <div className="back">
          <div className="inner" style={cardBackground} />
        </div>
        <div className="front" style={frontStyles}>
          <div className="inner" style={innerStyles}>
            <div style={{ position: 'absolute', top: 0, left: 0, fontSize: '2em' }}>
              <div>{this.symbol}</div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, fontSize: '2em' }}>
              <div>{this.symbol}</div>
            </div>
            <div className="card-face">
              <div style={{ fontSize: '3em' }}>{SimpleGlyphCard.glyphs[suite]}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
