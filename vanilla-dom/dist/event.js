"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StylesheetEvent = function (_Event) {
  _inherits(StylesheetEvent, _Event);

  function StylesheetEvent(type, props) {
    _classCallCheck(this, StylesheetEvent);

    var _this = _possibleConstructorReturn(this, (StylesheetEvent.__proto__ || Object.getPrototypeOf(StylesheetEvent)).call(this, type, {
      bubbles: true,
      cancelable: false,
      scoped: false
    }));

    _this.props = props;
    return _this;
  }

  return StylesheetEvent;
}(Event);

exports.default = StylesheetEvent;