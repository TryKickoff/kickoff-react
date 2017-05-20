'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Column = function Column(_ref) {
  var centered = _ref.centered,
      children = _ref.children,
      mid = _ref.mid,
      span = _ref.span;

  var className = 'g-col';
  if (span) {
    className += ' g-span' + span;
  }
  if (mid) {
    className += ' g-span' + mid + '--mid';
  }
  if (centered) {
    className += ' g-col--centered';
  }
  return _react2.default.createElement(
    'div',
    { className: className },
    children
  );
};

module.exports = Column;