// Also see:
// https://sourceforge.net/projects/vector-cards/
//
// Also see:
// https://github.com/htdebeer/SVG-cards
//
// https://sourceforge.net/p/vector-cards/home/Vector_Poker_Playing_Cards_SVG/
//
// https://www.npmjs.com/package/cardsJS
//
// const cards = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];
// const suits = [ 'H', 'C', 'S', 'D' ];
// const deck  = {
//   '1H': {
//     src: require( './cards/1H.svg.jsx' ),
//     suite: 'H',
//     value: 1,
//   },
//   '2H': {
//     src: require( './cards/2H.svg.jsx' ),
//     suite: 'H',
//     value: 2,
//   },
//   '3H': {
//     src: require( './cards/3H.svg.jsx' ),
//     suite: 'H',
//     value: 3,
//   },
//   '4H': {
//     src: require( './cards/4H.svg.jsx' ),
//     suite: 'H',
//     value: 4,
//   },
//   '5H': {
//     src: require( './cards/5H.svg.jsx' ),
//     suite: 'H',
//     value: 5,
//   },
//   '6H': {
//     src: require( './cards/6H.svg.jsx' ),
//     suite: 'H',
//     value: 6,
//   },
//   '7H': {
//     src: require( './cards/7H.svg.jsx' ),
//     suite: 'H',
//     value: 7,
//   },
//   '8H': {
//     src: require( './cards/8H.svg.jsx' ),
//     suite: 'H',
//     value: 8,
//   },
//   '9H': {
//     src: require( './cards/9H.svg.jsx' ),
//     suite: 'H',
//     value: 9,
//   },
//   '10H': {
//     src: require( './cards/10H.svg.jsx' ),
//     suite: 'H',
//     value: 10,
//   },
//   '11H': {
//     src: require( './cards/11H.svg.jsx' ),
//     suite: 'H',
//     value: 11,
//   },
//   '12H': {
//     src: require( './cards/12H.svg.jsx' ),
//     suite: 'H',
//     value: 12,
//   },
//   '13H': {
//     src: require( './cards/13H.svg.jsx' ),
//     suite: 'H',
//     value: 13,
//   },

//   '1D': {
//     src: require( './cards/1D.svg.jsx' ),
//     suite: 'D',
//     value: 1,
//   },
//   '2D': {
//     src: require( './cards/2D.svg.jsx' ),
//     suite: 'D',
//     value: 2,
//   },
//   '3D': {
//     src: require( './cards/3D.svg.jsx' ),
//     suite: 'D',
//     value: 3,
//   },
//   '4D': {
//     src: require( './cards/4D.svg.jsx' ),
//     suite: 'D',
//     value: 4,
//   },
//   '5D': {
//     src: require( './cards/5D.svg.jsx' ),
//     suite: 'D',
//     value: 5,
//   },
//   '6D': {
//     src: require( './cards/6D.svg.jsx' ),
//     suite: 'D',
//     value: 6,
//   },
//   '7D': {
//     src: require( './cards/7D.svg.jsx' ),
//     suite: 'D',
//     value: 7,
//   },
//   '8D': {
//     src: require( './cards/8D.svg.jsx' ),
//     suite: 'D',
//     value: 8,
//   },
//   '9D': {
//     src: require( './cards/9D.svg.jsx' ),
//     suite: 'D',
//     value: 9,
//   },
//   '10D': {
//     src: require( './cards/10D.svg.jsx' ),
//     suite: 'D',
//     value: 10,
//   },
//   '11D': {
//     src: require( './cards/11D.svg.jsx' ),
//     suite: 'D',
//     value: 11,
//   },
//   '12D': {
//     src: require( './cards/12D.svg.jsx' ),
//     suite: 'D',
//     value: 12,
//   },
//   '13D': {
//     src: require( './cards/13D.svg.jsx' ),
//     suite: 'D',
//     value: 13,
//   },
//   '1C': {
//     src: require( './cards/1C.svg.jsx' ),
//     suite: 'C',
//     value: 1,
//   },
//   '2C': {
//     src: require( './cards/2C.svg.jsx' ),
//     suite: 'C',
//     value: 2,
//   },
//   '3C': {
//     src: require( './cards/3C.svg.jsx' ),
//     suite: 'C',
//     value: 3,
//   },
//   '4C': {
//     src: require( './cards/4C.svg.jsx' ),
//     suite: 'C',
//     value: 4,
//   },
//   '5C': {
//     src: require( './cards/5C.svg.jsx' ),
//     suite: 'C',
//     value: 5,
//   },
//   '6C': {
//     src: require( './cards/6C.svg.jsx' ),
//     suite: 'C',
//     value: 6,
//   },
//   '7C': {
//     src: require( './cards/7C.svg.jsx' ),
//     suite: 'C',
//     value: 7,
//   },
//   '8C': {
//     src: require( './cards/8C.svg.jsx' ),
//     suite: 'C',
//     value: 8,
//   },
//   '9C': {
//     src: require( './cards/9C.svg.jsx' ),
//     suite: 'C',
//     value: 9,
//   },
//   '10C': {
//     src: require( './cards/10C.svg.jsx' ),
//     suite: 'C',
//     value: 10,
//   },
//   '11C': {
//     src: require( './cards/11C.svg.jsx' ),
//     suite: 'C',
//     value: 11,
//   },
//   '12C': {
//     src: require( './cards/12C.svg.jsx' ),
//     suite: 'C',
//     value: 12,
//   },
//   '13C': {
//     src: require( './cards/13C.svg.jsx' ),
//     suite: 'C',
//     value: 13,
//   },
//   '1S': {
//     src: require( './cards/1S.svg.jsx' ),
//     suite: 'S',
//     value: 1,
//   },
//   '2S': {
//     src: require( './cards/2S.svg.jsx' ),
//     suite: 'S',
//     value: 2,
//   },
//   '3S': {
//     src: require( './cards/3S.svg.jsx' ),
//     suite: 'S',
//     value: 3,
//   },
//   '4S': {
//     src: require( './cards/4S.svg.jsx' ),
//     suite: 'S',
//     value: 4,
//   },
//   '5S': {
//     src: require( './cards/5S.svg.jsx' ),
//     suite: 'S',
//     value: 5,
//   },
//   '6S': {
//     src: require( './cards/6S.svg.jsx' ),
//     suite: 'S',
//     value: 6,
//   },
//   '7S': {
//     src: require( './cards/7S.svg.jsx' ),
//     suite: 'S',
//     value: 7,
//   },
//   '8S': {
//     src: require( './cards/8S.svg.jsx' ),
//     suite: 'S',
//     value: 8,
//   },
//   '9S': {
//     src: require( './cards/9S.svg.jsx' ),
//     suite: 'S',
//     value: 9,
//   },
//   '10S': {
//     src: require( './cards/10S.svg.jsx' ),
//     suite: 'S',
//     value: 10,
//   },
//   '11S': {
//     src: require( './cards/11S.svg.jsx' ),
//     suite: 'S',
//     value: 11,
//   },
//   '12S': {
//     src: require( './cards/12S.svg.jsx' ),
//     suite: 'S',
//     value: 12,
//   },
//   '13S': {
//     src: require( './cards/13S.svg.jsx' ),
//     suite: 'S',
//     value: 13,
//   },
// }
