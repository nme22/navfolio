"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/color-mode */ \"./node_modules/@chakra-ui/color-mode/dist/chakra-ui-color-mode.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar PortNavbar = function() {\n    _s();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)(), colorMode = ref.colorMode, toggleColorMode = ref.toggleColorMode;\n    var color = (0,_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)('whiteAlpha.900', 'blue.200');\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n        m: 3,\n        mb: 4,\n        p: 3,\n        justifyContent: \"space-evenly\",\n        w: \"100%\",\n        mt: 3,\n        __source: {\n            fileName: \"/Users/nme22/Desktop/navfolio/components/Navbar.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                icon: colorMode === 'light' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSun, {\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaMoon, {\n                }),\n                isRound: \"true\",\n                size: \"sm\",\n                onClick: toggleColorMode,\n                backgroundColor: color,\n                __source: {\n                    fileName: \"/Users/nme22/Desktop/navfolio/components/Navbar.js\",\n                    lineNumber: 19,\n                    columnNumber: 10\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb, {\n                spacing: {\n                    base: '24px',\n                    md: ' 72px',\n                    lg: '120px'\n                },\n                separator: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronRightIcon, {\n                    color: \"gray.500\"\n                }),\n                fontSize: \"14px\",\n                __source: {\n                    fileName: \"/Users/nme22/Desktop/navfolio/components/Navbar.js\",\n                    lineNumber: 27,\n                    columnNumber: 10\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbItem, {\n                        __source: {\n                            fileName: \"/Users/nme22/Desktop/navfolio/components/Navbar.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbLink, {\n                            href: \"/\",\n                            color: color,\n                            fontWeight: \"extrabold\",\n                            __source: {\n                                fileName: \"/Users/nme22/Desktop/navfolio/components/Navbar.js\",\n                                lineNumber: 33,\n                                columnNumber: 16\n                            },\n                            __self: _this,\n                            children: \"Home\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbItem, {\n                        __source: {\n                            fileName: \"/Users/nme22/Desktop/navfolio/components/Navbar.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbLink, {\n                            href: \"/Projects\",\n                            color: color,\n                            fontWeight: \"extrabold\",\n                            __source: {\n                                fileName: \"/Users/nme22/Desktop/navfolio/components/Navbar.js\",\n                                lineNumber: 38,\n                                columnNumber: 16\n                            },\n                            __self: _this,\n                            children: \"Projects\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbItem, {\n                        __source: {\n                            fileName: \"/Users/nme22/Desktop/navfolio/components/Navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbLink, {\n                            href: \"/About\",\n                            color: color,\n                            fontWeight: \"extrabold\",\n                            __source: {\n                                fileName: \"/Users/nme22/Desktop/navfolio/components/Navbar.js\",\n                                lineNumber: 47,\n                                columnNumber: 16\n                            },\n                            __self: _this,\n                            children: \"About\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbItem, {\n                        __source: {\n                            fileName: \"/Users/nme22/Desktop/navfolio/components/Navbar.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbLink, {\n                            href: \"/Contact\",\n                            color: color,\n                            fontWeight: \"extrabold\",\n                            __source: {\n                                fileName: \"/Users/nme22/Desktop/navfolio/components/Navbar.js\",\n                                lineNumber: 56,\n                                columnNumber: 16\n                            },\n                            __self: _this,\n                            children: \"Contact\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(PortNavbar, \"aFG5jDMTOwZUcmX0qHrSwzIfqKQ=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode,\n        _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = PortNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortNavbar);\nvar _c;\n$RefreshReg$(_c, \"PortNavbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPeUI7QUFDZ0M7QUFDWDtBQUNLOzs7QUFFbkQsR0FBSyxDQUFDVSxVQUFVLEdBQUcsUUFDbkIsR0FEeUIsQ0FBQzs7SUFDdkIsR0FBSyxDQUFrQ1QsR0FBYyxHQUFkQSw4REFBWSxJQUEzQ1UsU0FBUyxHQUFzQlYsR0FBYyxDQUE3Q1UsU0FBUyxFQUFFQyxlQUFlLEdBQUtYLEdBQWMsQ0FBbENXLGVBQWU7SUFFbEMsR0FBSyxDQUFDQyxLQUFLLEdBQUdQLHdFQUFpQixDQUFDLENBQWdCLGlCQUFFLENBQVU7SUFDNUQsTUFBTSx1RUFDRk4sb0RBQU07UUFBQ2MsQ0FBQyxFQUFFLENBQUM7UUFBRUMsRUFBRSxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7UUFBRUMsY0FBYyxFQUFDLENBQWM7UUFBQ0MsQ0FBQyxFQUFDLENBQU07UUFBQ0MsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7O2lGQUNuRWpCLHdEQUFVO2dCQUNSa0IsSUFBSSxFQUFFVCxTQUFTLEtBQUssQ0FBTyw4RUFBSUgsaURBQUs7MEZBQU9ELGtEQUFNOztnQkFDakRjLE9BQU8sRUFBQyxDQUFNO2dCQUNkQyxJQUFJLEVBQUMsQ0FBSTtnQkFDVEMsT0FBTyxFQUFFWCxlQUFlO2dCQUN4QlksZUFBZSxFQUFFWCxLQUFLOzs7Ozs7OztrRkFHeEJWLHdEQUFVO2dCQUNSc0IsT0FBTyxFQUFFLENBQUM7b0JBQUNDLElBQUksRUFBRSxDQUFNO29CQUFFQyxFQUFFLEVBQUUsQ0FBTztvQkFBRUMsRUFBRSxFQUFFLENBQU87Z0JBQUMsQ0FBQztnQkFDbkRDLFNBQVMsdUVBQUdwQiw4REFBZ0I7b0JBQUNJLEtBQUssRUFBQyxDQUFVOztnQkFDN0NpQixRQUFRLEVBQUMsQ0FBTTs7Ozs7Ozs7eUZBRWQxQiw0REFBYzs7Ozs7Ozt1R0FDWEMsNERBQWM7NEJBQUMwQixJQUFJLEVBQUMsQ0FBRzs0QkFBQ2xCLEtBQUssRUFBRUEsS0FBSzs0QkFBRW1CLFVBQVUsRUFBQyxDQUFXOzs7Ozs7O3NDQUFDLENBRTlEOzs7eUZBRUY1Qiw0REFBYzs7Ozs7Ozt1R0FDWEMsNERBQWM7NEJBQ1owQixJQUFJLEVBQUMsQ0FBVzs0QkFDaEJsQixLQUFLLEVBQUVBLEtBQUs7NEJBQ1ptQixVQUFVLEVBQUMsQ0FBVzs7Ozs7OztzQ0FDeEIsQ0FFRDs7O3lGQUVGNUIsNERBQWM7Ozs7Ozs7dUdBQ1hDLDREQUFjOzRCQUNaMEIsSUFBSSxFQUFDLENBQVE7NEJBQ2JsQixLQUFLLEVBQUVBLEtBQUs7NEJBQ1ptQixVQUFVLEVBQUMsQ0FBVzs7Ozs7OztzQ0FDeEIsQ0FFRDs7O3lGQUVGNUIsNERBQWM7Ozs7Ozs7dUdBQ1hDLDREQUFjOzRCQUNaMEIsSUFBSSxFQUFDLENBQVU7NEJBQ2ZsQixLQUFLLEVBQUVBLEtBQUs7NEJBQ1ptQixVQUFVLEVBQUMsQ0FBVzs7Ozs7OztzQ0FDeEIsQ0FFRDs7Ozs7OztBQUtmLENBQUM7R0F0REt0QixVQUFVOztRQUMwQlQsMERBQVk7UUFFckNLLG9FQUFpQjs7O0tBSDVCSSxVQUFVO0FBdURoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgIEhTdGFjayxcbiAgIHVzZUNvbG9yTW9kZSxcbiAgIEljb25CdXR0b24sXG4gICBCcmVhZGNydW1iLFxuICAgQnJlYWRjcnVtYkl0ZW0sXG4gICBCcmVhZGNydW1iTGluayxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvY29sb3ItbW9kZSc7XG5pbXBvcnQgeyBGYU1vb24sIEZhU3VuIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgQ2hldnJvblJpZ2h0SWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xuXG5jb25zdCBQb3J0TmF2YmFyID0gKCkgPT4ge1xuICAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG5cbiAgIGNvbnN0IGNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ3doaXRlQWxwaGEuOTAwJywgJ2JsdWUuMjAwJyk7XG4gICByZXR1cm4gKFxuICAgICAgPEhTdGFjayBtPXszfSBtYj17NH0gcD17M30ganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1ldmVubHlcIiB3PVwiMTAwJVwiIG10PXszfT5cbiAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBpY29uPXtjb2xvck1vZGUgPT09ICdsaWdodCcgPyA8RmFTdW4gLz4gOiA8RmFNb29uIC8+fVxuICAgICAgICAgICAgaXNSb3VuZD1cInRydWVcIlxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17Y29sb3J9XG4gICAgICAgICAvPlxuXG4gICAgICAgICA8QnJlYWRjcnVtYlxuICAgICAgICAgICAgc3BhY2luZz17eyBiYXNlOiAnMjRweCcsIG1kOiAnIDcycHgnLCBsZzogJzEyMHB4JyB9fVxuICAgICAgICAgICAgc2VwYXJhdG9yPXs8Q2hldnJvblJpZ2h0SWNvbiBjb2xvcj1cImdyYXkuNTAwXCIgLz59XG4gICAgICAgICAgICBmb250U2l6ZT1cIjE0cHhcIlxuICAgICAgICAgPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWJJdGVtPlxuICAgICAgICAgICAgICAgPEJyZWFkY3J1bWJMaW5rIGhyZWY9XCIvXCIgY29sb3I9e2NvbG9yfSBmb250V2VpZ2h0PVwiZXh0cmFib2xkXCI+XG4gICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICA8L0JyZWFkY3J1bWJMaW5rPlxuICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbT5cbiAgICAgICAgICAgICAgIDxCcmVhZGNydW1iTGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9Qcm9qZWN0c1wiXG4gICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiZXh0cmFib2xkXCJcbiAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgICA8L0JyZWFkY3J1bWJMaW5rPlxuICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbT5cbiAgICAgICAgICAgICAgIDxCcmVhZGNydW1iTGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9BYm91dFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiZXh0cmFib2xkXCJcbiAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgICA8L0JyZWFkY3J1bWJMaW5rPlxuICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbT5cbiAgICAgICAgICAgICAgIDxCcmVhZGNydW1iTGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9Db250YWN0XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJleHRyYWJvbGRcIlxuICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iTGluaz5cbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYkl0ZW0+XG4gICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICA8L0hTdGFjaz5cbiAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUG9ydE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJIU3RhY2siLCJ1c2VDb2xvck1vZGUiLCJJY29uQnV0dG9uIiwiQnJlYWRjcnVtYiIsIkJyZWFkY3J1bWJJdGVtIiwiQnJlYWRjcnVtYkxpbmsiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkZhTW9vbiIsIkZhU3VuIiwiQ2hldnJvblJpZ2h0SWNvbiIsIlBvcnROYXZiYXIiLCJjb2xvck1vZGUiLCJ0b2dnbGVDb2xvck1vZGUiLCJjb2xvciIsIm0iLCJtYiIsInAiLCJqdXN0aWZ5Q29udGVudCIsInciLCJtdCIsImljb24iLCJpc1JvdW5kIiwic2l6ZSIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcGFjaW5nIiwiYmFzZSIsIm1kIiwibGciLCJzZXBhcmF0b3IiLCJmb250U2l6ZSIsImhyZWYiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

});