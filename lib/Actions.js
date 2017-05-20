'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Actions = function Actions(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'form-actions text-centre' },
    children
  );
};

module.exports = Actions;