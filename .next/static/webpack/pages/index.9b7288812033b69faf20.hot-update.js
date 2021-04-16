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
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set;

        if (state.token) {
          localStorage.setItem('token', state.token);
        }
      } else {
        localStorage.clear();
      }

      this.setState(state);
    });

    const user = props.user;

    if (user) {
      try {
        const userObject = JSON.parse(user);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYXV0aC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzdGF0ZSIsImFjdGlvbnMiLCJ1cGRhdGVTdGF0ZSIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwidXNlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb29raWUiLCJzZXQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjbGVhciIsInNldFN0YXRlIiwidXNlck9iamVjdCIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJjb250ZXh0IiwiY2hpbGRyZW4iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJjb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQztBQUN4Q0MsT0FBSyxFQUFFLElBRGlDO0FBRXhDQyxTQUFPLEVBQUU7QUFDUkMsZUFBVyxFQUFFLE1BQU0sQ0FBRTtBQURiO0FBRitCLENBQUQsQ0FBakM7QUFPQSxNQUFNQyxtQkFBTixTQUFrQ0MsK0NBQWxDLENBQTRDO0FBQ2xEQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOOztBQURrQix3TEFhSk4sS0FBRCxJQUFXO0FBQ3hCLFVBQUlBLEtBQUosRUFBVztBQUNWLGNBQU1PLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVULEtBQWYsQ0FBYjtBQUNBVSx3REFBTSxDQUFDQyxHQUFQOztBQUNBLFlBQUlYLEtBQUssQ0FBQ1ksS0FBVixFQUFpQjtBQUNoQkMsc0JBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QmQsS0FBSyxDQUFDWSxLQUFwQztBQUNBO0FBQ0QsT0FORCxNQU1PO0FBQ05DLG9CQUFZLENBQUNFLEtBQWI7QUFDQTs7QUFDRCxXQUFLQyxRQUFMLENBQWNoQixLQUFkO0FBQ0EsS0F4QmtCOztBQUVsQixVQUFNTyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBbkI7O0FBQ0EsUUFBSUEsSUFBSixFQUFVO0FBQ1QsVUFBSTtBQUNILGNBQU1VLFVBQVUsR0FBR1QsSUFBSSxDQUFDVSxLQUFMLENBQVdYLElBQVgsQ0FBbkI7QUFDQSxhQUFLUCxLQUFMLEdBQWFpQixVQUFiO0FBQ0EsT0FIRCxDQUdFLE9BQU9FLENBQVAsRUFBVTtBQUNYQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBO0FBQ0Q7QUFDRDs7QUFjREcsUUFBTSxHQUFHO0FBQ1IsVUFBTUMsT0FBTyxHQUFHO0FBQ2Z2QixXQUFLLEVBQUUsS0FBS0EsS0FERztBQUVmQyxhQUFPLEVBQUU7QUFDUkMsbUJBQVcsRUFBRSxLQUFLQTtBQURWO0FBRk0sS0FBaEI7QUFNQSx3QkFDQyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUVxQixPQUE3QjtBQUFBLGdCQUNFLEtBQUtqQixLQUFMLENBQVdrQjtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQUtBOztBQXRDaUQ7QUF3QzVDLFNBQVNDLGtCQUFULENBQTRCO0FBQUVDLEtBQUY7QUFBT0M7QUFBUCxDQUE1QixFQUEwQztBQUNoRFAsU0FBTyxDQUFDQyxHQUFSLENBQVksK0NBQVosRUFBNkRLLEdBQUcsQ0FBQ0UsT0FBakU7QUFDQSxTQUFPO0FBQUV0QixTQUFLLEVBQUU7QUFBRUMsVUFBSSxFQUFFbUIsR0FBRyxDQUFDRSxPQUFKLENBQVlyQixJQUFaLElBQW9CO0FBQTVCO0FBQVQsR0FBUDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjliNzI4ODgxMjAzM2I2OWZhZjIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcblx0c3RhdGU6IG51bGwsXG5cdGFjdGlvbnM6IHtcblx0XHR1cGRhdGVTdGF0ZTogKCkgPT4ge30sXG5cdH0sXG59KTtcblxuZXhwb3J0IGNsYXNzIEF1dGhDb250ZXh0UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHRjb25zdCB1c2VyID0gcHJvcHMudXNlcjtcblx0XHRpZiAodXNlcikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgdXNlck9iamVjdCA9IEpTT04ucGFyc2UodXNlcik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSB1c2VyT2JqZWN0O1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR1cGRhdGVTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHRcdGlmIChzdGF0ZSkge1xuXHRcdFx0Y29uc3QgdXNlciA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcblx0XHRcdGNvb2tpZS5zZXRcblx0XHRcdGlmIChzdGF0ZS50b2tlbikge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBzdGF0ZS50b2tlbik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcblx0fTtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGNvbnRleHQgPSB7XG5cdFx0XHRzdGF0ZTogdGhpcy5zdGF0ZSxcblx0XHRcdGFjdGlvbnM6IHtcblx0XHRcdFx0dXBkYXRlU3RhdGU6IHRoaXMudXBkYXRlU3RhdGUsXG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xuXHRjb25zb2xlLmxvZygnQXV0aENvbnRleHRQcm92aWRlciA9PiBnZXRTZXJ2ZXJTaWRlUHJvcHMgPT4gJywgcmVxLmNvb2tpZXMpO1xuXHRyZXR1cm4geyBwcm9wczogeyB1c2VyOiByZXEuY29va2llcy51c2VyIHx8ICcnIH0gfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=