import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { cardBackOptions, getCardBack } from './alt-backgrounds';
import { DragSource } from 'react-dnd';
import { types } from './types';

function playingCard(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';

  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'string') {
        return [ 'H', 'D', 'S', 'C' ].includes( value.slice(0, 1)) &&
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ].includes( parseInt( value.slice( 1 ), 10 ) )
          ? null
          : new Error(propName + ' in ' + componentName + " is not a valid card type");
    }
  }

  // assume all ok
  return null;
}

function suiteProp(props, propName, componentName) {
    componentName = componentName || 'ANONYMOUS';
    if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'string') {
        return [ 'H', 'D', 'S', 'C' ].includes( value )
          ? null
          : new Error(propName + ' in ' + componentName + " should be in the array [ 'H', 'D', 'S', 'C' ] ");
    }
  }

  // assume all ok
  return null;
}

function valueProp(props, propName, componentName) {
    componentName = componentName || 'ANONYMOUS';
    if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'string') {
        return [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ].includes( value )
          ? null
          : new Error(propName + ' in ' + componentName + " should be in an INT from 1 to 13");
    }
  }

  // assume all ok
  return null;
}

/* eslint-disable max-len */
// Patterns from here:
// http://lea.verou.me/css3patterns/
export const cardBacks = {
  argyle: {
    backgroundColor: '#6d695c',
    backgroundImage: 'repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px), linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)), linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1))',
    backgroundSize: '70px 120px'
  },
  arrows: {
    background: 'linear-gradient(45deg, #92baac 45px, transparent 45px)64px 64px, linear-gradient(45deg, #92baac 45px, transparent 45px,transparent 91px, #e1ebbd 91px, #e1ebbd 135px, transparent 135px), linear-gradient(-45deg, #92baac 23px, transparent 23px, transparent 68px,#92baac 68px,#92baac 113px,transparent 113px,transparent 158px,#92baac 158px)',
    backgroundColor: '#e1ebbd',
    backgroundSize: '128px 128px'
  },
  blueprint: {
    backgroundColor: '#269',
    backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px), linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
    backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
    backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
  },
  bradyBunch: {
    backgroundImage: 'radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%), radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%)',
    backgroundSize: '110px 110px',
    backgroundColor: '#C8D3A7',
    backgroundPosition: '0 0, 55px 55px'
  },
  bricks: {
    backgroundColor: 'silver',
    backgroundImage: 'linear-gradient(335deg, #b00 23px, transparent 23px), linear-gradient(155deg, #d00 23px, transparent 23px), linear-gradient(335deg, #b00 23px, transparent 23px), linear-gradient(155deg, #d00 23px, transparent 23px)',
    backgroundSize: '58px 58px',
    backgroundPosition: '0px 2px, 4px 35px, 29px 31px, 34px 6px'
  },
  carbon: {
    background: 'linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px, linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px, linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px, linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px, linear-gradient(90deg, #1b1b1b 10px, transparent 10px), linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)',
    backgroundColor: '#131313',
    backgroundSize: '20px 20px'
  },
  carbonFibre: {
    background: 'radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px',
    backgroundColor: '#282828',
    backgroundSize: '16px 16px'
  },
  checkerboard: {
    backgroundColor: '#eee',
    backgroundImage: 'linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black)',
    backgroundSize: '60px 60px',
    backgroundPosition: '0 0, 30px 30px'
  },
  chocolateWeave: {
    background: 'linear-gradient(45deg, #dca 12%, transparent 0, transparent 88%, #dca 0), linear-gradient(135deg, transparent 37%, #a85 0, #a85 63%, transparent 0), linear-gradient(45deg, transparent 37%, #dca 0, #dca 63%, transparent 0) #753',
    backgroundSize: '25px 25px'
  },
  cicadaStrips: {
    backgroundColor: '#026873',
    backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,.07) 50%, transparent 50%), linear-gradient(90deg, rgba(255,255,255,.13) 50%, transparent 50%), linear-gradient(90deg, transparent 50%, rgba(255,255,255,.17) 50%), linear-gradient(90deg, transparent 50%, rgba(255,255,255,.19) 50%)',
    backgroundSize: '13px, 29px, 37px, 53px'
  },
  cross: {
    background: 'radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent) 50px 50px, linear-gradient(#A8B1BB 8px, transparent 8px) 0 -4px, linear-gradient(90deg, #A8B1BB 8px, transparent 8px) -4px 0',
    backgroundColor: 'slategray',
    backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px'
  },
  crossDots: {
    background: 'radial-gradient(black 3px, transparent 4px), radial-gradient(black 3px, transparent 4px), linear-gradient(#fff 4px, transparent 0), linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px), linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px), #fff',
    backgroundSize: '109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px',
    backgroundPosition: '54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px'
  },
  diagonalCheckerboard: {
    backgroundColor: '#eee',
    backgroundImage: 'linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, black 75%, black)',
    backgroundSize: '60px 60px'
  },
  diagonalStripes: {
    backgroundColor: 'gray',
    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px)'
  },
  halfRombes: {
    background: 'linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0, linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0, linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px, linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px, #36c',
    backgroundSize: '15px 30px'
  },
  hearts: {
    background: 'radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%), radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%), radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%), radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%), radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%), radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px, radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px, radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px, radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px, radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%) 50px 50px',
    backgroundColor: '#b03',
    backgroundSize: '100px 100px'
  },
  honeyComb: {
    background: 'radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px, radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px, linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0, linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0, linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0, linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1',
    backgroundSize: '40px 60px'
  },
  horizontalStripes: {
    backgroundColor: 'gray',
    backgroundImage: 'linear-gradient(transparent 50%, rgba(255,255,255,.5) 50%)',
    backgroundSize: '50px 50px'
  },
  houndstooth: {
    background: 'linear-gradient(-45deg, white 25%, transparent 25%, transparent 75%, black 75%, black) 0 0, linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, white 75%, white) 1em 1em, linear-gradient(45deg, black 17%, transparent 17%, transparent 25%, black 25%, black 36%, transparent 36%, transparent 64%, black 64%, black 75%, transparent 75%, transparent 83%, black 83%) 1em 1em',
    backgroundColor: 'white',
    backgroundSize: '2em 2em'
  },
  japaneseCube: {
    backgroundColor: '#556',
    backgroundImage: 'linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a)',
    backgroundSize: '80px 140px',
    backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
  },
  linedPaper: {
    backgroundColor: '#fff',
    backgroundImage: 'linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px), linear-gradient(#eee .1em, transparent .1em)',
    backgroundSize: '100% 1.2em'
  },
  madras: {
    backgroundColor: 'hsl(34, 53%, 82%)',
    backgroundImage: 'repeating-linear-gradient(45deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(197, 62%, 11%, 0.5) 120px, hsla(197, 62%, 11%, 0.5) 140px ), repeating-linear-gradient(135deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px, hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px, hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px, hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px, hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(197, 62%, 11%, 0.5) 140px, hsla(197, 62%, 11%, 0.5) 160px )'
  },
  marrakesh: {
    backgroundColor: 'white',
    backgroundImage: 'radial-gradient(midnightblue 9px, transparent 10px), repeating-radial-gradient(midnightblue 0, midnightblue 4px, transparent 5px, transparent 20px, midnightblue 21px, midnightblue 25px, transparent 26px, transparent 50px)',
    backgroundSize: '30px 30px, 90px 90px',
    backgroundPosition: '0 0'
  },
  microbialMat: {
    background: 'radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px) 0px 10px, radial-gradient(at 100% 100%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px), #8a3',
    backgroundSize: '20px 20px'
  },
  polkaDot: {
    backgroundColor: '#001',
    backgroundImage: 'radial-gradient(white 15%, transparent 16%), radial-gradient(white 15%, transparent 16%)',
    backgroundSize: '60px 60px',
    backgroundPosition: '0 0, 30px 30px'
  },
  pyramid: {
    background: 'linear-gradient(315deg, transparent 75%, #d45d55 0)-10px 0, linear-gradient(45deg, transparent 75%, #d45d55 0)-10px 0, linear-gradient(135deg, #a7332b 50%, transparent 0) 0 0, linear-gradient(45deg, #6a201b 50%, #561a16 0) 0 0 #561a16',
    backgroundSize: '20px 20px'
  },
  rainbowBokeh: {
    background: 'radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0, linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%)',
    backgroundSize: '470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%',
    backgroundColor: '#840b2a'
  },
  seigaiha: {
    backgroundColor: 'silver',
    backgroundImage: 'radial-gradient(circle at 100% 150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 50% 100%, white 10%, silver 11%, silver 23%, white 24%, white 30%, silver 31%, silver 43%, white 44%, white 50%, silver 51%, silver 63%, white 64%, white 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent)',
    backgroundSize: '100px 50px'
  },
  shippo: {
    backgroundColor: '#def',
    backgroundImage: 'radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%), radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%)',
    backgroundSize: '80px 80px',
    backgroundPosition: '0 0, 40px 40px'
  },
  stairs: {
    background: 'linear-gradient(63deg, #999 23%, transparent 23%) 7px 0, linear-gradient(63deg, transparent 74%, #999 78%), linear-gradient(63deg, transparent 34%, #999 38%, #999 58%, transparent 62%), #444',
    backgroundSize: '16px 48px'
  },
  starryNight: {
    backgroundColor: 'black',
    backgroundImage: 'radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px), radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px), radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px), radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px)',
    backgroundSize: '550px 550px, 350px 350px, 250px 250px, 150px 150px',
    backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px'
  },
  stars: {
    background: 'linear-gradient(324deg, #232927 4%, transparent 4%) -70px 43px, linear-gradient( 36deg, #232927 4%, transparent 4%) 30px 43px, linear-gradient( 72deg, #e3d7bf 8.5%, transparent 8.5%) 30px 43px, linear-gradient(288deg, #e3d7bf 8.5%, transparent 8.5%) -70px 43px, linear-gradient(216deg, #e3d7bf 7.5%, transparent 7.5%) -70px 23px, linear-gradient(144deg, #e3d7bf 7.5%, transparent 7.5%) 30px 23px, linear-gradient(324deg, #232927 4%, transparent 4%) -20px 93px, linear-gradient( 36deg, #232927 4%, transparent 4%) 80px 93px, linear-gradient( 72deg, #e3d7bf 8.5%, transparent 8.5%) 80px 93px, linear-gradient(288deg, #e3d7bf 8.5%, transparent 8.5%) -20px 93px, linear-gradient(216deg, #e3d7bf 7.5%, transparent 7.5%) -20px 73px, linear-gradient(144deg, #e3d7bf 7.5%, transparent 7.5%) 80px 73px',
    backgroundColor: '#232927',
    backgroundSize: '100px 100px'
  },
  steps: {
    backgroundColor: '#FF7D9D',
    backgroundSize: '58px 58px',
    backgroundPosition: '0px 2px, 4px 35px, 29px 31px, 33px 6px, 0px 36px, 4px 2px, 29px 6px, 33px 30px',
    backgroundImage: 'linear-gradient(335deg, #C90032 23px, transparent 23px), linear-gradient(155deg, #C90032 23px, transparent 23px), linear-gradient(335deg, #C90032 23px, transparent 23px), linear-gradient(155deg, #C90032 23px, transparent 23px), linear-gradient(335deg, #C90032 10px, transparent 10px), linear-gradient(155deg, #C90032 10px, transparent 10px), linear-gradient(335deg, #C90032 10px, transparent 10px), linear-gradient(155deg, #C90032 10px, transparent 10px)'
  },
  tablecloth: {
    backgroundColor: 'white',
    backgroundImage: 'linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%), linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%)',
    backgroundSize: '50px 50px'
  },
  tartan: {
    backgroundColor: 'hsl(2, 57%, 40%)',
    backgroundImage: 'repeating-linear-gradient(transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px), repeating-linear-gradient(270deg, transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px), repeating-linear-gradient(125deg, transparent, transparent 2px, rgba(0,0,0,.2) 2px, rgba(0,0,0,.2) 3px, transparent 3px, transparent 5px, rgba(0,0,0,.2) 5px)'
  },
  upholstery: {
    background: 'radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0, radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 8%, hsla(0, 100%, 20%, 0) 10%) 50px 50px, radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 50px 0, radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 0 50px, radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 50px 0, radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 100px 50px, radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 0 0, radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 50px 50px, linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0, linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0',
    backgroundColor: '#300',
    backgroundSize: '100px 100px'
  },
  verticalStripes: {
    backgroundColor: 'gray',
    backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(255,255,255,.5) 50%)',
    backgroundSize: '50px 50px'
  },
  wave: {
    background: 'linear-gradient(#ffffff 50%, rgba(255,255,255,0) 0) 0 0, radial-gradient(circle closest-side, #FFFFFF 53%, rgba(255,255,255,0) 0) 0 0, radial-gradient(circle closest-side, #FFFFFF 50%, rgba(255,255,255,0) 0) 55px 0 #48B',
    backgroundSize: '110px 200px',
    backgroundRepeat: 'repeat-x'
  },
  waves: {
    background: 'radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent), radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px',
    backgroundColor: 'slategray',
    backgroundSize: '75px 100px'
  },
  weave: {
    background: 'linear-gradient(135deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px), linear-gradient(225deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px',
    backgroundColor: '#708090',
    backgroundSize: '64px 128px'
  },
  yinYang: {
    background: 'radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 50px 0, radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 50px 0, radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 0 50px, radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 0 50px, radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%), radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%), radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%) 50px 50px, radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%) 50px 50px',
    backgroundColor: '#63773F',
    backgroundSize: '100px 100px'
  },
  zigZag: {
    background: 'linear-gradient(135deg, #ECEDDC 25%, transparent 25%) -50px 0, linear-gradient(225deg, #ECEDDC 25%, transparent 25%) -50px 0, linear-gradient(315deg, #ECEDDC 25%, transparent 25%), linear-gradient(45deg, #ECEDDC 25%, transparent 25%)',
    backgroundSize: '100px 100px',
    backgroundColor: '#EC173A'
  },
};
/* eslint-enable max-len */
// CSS Emulates these layouts:
// http://zachwaugh.github.io/Helveticards/
//
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

