var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');
var ReactPropTypesSecret = require('prop-types/lib/ReactPropTypesSecret');

/*****
 * From the prop-types package. They don't export it, so, well... Let's just copy it.
 */
export var ANONYMOUS = '<<anonymous>>';
var throwOnDirectAccess = true;

export function PropTypeError(message) {
  this.message = message;
  this.stack = '';
}
// Make `instanceof Error` still work for returned errors.
PropTypeError.prototype = Error.prototype;

export function createChainableTypeChecker(validate) {
  if (process.env.NODE_ENV !== 'production') {
    var manualPropTypeCallCache = {};
    var manualPropTypeWarningCount = 0;
  }
  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
    componentName = componentName || ANONYMOUS;
    propFullName = propFullName || propName;

    if (secret !== ReactPropTypesSecret) {
      if (throwOnDirectAccess) {
        // New behavior only for users of `prop-types` package
        invariant(
          false,
          'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
        );
      } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
        // Old behavior for people using React.PropTypes
        var cacheKey = componentName + ':' + propName;
        if (
          !manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3
        ) {
          warning(
            false,
            'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' +
              'for details.',
            propFullName,
            componentName
          );
          manualPropTypeCallCache[cacheKey] = true;
          manualPropTypeWarningCount++;
        }
      }
    }
    if (props[propName] == null) {
      if (isRequired) {
        if (props[propName] === null) {
          return new PropTypeError(
            'The ' +
              location +
              ' `' +
              propFullName +
              '` is marked as required ' +
              ('in `' + componentName + '`, but its value is `null`.')
          );
        }
        return new PropTypeError(
          'The ' +
            location +
            ' `' +
            propFullName +
            '` is marked as required in ' +
            ('`' + componentName + '`, but its value is `undefined`.')
        );
      }
      return null;
    } else {
      return validate(props, propName, componentName, location, propFullName);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

/**
 * END FACEBOOK CODE
 */
