webpackHotUpdate_N_E("pages/inspo",{

/***/ "./components/Gallery.jsx":
/*!********************************!*\
  !*** ./components/Gallery.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chunk */ "./node_modules/chunk/src/chunk.js");
/* harmony import */ var chunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\looey\\OneDrive\\Desktop\\site\\components\\Gallery.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Gallery(props) {
  var _this = this;

  return __jsx("div", {
    className: "flex mx-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, chunk__WEBPACK_IMPORTED_MODULE_1___default()(props.images.map(function (i) {
    return i.replace("public/", "");
  }), Math.round(props.images.length / 5)).slice(0, 5).map(function (column) {
    return __jsx("div", {
      className: "w-1/5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 8
      }
    }, column.map(function (i) {
      return __jsx("a", {
        href: i.replace("thumb.", ""),
        className: "galleryLink",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 7
        }
      }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImage"], {
        className: "galleryImage",
        src: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 29
        }
      }));
    }));
  }));
}
_c = Gallery;

var _c;

$RefreshReg$(_c, "Gallery");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYWxsZXJ5LmpzeCJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwicHJvcHMiLCJjaHVuayIsImltYWdlcyIsIm1hcCIsImkiLCJyZXBsYWNlIiwiTWF0aCIsInJvdW5kIiwibGVuZ3RoIiwic2xpY2UiLCJjb2x1bW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFBOztBQUNyQyxTQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFQyw0Q0FBSyxDQUFDRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxPQUFGLENBQVUsU0FBVixFQUFxQixFQUFyQixDQUFKO0FBQUEsR0FBbEIsQ0FBRCxFQUFrREMsSUFBSSxDQUFDQyxLQUFMLENBQVdQLEtBQUssQ0FBQ0UsTUFBTixDQUFhTSxNQUFiLEdBQW9CLENBQS9CLENBQWxELENBQUwsQ0FBMEZDLEtBQTFGLENBQWdHLENBQWhHLEVBQW1HLENBQW5HLEVBQXNHTixHQUF0RyxDQUNBLFVBQUNPLE1BQUQ7QUFBQSxXQUNDO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFQSxNQUFNLENBQUNQLEdBQVAsQ0FBVyxVQUFBQyxDQUFDO0FBQUEsYUFDZjtBQUFHLFlBQUksRUFBRUEsQ0FBQyxDQUFDQyxPQUFGLENBQVUsUUFBVixFQUFvQixFQUFwQixDQUFUO0FBQWtDLGlCQUFTLEVBQUMsYUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNzQixNQUFDLDZFQUFEO0FBQWUsaUJBQVMsRUFBQyxjQUF6QjtBQUF3QyxXQUFHLEVBQUVELENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEdEIsQ0FEZTtBQUFBLEtBQVosQ0FERixDQUREO0FBQUEsR0FEQSxDQURGLENBREY7QUFnQkQ7S0FqQnVCTCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luc3BvLjQ1YWQwYzdmNDU2ODEyYTU0MjEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2h1bmsgZnJvbSBcImNodW5rXCJcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtMjBcIj5cclxuICAgIFx0e2NodW5rKHByb3BzLmltYWdlcy5tYXAoaSA9PiBpLnJlcGxhY2UoXCJwdWJsaWMvXCIsIFwiXCIpKSwgTWF0aC5yb3VuZChwcm9wcy5pbWFnZXMubGVuZ3RoLzUpKS5zbGljZSgwLCA1KS5tYXAoXHJcbiAgICBcdFx0KGNvbHVtbikgPT4gKFxyXG4gICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNVwiPlxyXG4gICAgXHRcdFx0XHR7Y29sdW1uLm1hcChpID0+IChcclxuXHRcdFx0XHRcdFx0PGEgaHJlZj17aS5yZXBsYWNlKFwidGh1bWIuXCIsIFwiXCIpfSBjbGFzc05hbWU9XCJnYWxsZXJ5TGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2UgY2xhc3NOYW1lPVwiZ2FsbGVyeUltYWdlXCIgc3JjPXtpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIFx0XHRcdFx0KSl9XHJcbiAgICBcdFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQpXHJcbiAgICBcdClcclxuXHRcdH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=