const glyphs = [ '♣', '♦', '♠', '♥' ];
const rotate = ( reverse ) => ( `rotate(${ reverse ? 180 : 0 }deg)` );

const oneUp = (glyph, reverse = false, compress = false ) => (
    <div style={ {
      lineHeight: compress ? '1em' : '1.5em',
      transform: rotate( reverse ),
    } }>
      { glyph }
    </div>
);

const twoUp = (glyph, reverse = false, compress = false ) => (
  <div style={ {
    transform: rotate( reverse ),
    marginTop: `${ reverse && true !== compress ? '1em' : 0 }`,
    height: '1em',
    display: 'flex',
    justifyContent: 'space-around',
  } }>
    <span>{ glyph }</span>
    <span>{ glyph }</span>
  </div>
);

const fiveUp = (glyph, reverse = false, compress = false) => (
  <div style={ {
    transform: rotate( reverse ),
    marginTop: `${ reverse && true !== compress ? '1.25em' : 0 }`,
  } }>
    { twoUp( glyph ) }
    { oneUp( glyph, false, true ) }
    { twoUp( glyph, true, true ) }
  </div>
);

const getAbsoluteInner = ( card, glyph ) => {
  switch ( card ) {
    case 'A':
    case 'J':
    case 'Q':
    case 'K':
      return oneUp( card );
    case 2:
      return twoUp( glyph, false, true );
    case 3:
      return (
        <div>
          { oneUp( glyph ) }
          { oneUp( glyph ) }
          { oneUp( glyph ) }
        </div>
      );
    case 4:
      return (
        <div>
          { twoUp( glyph ) }
          { twoUp( glyph, true ) }
        </div>
      );
    case 5:
      return fiveUp( glyph );
    case 6:
      return (
        <div>
          { twoUp( glyph ) }
          { twoUp( glyph ) }
          { twoUp( glyph, true ) }
        </div>
      );
    case 7:
      return (
        <div>
          { fiveUp( glyph ) }
          { twoUp( glyph, true ) }
        </div>
      );
    case 8:
      return (
        <div>
          { twoUp( glyph ) }
          { twoUp( glyph ) }
          { twoUp( glyph, true, false ) }
          { twoUp( glyph, true, true ) }
        </div>
      );
    case 9:
      return (
        <div>
          { twoUp( glyph ) }
          { fiveUp( glyph ) }
          { twoUp( glyph, true, true ) }
        </div>
      );

    case 10:
      return (
        <div style={ {
          // display: 'flex',
          // flexDirection: 'columns',
          // alignItems: 'stretch',
        } }>
          { fiveUp( glyph, false, true ) }
          { fiveUp( glyph, true, true ) }
        </div>
      );
    default:
      return oneUp( glyph );
  }
}

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

