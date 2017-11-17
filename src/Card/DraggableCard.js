import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { types } from '../types';
import PropTypes from 'prop-types';

const cardSource = {
  beginDrag(props) {
    // Requires a standard "card" interface. This is quite breakable.
    return {
      suite: props.suite,
      value: props.value,
    };
  },
};

@DragSource(types.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class DraggableCard extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    CardComponent: PropTypes.func.isRequired,
  };

  beginDrag() {
    return this.props.card;
  }

  render() {
    const { isDragging, connectDragSource, CardComponent, ...rest } = this.props;
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.95 : 1, display: 'inline-block', cursor: 'pointer' }}>
        <CardComponent { ...rest } />
      </div>
    );
  }
}
