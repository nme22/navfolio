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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n// change background to become either a nice picture or something cleaner\nvar theme = {\n    styles: {\n        global: {\n            body: {\n                // bgImage: './portfolio-background.png',\n                // backgroundSize: 'cover',\n                // backgroundRepeat: 'none',\n                // height: '150vh',\n                bgColor: 'black'\n            }\n        }\n    }\n};\nvar customTheme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.extendTheme)(theme);\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return(//\n    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n        theme: customTheme,\n        __source: {\n            fileName: \"/Users/nme22/Desktop/navfolio/pages/_app.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            __source: {\n                fileName: \"/Users/nme22/Desktop/navfolio/pages/_app.js\",\n                lineNumber: 25,\n                columnNumber: 10\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n            }, pageProps, {\n                __source: {\n                    fileName: \"/Users/nme22/Desktop/navfolio/pages/_app.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                },\n                __self: this\n            }))\n        })\n    }));\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUNnQztBQUVyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3pDLEVBQXlFO0FBQ3pFLEdBQUssQ0FBQ0ksS0FBSyxHQUFHLENBQUM7SUFDWkMsTUFBTSxFQUFFLENBQUM7UUFDTkMsTUFBTSxFQUFFLENBQUM7WUFDTkMsSUFBSSxFQUFFLENBQUM7Z0JBQ0osRUFBeUM7Z0JBQ3pDLEVBQTJCO2dCQUMzQixFQUE0QjtnQkFDNUIsRUFBbUI7Z0JBQ25CQyxPQUFPLEVBQUUsQ0FBTztZQUNuQixDQUFDO1FBQ0osQ0FBQztJQUNKLENBQUM7QUFDSixDQUFDO0FBQ0QsR0FBSyxDQUFDQyxXQUFXLEdBQUdQLDZEQUFXLENBQUNFLEtBQUs7U0FFNUJNLEtBQUssQ0FBQyxLQUF3QixFQUFFLENBQUM7UUFBekJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7SUFDbEMsTUFBTSxDQUNILEVBQUU7eUVBQ0RYLDREQUFjO1FBQUNHLEtBQUssRUFBRUssV0FBVzs7Ozs7Ozt1RkFDOUJOLDBEQUFNOzs7Ozs7OzJGQUNIUSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7QUFJcEMsQ0FBQztLQVRRRixLQUFLO0FBV2QsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuLy8gY2hhbmdlIGJhY2tncm91bmQgdG8gYmVjb21lIGVpdGhlciBhIG5pY2UgcGljdHVyZSBvciBzb21ldGhpbmcgY2xlYW5lclxuY29uc3QgdGhlbWUgPSB7XG4gICBzdHlsZXM6IHtcbiAgICAgIGdsb2JhbDoge1xuICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgLy8gYmdJbWFnZTogJy4vcG9ydGZvbGlvLWJhY2tncm91bmQucG5nJyxcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZFJlcGVhdDogJ25vbmUnLFxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAnMTUwdmgnLFxuICAgICAgICAgICAgYmdDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgIH0sXG4gICAgICB9LFxuICAgfSxcbn07XG5jb25zdCBjdXN0b21UaGVtZSA9IGV4dGVuZFRoZW1lKHRoZW1lKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICByZXR1cm4gKFxuICAgICAgLy9cbiAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17Y3VzdG9tVGhlbWV9PlxuICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hha3JhUHJvdmlkZXIiLCJleHRlbmRUaGVtZSIsIkxheW91dCIsInRoZW1lIiwic3R5bGVzIiwiZ2xvYmFsIiwiYm9keSIsImJnQ29sb3IiLCJjdXN0b21UaGVtZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});