'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Control = function Control(_ref) {
  var children = _ref.children,
      error = _ref.error,
      success = _ref.success,
      warning = _ref.warning;

  var className = 'form-controlGroup';
  if (success) {
    className += ' has-success';
  } else if (error) {
    className += ' has-error';
  } else if (warning) {
    className += ' has-warning';
  }
  return _react2.default.createElement(
    'div',
    { className: className },
    children
  );
};

module.exports = Control;