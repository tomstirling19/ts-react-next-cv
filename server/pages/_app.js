"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

;// CONCATENATED MODULE: external "react-helmet"
const external_react_helmet_namespaceObject = require("react-helmet");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["body{font-family:'Roboto Mono',Helvetica,Arial,sans-serif;margin:auto !important;scrollbar-width:none;-ms-overflow-style:none;}body::-webkit-scrollbar{display:none;}.header-text{color:#1E2F53;font-size:2rem;letter-spacing:0.05rem;margin-bottom:1.5rem;}.primary-text{font-size:1rem;color:#666;letter-spacing:0.05rem;line-height:1.8rem;text-decoration:none;}.flex-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;padding:0 1rem;}.page-container{max-width:80rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;margin:auto;}.page-container>*{flex:1 1 100%;margin:1rem;}@media (min-width:13.5rem){.flex-container{padding:0 2rem;}.page-container{padding:0 2rem;}.page-container>*{flex-basis:calc(50% - 2rem);}}"]);
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(external_react_helmet_namespaceObject.Helmet, {
      children: /*#__PURE__*/jsx_runtime.jsx("link", {
        rel: "stylesheet",
        href: "/styles/styles.css"
      })
    }), /*#__PURE__*/jsx_runtime.jsx(GlobalStyle, {}), /*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(2570)));
module.exports = __webpack_exports__;

})();