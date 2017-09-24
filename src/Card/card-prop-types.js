const suites = ['H', 'D', 'S', 'C'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export function playingCard(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';

  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'string') {
      return suites.includes(value.slice(0, 1)) &&
      values.includes(parseInt(value.slice(1), 10))
        ? null
        : new Error(propName + ' in ' + componentName + ' is not a valid card type');
    }
  }

  // assume all ok
  return null;
}

export function suiteProp(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'string') {
      return suites.includes(value)
        ? null
        : new Error(
            propName + ' in ' + componentName + " should be in the array [ 'H', 'D', 'S', 'C' ] "
          );
    }
  }

  // assume all ok
  return null;
}

export function valueProp(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'string') {
      return values.includes(value)
        ? null
        : new Error(propName + ' in ' + componentName + ' should be in an INT from 1 to 13');
    }
  }

  // assume all ok
  return null;
}
