webpackHotUpdate_N_E("pages/index",{

/***/ "./src/context/auth.js":
/*!*****************************!*\
  !*** ./src/context/auth.js ***!
  \*****************************/
/*! exports provided: AuthContext, AuthContextProvider, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Digicrym_Documents_inspocreate_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\context\\auth.js";


const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({
  state: null,
  actions: {
    updateState: () => {}
  }
});
class AuthContextProvider extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(C_Users_Digicrym_Documents_inspocreate_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "updateState", state => {
      if (state) {
        const user = JSON.stringify(state);
        localStorage.setItem('user', user);

        if (state.token) {
          localStorage.setItem('token', state.token);
        }
      } else {
        localStorage.clear();
      }

      this.setState(state);
    });

    const _user = props.user;

    if (_user) {
      try {
        const userObject = JSON.parse(_user);
        this.state = userObject;
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {
    const context = {
      state: this.state,
      actions: {
        updateState: this.updateState
      }
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
      value: context,
      children: this.props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this);
  }

}
function getServerSideProps({
  req,
  res
}) {
  console.log('AuthContextProvider => getServerSideProps => ', req.cookies);
  return {
    props: {
      user: req.cookies.user || ''
    }
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYXV0aC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzdGF0ZSIsImFjdGlvbnMiLCJ1cGRhdGVTdGF0ZSIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwidXNlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJjbGVhciIsInNldFN0YXRlIiwidXNlck9iamVjdCIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJjb250ZXh0IiwiY2hpbGRyZW4iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJjb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQztBQUN4Q0MsT0FBSyxFQUFFLElBRGlDO0FBRXhDQyxTQUFPLEVBQUU7QUFDUkMsZUFBVyxFQUFFLE1BQU0sQ0FBRTtBQURiO0FBRitCLENBQUQsQ0FBakM7QUFPQSxNQUFNQyxtQkFBTixTQUFrQ0MsK0NBQWxDLENBQTRDO0FBQ2xEQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOOztBQURrQix3TEFhSk4sS0FBRCxJQUFXO0FBQ3hCLFVBQUlBLEtBQUosRUFBVztBQUNWLGNBQU1PLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVULEtBQWYsQ0FBYjtBQUNBVSxvQkFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCSixJQUE3Qjs7QUFDQSxZQUFJUCxLQUFLLENBQUNZLEtBQVYsRUFBaUI7QUFDaEJGLHNCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJYLEtBQUssQ0FBQ1ksS0FBcEM7QUFDQTtBQUNELE9BTkQsTUFNTztBQUNORixvQkFBWSxDQUFDRyxLQUFiO0FBQ0E7O0FBQ0QsV0FBS0MsUUFBTCxDQUFjZCxLQUFkO0FBQ0EsS0F4QmtCOztBQUVsQixVQUFNTyxLQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBbkI7O0FBQ0EsUUFBSUEsS0FBSixFQUFVO0FBQ1QsVUFBSTtBQUNILGNBQU1RLFVBQVUsR0FBR1AsSUFBSSxDQUFDUSxLQUFMLENBQVdULEtBQVgsQ0FBbkI7QUFDQSxhQUFLUCxLQUFMLEdBQWFlLFVBQWI7QUFDQSxPQUhELENBR0UsT0FBT0UsQ0FBUCxFQUFVO0FBQ1hDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0E7QUFDRDtBQUNEOztBQWNERyxRQUFNLEdBQUc7QUFDUixVQUFNQyxPQUFPLEdBQUc7QUFDZnJCLFdBQUssRUFBRSxLQUFLQSxLQURHO0FBRWZDLGFBQU8sRUFBRTtBQUNSQyxtQkFBVyxFQUFFLEtBQUtBO0FBRFY7QUFGTSxLQUFoQjtBQU1BLHdCQUNDLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRW1CLE9BQTdCO0FBQUEsZ0JBQ0UsS0FBS2YsS0FBTCxDQUFXZ0I7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFLQTs7QUF0Q2lEO0FBd0M1QyxTQUFTQyxrQkFBVCxDQUE0QjtBQUFFQyxLQUFGO0FBQU9DO0FBQVAsQ0FBNUIsRUFBMEM7QUFDaERQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLCtDQUFaLEVBQTZESyxHQUFHLENBQUNFLE9BQWpFO0FBQ0EsU0FBTztBQUFFcEIsU0FBSyxFQUFFO0FBQUVDLFVBQUksRUFBRWlCLEdBQUcsQ0FBQ0UsT0FBSixDQUFZbkIsSUFBWixJQUFvQjtBQUE1QjtBQUFULEdBQVA7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kOTk3NDZhYzZlZWE5OTllMDliNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG5cdHN0YXRlOiBudWxsLFxuXHRhY3Rpb25zOiB7XG5cdFx0dXBkYXRlU3RhdGU6ICgpID0+IHt9LFxuXHR9LFxufSk7XG5cbmV4cG9ydCBjbGFzcyBBdXRoQ29udGV4dFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0Y29uc3QgdXNlciA9IHByb3BzLnVzZXI7XG5cdFx0aWYgKHVzZXIpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHVzZXJPYmplY3QgPSBKU09OLnBhcnNlKHVzZXIpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gdXNlck9iamVjdDtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlU3RhdGUgPSAoc3RhdGUpID0+IHtcblx0XHRpZiAoc3RhdGUpIHtcblx0XHRcdGNvbnN0IHVzZXIgPSBKU09OLnN0cmluZ2lmeShzdGF0ZSk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIHVzZXIpO1xuXHRcdFx0aWYgKHN0YXRlLnRva2VuKSB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHN0YXRlLnRva2VuKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXHR9O1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgY29udGV4dCA9IHtcblx0XHRcdHN0YXRlOiB0aGlzLnN0YXRlLFxuXHRcdFx0YWN0aW9uczoge1xuXHRcdFx0XHR1cGRhdGVTdGF0ZTogdGhpcy51cGRhdGVTdGF0ZSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuXHRcdCk7XG5cdH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XG5cdGNvbnNvbGUubG9nKCdBdXRoQ29udGV4dFByb3ZpZGVyID0+IGdldFNlcnZlclNpZGVQcm9wcyA9PiAnLCByZXEuY29va2llcyk7XG5cdHJldHVybiB7IHByb3BzOiB7IHVzZXI6IHJlcS5jb29raWVzLnVzZXIgfHwgJycgfSB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==