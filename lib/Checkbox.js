'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.state = {
      checked: props.checked || false
    };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'onChange',
    value: function onChange() {
      var checked = !this.state.checked;
      this.setState({ checked: checked });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = 'control-indicator control-indicator--checkbox';
      if (this.props.tickbox) {
        className = 'control-indicator control-indicator--tickbox';
      }
      return _react2.default.createElement(
        'label',
        { className: 'control control--custom', htmlFor: this.props.id },
        _react2.default.createElement('input', _extends({ className: 'control--custom-input', type: 'checkbox' }, this.props, { checked: this.state.checked, onChange: this.onChange })),
        _react2.default.createElement('span', { className: className }),
        'My checkbox Button Label Text'
      );
    }
  }]);

  return Checkbox;
}(_react.Component);

module.exports = Checkbox;