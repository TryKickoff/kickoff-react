'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function Grid(_ref) {
  var children = _ref.children,
      gutter = _ref.gutter,
      scaled = _ref.scaled,
      stack = _ref.stack;

  var className = 'g';
  if (gutter && scaled) {
    className += ' g--gutter--scaled';
  } else if (gutter) {
    className += ' g--gutter';
  }
  if (typeof stack === 'string') {
    className += ' g--stack--' + stack;
  } else if (stack) {
    className += ' g--stack';
  }
  return _react2.default.createElement(
    'div',
    { className: className },
    children
  );
};

module.exports = Grid;