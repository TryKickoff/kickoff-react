'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(_ref) {
  var children = _ref.children,
      horizontal = _ref.horizontal;

  var className = 'form';
  if (horizontal) {
    className += ' form--horizontal';
  }
  return _react2.default.createElement(
    'form',
    { className: className },
    children
  );
};

module.exports = Form;