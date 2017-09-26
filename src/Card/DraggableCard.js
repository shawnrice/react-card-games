import React, { Component } from 'react';
import Card from './Card';
import { DragSource } from 'react-dnd';
import { types } from '../types';
import { playingCard, suiteProp, valueProp } from './card-prop-types';
import PropTypes from 'prop-types';
import { cardBackOptions } from './backgrounds';

const cardSource = {
  beginDrag(props) {
    return { card: props.card || props.suite + props.value };
  },
};

@DragSource(types.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class DraggableCard extends Component {
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
    backTheme: 'Moroccan',
  };

  beginDrag() {
    return this.props.card;
  }

  render() {
    const { isDragging, connectDragSource } = this.props;
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1, display: 'inline-block', cursor: 'pointer' }}>
        <Card {...this.props} />
      </div>
    );
  }
}
