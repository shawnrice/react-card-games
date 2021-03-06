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

export default class GlyphCard extends Component {
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

  getCardFace(glyph, value) {
    switch (value) {
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
      case 5:
        return (
          <div>
            {twoUp(glyph)}
            {oneUp(glyph, false, true)}
            {twoUp(glyph, true)}
          </div>
        );
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
            {fiveUp(glyph, false, true)}
            {twoUp(glyph, true)}
          </div>
        );
      case 8:
        return (
          <div>
            {twoUp(glyph)}
            {twoUp(glyph)}
            {twoUp(glyph, true)}
            {twoUp(glyph, true)}
          </div>
        );
      case 9:
        return (
          <div>
            {twoUp(glyph)}
            {twoUp(glyph)}
            {oneUp(glyph, false, true)}
            {twoUp(glyph, true)}
            {twoUp(glyph, true)}
          </div>
        );
      case 10:
        return (
          <div>
            {fiveUp(glyph, false)}
            {fiveUp(glyph, true)}
          </div>
        );
      default:
        return oneUp(this.symbol, false, false, true);
    }
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

    const cardFace = this.getCardFace(GlyphCard.glyphs[suite], value);

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
            <div className="upper-left">
              <div>{this.symbol}</div>
              <div>{GlyphCard.glyphs[suite]}</div>
            </div>
            <div className="bottom-right">
              <div>{this.symbol}</div>
              <div>{GlyphCard.glyphs[suite]}</div>
            </div>
            <div className="card-face">{cardFace}</div>
          </div>
        </div>
      </div>
    );
  }
}
