import React, { PureComponent } from 'react';

// import Card from './Card/DraggableCard';
import { types } from './types';
import { DropTarget } from 'react-dnd';

const dropTarget = {
  canDrop(props, monitor) {
    const item = monitor.getItem();
    if (parseInt(item.card.slice(1), 10) === props.cards[props.cards.length - 1].props.value - 1) {
      console.log('Can drop on me');
    }
      return (
        parseInt(item.card.slice(1), 10) === props.cards[props.cards.length - 1].props.value - 1
      );
  },

  hover(props, monitor, component) {
    console.log('is hovering');
    // return true;
  },

  drop(props, monitor, component) {
    console.log('is dropping');
    return true;
  },
};

@DropTarget(types.CARD, dropTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType(),
}))
export default class Column extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOver && nextProps.isOver) {
      // You can use this as enter handler
      console.log('just moved over me');
    }

    if (this.props.isOver && !nextProps.isOver) {
      // You can use this as leave handler
      console.log('just moved off of me');
    }

    if (this.props.isOverCurrent && !nextProps.isOverCurrent) {
      // You can be more specific and track enter/leave
      // shallowly, not including nested targets
      console.log('no longer over me (current)');
    }
  }

  render() {
    const { cards, offset } = this.props;
    console.log(cards.length, 'cards in this column');
    if (this.props.isOver) {
      console.log('Over me!');
    }
    return (
      <div
        style={{
          position: 'absolute',
          transform: `translateX( ${120 * offset}px )`,
          width: '110px',
          border: this.props.canDrop ? `2px solid green` : `2px solid red`,
          height: '100%',
        }}
      >
        {cards.map((value, index) => (
          <div
            style={{
              position: 'absolute',
              top: 0,
              transform: `translateY( ${index * 10}% )`,
            }}
          >
            {index === cards.length - 1 ? React.cloneElement(value, { show: true }) : value}
          </div>
        ))}
      </div>
    );
  }
}
