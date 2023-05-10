"use strict";
exports.id = 213;
exports.ids = [213];
exports.modules = {

/***/ 8981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().footer.withConfig({
  displayName: "Footer__FooterContainer",
  componentId: "sc-19rdo2z-0"
})(["margin:6rem 0 2rem 0 !important;margin:0;align-self:center;text-align:center;width:100%;@media (max-width:48rem){font-size:0.8rem !important;}"]);

const Footer = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FooterContainer, {
    className: "primary-text",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      children: "\xA9 Thomas Stirling, 2023."
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 4712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5893);








const NavbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "Navbar__NavbarContainer",
  componentId: "sc-1hpo9dw-0"
})(["flex-direction:column;align-items:flex-start !important;"]);
const StyledNavbar = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar).withConfig({
  displayName: "Navbar__StyledNavbar",
  componentId: "sc-1hpo9dw-1"
})(["justify-content:flex-start !important;flex-direction:row !important;position:fixed;z-index:1;top:0;margin-top:5rem !important;"]);
const StyledNavbarToggle = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle).withConfig({
  displayName: "Navbar__StyledNavbarToggle",
  componentId: "sc-1hpo9dw-2"
})(["display:none;margin-bottom:.5rem;min-width:6rem !important;max-width:6rem;border:0.125rem solid #1E2F538F !important;background-color:#1E2F538F !important;border-radius:.5rem;@media (max-width:40rem){display:block;}"]);
const StyledNavbarCollapse = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "Navbar__StyledNavbarCollapse",
  componentId: "sc-1hpo9dw-3"
})(["display:none;@media (max-width:40rem){display:", " !important;background-color:#1E2F538F !important;border-radius:.5rem;border:0.125rem solid #1E2F538F !important;}@media (min-width:40.125rem){display:block !important;}"], props => props.theme.expanded ? 'block' : 'none');
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_5___default().nav.withConfig({
  displayName: "Navbar__StyledNav",
  componentId: "sc-1hpo9dw-4"
})(["flex-direction:row !important;display:flex;padding:.2rem;border-radius:1.25rem !important;"]);
const StyledNavLink = styled_components__WEBPACK_IMPORTED_MODULE_5___default().button.withConfig({
  displayName: "Navbar__StyledNavLink",
  componentId: "sc-1hpo9dw-5"
})(["display:block;padding:0 1rem !important;background:none;border:none;font-family:inherit;line-height:1rem !important;font-size:.9rem !important;&:hover{font-weight:600;text-decoration:none !important;}&.first-navlink{padding-left:0 !important;}&.no-underline{text-decoration:none;}", " @media(max-width:40.0625rem){text-align:left;color:#FFFFFF !important;&.first-navlink{padding-left:1rem !important;}}"], ({
  borderRight
}) => borderRight && 'border-right: 0.0625rem solid currentColor;');

const NavigationBar = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: expanded,
    1: setExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const textColor = router.pathname === '/' ? '#FFFFFF' : undefined;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(styled_components__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
    theme: {
      expanded
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(NavbarContainer, {
      className: "page-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledNavbar, {
        className: `${expanded ? 'navbar-expanded' : ''}`,
        expand: "lg",
        fixed: "top",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StyledNavbarToggle, {
          "aria-controls": "basic-navbar-nav",
          onClick: toggleNavbar,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaBars, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StyledNavbarCollapse, {
          id: "basic-navbar-nav",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledNav, {
            className: "nav-row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/",
              passHref: true,
              style: {
                textDecoration: 'none'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StyledNavLink, {
                className: "primary-text first-navlink",
                borderRight: true,
                onClick: () => router.push('/'),
                "aria-current": router.pathname === '/' ? 'page' : undefined,
                style: {
                  color: textColor
                },
                children: "01 : Home"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/cv",
              passHref: true,
              style: {
                textDecoration: 'none'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StyledNavLink, {
                className: "primary-text",
                borderRight: true,
                onClick: () => router.push('/cv'),
                "aria-current": router.pathname === '/cv' ? 'page' : undefined,
                style: {
                  color: textColor
                },
                children: "02 : CV"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/projects",
              passHref: true,
              style: {
                textDecoration: 'none'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StyledNavLink, {
                className: "primary-text",
                onClick: () => router.push('/projects'),
                "aria-current": router.pathname === '/projects' ? 'page' : undefined,
                style: {
                  color: textColor
                },
                children: "03 : Projects"
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationBar);

/***/ })

};
;