"use strict";
exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 7171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ splitSummaryIntoParagraphs)
/* harmony export */ });
const splitSummaryIntoParagraphs = summary => {
  const paragraphs = summary.split('\n');
  return paragraphs;
};

/***/ }),

/***/ 6817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);




const ListItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ListItem__ListItemWrapper",
  componentId: "sc-1dvhpku-0"
})(["display:flex;flex-direction:row;margin:0;padding:0;width:100%;@media (max-width:85rem){flex-direction:column;padding:0;margin-right:2rem;}"]);
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ListItem__ImageContainer",
  componentId: "sc-1dvhpku-1"
})(["display:flex;flex-basis:20rem;flex-shrink:0;align-items:center;justify-content:center;margin-right:10rem;height:auto !important;min-width:0;@media (max-width:85rem){margin:0;flex-basis:auto;}"]);
const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default().img.withConfig({
  displayName: "ListItem__StyledImage",
  componentId: "sc-1dvhpku-2"
})(["max-width:100%;max-height:75%;@media (max-width:85rem){max-width:30%;height:auto !important;}"]);
const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ListItem__TextContainer",
  componentId: "sc-1dvhpku-3"
})(["display:flex;flex-direction:column;flex:1;text-align:left;justify-content:center;@media (max-width:85rem){padding-top:2rem;align-items:center;text-align:center;justify-content:left !important;}"]);
const ItemHeading = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h2.withConfig({
  displayName: "ListItem__ItemHeading",
  componentId: "sc-1dvhpku-4"
})(["margin:1rem 0 1rem 0 !important;font-size:1.5rem !important;"]);
const ItemSummary = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "ListItem__ItemSummary",
  componentId: "sc-1dvhpku-5"
})(["margin:0 0 .5rem 0;"]);

const ListItem = ({
  image,
  heading,
  summary
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ListItemWrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ImageContainer, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledImage, {
        src: image,
        alt: heading
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(TextContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ItemHeading, {
        className: "header-text",
        children: heading
      }), summary.map((paragraph, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ItemSummary, {
        className: "primary-text",
        children: paragraph
      }, index))]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ })

};
;