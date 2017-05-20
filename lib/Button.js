'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var primary = _ref.primary,
      type = _ref.type,
      value = _ref.value;

  var className = 'btn';
  if (primary) {
    className += ' btn--primary';
  }
  return _react2.default.createElement('input', { className: className, type: type, value: value });
};

module.exports = Button;