const cardSource = {
  beginDrag( props ) {
    return { card: props.card || props.suite + props.value };
  }
}

@DragSource(types.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Card extends PureComponent {
  static propTypes = {
    card: playingCard,
    show: PropTypes.bool,
    suite: suiteProp,
    value: valueProp,
    width: PropTypes.string,
    backTheme: PropTypes.oneOf( cardBackOptions ),
  }

  static defaultProps = {
    show: true,
    width: '100px',
    backTheme: 'weave',
  }

  constructor(props) {
    super(props);
    this.state = { show: !! props.show }
  }

  beginDrag() {
    return this.props.card;
  }

  toggle() {
    this.setState({ show: ! this.state.show });
  }

  getCardFront() {
    const { suite, value, show, width } = this.props;
    let glyph;
    let color;
    if ( 'C' === suite ) {
      glyph = glyphs[0];
      color = 'black';
    } else if ( 'D' === suite ) {
      glyph = glyphs[1];
      color = 'red';
    } else if ( 'S' === suite ) {
      glyph = glyphs[2];
      color = 'black';
    } else {
      glyph = glyphs[3];
      color = 'red';
    }

    let card;
    switch ( value ) {
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

    const height = (1.4 * parseInt( width, 10 )) + width.replace( parseInt( width, 10 ), '' );
    // const flexInner = {
    //   display: 'flex',
    //   justifyContent: 'space-around',
    //   flexWrap: 'wrap',
    //   width: '70%',
    //   margin: '15% 15% 0',
    //   height: '80%',
    //   alignItems: 'center',
    // };

    const getTop = ( c ) => {
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
      transform: `translate( 20%, ${ getTop( card ) }% )`,
      width: '70%',
    };

    let cardBacking;
    if ('string' === typeof this.props.backTheme) {
      cardBacking = cardBackOptions.includes( this.props.backTheme )
      ? getCardBack( this.props.backTheme, 'rgb(123, 99, 15)', '#abcabc' )
      : { backgroundColor: 'gray' };
    } else if ('object' === typeof this.props.backTheme) {
      cardBacking = this.props.backTheme;
    }

    return (
      <div style={ {
        position: 'relative',
        display: 'inline-block',
        fontWeight: 'bold',
        color,
        width,
        height,
        border: '1px solid black',
        borderRadius: '5%',
        userSelect: 'none',
        cursor: 'pointer',
        transform: `rotateY( ${ this.state.show ? 0 : -180 }deg )`,
        transformStyle: 'preserve-3d',
        transition: 'transform 300ms ease-in-out',
        perspective: '800px',
        position: 'relative',
      }}
      onClick={ () => this.toggle() }
      >
        { /* Card Back */ }
        <div style={ Object.assign({
          display: 'block',
          height: '90%',
          position: 'absolute',
          borderRadius: '5%',
          border: '5px solid white',
          // transform: `rotateY( ${ this.state.show ? 180 : 0 }deg )`,
          transform: 'translateZ(-1px)',
          width: '90%',
          backfaceVisibility: 'hidden',
        /* }, cardBacks[ this.props.backTheme ] ) } /> */
      }, cardBacking ) } />
        <div style={{
          /* backgroundColor: cardBacks[ this.props.backTheme ].backgroundColor, */
          backgroundColor: 'rgb(123, 99, 15)',
          display: 'block',
          height: '100%',
          width: '100%',
          position: 'absolute',
          borderRadius: '5%',
        }} />
        { /* Card Front */ }
        <div style={{
          backgroundColor: 'white',
          display: 'block',
          height: '100%',
          width: '100%',
          transform: 'translateZ(1px)',
          borderRadius: '5%',
          // transform: `rotateY( ${ this.state.show ? 0 : '180' }deg )`,
          // transition: 'transform 300ms linear',
          // backfaceVisibility: 'hidden',
        }}>
          { /* Upper left */ }
          <div style={ { position: 'absolute', top: '2%', left: '2%' } }>
            <div>{ card }</div>
            <div style={{ fontSize: '.5em' }}>{ glyph }</div>
          </div>

          { /* Inner */ }
          <div style={ absoluteInner }>
              { getAbsoluteInner( card, glyph ) }
          </div>

          { /* Bottom Right */ }
          <div style={ { transform: 'rotate(180deg)', position: 'absolute', bottom: '2%', right: '2%' } }>
            <div>{ card }</div>
            <div style={{ fontSize: '.5em' }}>{ glyph }</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isDragging, connectDragSource, text } = this.props;
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1, display: 'inline-block', cursor: 'pointer' }} >
        { this.getCardFront() }
      </div>
    );
  }
}