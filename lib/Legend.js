'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Legend = function Legend(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'fieldset',
    { className: 'form-legend' },
    children
  );
};

module.exports = Legend;