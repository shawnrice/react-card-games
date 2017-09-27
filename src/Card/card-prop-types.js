// This copies the code that Facebook wrote but didn't export for
import { ANONYMOUS, createChainableTypeChecker, PropTypeError } from '../prop-types/factory';

const suites = ['H', 'D', 'S', 'C'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export function playingCard(props, propName, componentName) {
  componentName = componentName || ANONYMOUS;
  console.warn(`playinCard as a prop-type is deprecated. Use check using suite and value separately`);
  return null;
}

function suitePropCheck(props, propName, componentName) {
  if (props[propName]) {
    componentName = componentName || ANONYMOUS;
    const msg = `${propName} in ${componentName} should be in the array [ 'H', 'D', 'S', 'C' ]`;
    const value = props[propName];
    if (typeof value !== 'string') {
      return new PropTypeError(msg);
    }
    return suites.includes(value) ? null : new PropTypeError(msg);
  }
  return null;
}

function valuePropCheck(props, propName, componentName) {
  componentName = componentName || ANONYMOUS;
  const msg = `${propName} in ${componentName} should be in an INT from 1 to 13`;
  if (props[propName]) {
    const value = props[propName];
    if (typeof value !== 'number') {
      return new PropTypeError(msg);
    }
    return values.includes(value) ? null : new PropTypeError(msg);
  }
  return null;
}

export const suiteProp = createChainableTypeChecker(suitePropCheck);
export const valueProp = createChainableTypeChecker(valuePropCheck);
