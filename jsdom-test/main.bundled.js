"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsdom = _interopRequireDefault(require("jsdom"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var JSDOM = _jsdom["default"].JSDOM;
var dom = new JSDOM("<div id=\"root\"></div>");

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello");
};

global.window = dom.window;

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), dom.window.document.getElementById("root"));

console.log(dom.window.document.getElementById('root'));
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(JSDOM, "JSDOM", "/Users/evenstensberg/Documents/GitHub/css-test/jsdom-test/main.pre-bundled.js");
  reactHotLoader.register(dom, "dom", "/Users/evenstensberg/Documents/GitHub/css-test/jsdom-test/main.pre-bundled.js");
  reactHotLoader.register(App, "App", "/Users/evenstensberg/Documents/GitHub/css-test/jsdom-test/main.pre-bundled.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
