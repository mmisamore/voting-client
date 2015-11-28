'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Voting = require('./components/Voting');

var _Voting2 = _interopRequireDefault(_Voting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pair = ['Trainspotting', '28 Days Later'];

_reactDom2.default.render(_react2.default.createElement(_Voting2.default, { pair: pair }), document.getElementById('app'));