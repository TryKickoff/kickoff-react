'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var children = _ref.children,
      full = _ref.full,
      narrow = _ref.narrow,
      wide = _ref.wide;

  var className = 'l-container';
  if (full) {
    className += ' l.container--full';
  } else if (narrow) {
    className += ' l.container--narrow';
  } else if (wide) {
    className += ' l.container--wide';
  }
  return _react2.default.createElement(
    'div',
    { className: className },
    children
  );
};

exports.default = Container;