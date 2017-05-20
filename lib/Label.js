'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'form-label' },
    children
  );
};

module.exports = Label;