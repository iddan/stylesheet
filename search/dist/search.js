'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* globals React ReactDOM */

var _React = React,
    PureComponent = _React.PureComponent;


var getSiteMap = function getSiteMap() {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/feed.xml');
    xhr.send();
    console.log(xhr);
    xhr.addEventListener('load', function () {
      console.log(xhr.responseXML);
    });
    xhr.addEventListener('error', reject);
  });
};

var Search = function (_PureComponent) {
  _inherits(Search, _PureComponent);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: true,
      query: '',
      results: []
    }, _this.search = function (query) {
      _this.setState({ query: query });
    }, _this.render = function () {
      var _this$state = _this.state,
          open = _this$state.open,
          query = _this$state.query,
          results = _this$state.results;

      return React.createElement(
        'div',
        { onClick: function onClick() {
            return _this.setState({ open: true });
          } },
        React.createElement('input', { type: 'text', value: query, onChange: function onChange(e) {
            return _this.search(e.target.value);
          }, placeholder: 'Search' }),
        open && React.createElement(
          'div',
          null,
          results.map(function (_ref2, i) {
            var title = _ref2.title,
                href = _ref2.href;
            return React.createElement(
              'a',
              { href: href },
              title
            );
          })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      getSiteMap();
    }
  }]);

  return Search;
}(PureComponent);

ReactDOM.render(React.createElement(Search, null), document.querySelector('#search'));
