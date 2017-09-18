import React, { PureComponent } from 'react';

export default class Column extends PureComponent {

  render() {

    const { cards, offset } = this.props;
    console.log( cards.length, 'cards in this column' );
    return (
      <div style={{ transform: `translateX( ${ 110 * offset }px )`, width: '110px' }}>
        { cards.map((value, index) => (
          <div style={{ display: 'absolute', transform: `translateY( ${ index * 10 }% )` }}>{ value }</div>
        ) ) }
      </div>
    );
  }
}