// export const deck = [ 'H', 'D', 'S', 'C' ].map(
//   (s) => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ].map((v) => s + v)
// ).reduce( (acc, val) => acc.concat(val), [] );

export const deck = [
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'H7',
  'H8',
  'H9',
  'H10',
  'H11',
  'H12',
  'H13',
  'D1',
  'D2',
  'D3',
  'D4',
  'D5',
  'D6',
  'D7',
  'D8',
  'D9',
  'D10',
  'D11',
  'D12',
  'D13',
  'S1',
  'S2',
  'S3',
  'S4',
  'S5',
  'S6',
  'S7',
  'S8',
  'S9',
  'S10',
  'S11',
  'S12',
  'S13',
  'C1',
  'C2',
  'C3',
  'C4',
  'C5',
  'C6',
  'C7',
  'C8',
  'C9',
  'C10',
  'C11',
  'C12',
  'C13' ];

export function getMultipleDecks(number = 2) {
  let decks = [];
  for (let i = 0; i < number; i++) {
    decks = decks.concat( deck );
  }
  return decks;
}

export const shuffle = ( cards, times = 1 ) => {
  if ( 1 > times ) {
    return cards;
  }

  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }

  return shuffle( cards, times - 1);
};
