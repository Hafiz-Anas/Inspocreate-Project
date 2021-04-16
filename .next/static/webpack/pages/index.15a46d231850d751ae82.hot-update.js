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
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('user', user, {
          expires: 7
        }); // localStorage.setItem('user', user);

        if (state.token) {
          js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('user', state.token); // localStorage.setItem('token', state.token);
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
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYXV0aC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzdGF0ZSIsImFjdGlvbnMiLCJ1cGRhdGVTdGF0ZSIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwidXNlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInNldFN0YXRlIiwidXNlck9iamVjdCIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJjb250ZXh0IiwiY2hpbGRyZW4iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJjb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQztBQUN4Q0MsT0FBSyxFQUFFLElBRGlDO0FBRXhDQyxTQUFPLEVBQUU7QUFDUkMsZUFBVyxFQUFFLE1BQU0sQ0FBRTtBQURiO0FBRitCLENBQUQsQ0FBakM7QUFPQSxNQUFNQyxtQkFBTixTQUFrQ0MsK0NBQWxDLENBQTRDO0FBQ2xEQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOOztBQURrQix3TEFhSk4sS0FBRCxJQUFXO0FBQ3hCLFVBQUlBLEtBQUosRUFBVztBQUNWLGNBQU1PLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVULEtBQWYsQ0FBYjtBQUNBVSx3REFBTSxDQUFDQyxHQUFQLENBQVcsTUFBWCxFQUFtQkosSUFBbkIsRUFBeUI7QUFBRUssaUJBQU8sRUFBRTtBQUFYLFNBQXpCLEVBRlUsQ0FHVjs7QUFDQSxZQUFJWixLQUFLLENBQUNhLEtBQVYsRUFBaUI7QUFDaEJILDBEQUFNLENBQUNDLEdBQVAsQ0FBVyxNQUFYLEVBQW1CWCxLQUFLLENBQUNhLEtBQXpCLEVBRGdCLENBRWhCO0FBQ0E7QUFDRCxPQVJELE1BUU87QUFDTkMsb0JBQVksQ0FBQ0MsS0FBYjtBQUNBOztBQUNELFdBQUtDLFFBQUwsQ0FBY2hCLEtBQWQ7QUFDQSxLQTFCa0I7O0FBRWxCLFVBQU1PLEtBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFuQjs7QUFDQSxRQUFJQSxLQUFKLEVBQVU7QUFDVCxVQUFJO0FBQ0gsY0FBTVUsVUFBVSxHQUFHVCxJQUFJLENBQUNVLEtBQUwsQ0FBV1gsS0FBWCxDQUFuQjtBQUNBLGFBQUtQLEtBQUwsR0FBYWlCLFVBQWI7QUFDQSxPQUhELENBR0UsT0FBT0UsQ0FBUCxFQUFVO0FBQ1hDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0E7QUFDRDtBQUNEOztBQWdCREcsUUFBTSxHQUFHO0FBQ1IsVUFBTUMsT0FBTyxHQUFHO0FBQ2Z2QixXQUFLLEVBQUUsS0FBS0EsS0FERztBQUVmQyxhQUFPLEVBQUU7QUFDUkMsbUJBQVcsRUFBRSxLQUFLQTtBQURWO0FBRk0sS0FBaEI7QUFNQSx3QkFDQyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUVxQixPQUE3QjtBQUFBLGdCQUNFLEtBQUtqQixLQUFMLENBQVdrQjtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQUtBOztBQXhDaUQ7QUEwQzVDLFNBQVNDLGtCQUFULENBQTRCO0FBQUVDLEtBQUY7QUFBT0M7QUFBUCxDQUE1QixFQUEwQztBQUNoRFAsU0FBTyxDQUFDQyxHQUFSLENBQVksK0NBQVosRUFBNkRLLEdBQUcsQ0FBQ0UsT0FBakU7QUFDQSxTQUFPO0FBQUV0QixTQUFLLEVBQUU7QUFBRUMsVUFBSSxFQUFFbUIsR0FBRyxDQUFDRSxPQUFKLENBQVlyQixJQUFaLElBQW9CO0FBQTVCO0FBQVQsR0FBUDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE1YTQ2ZDIzMTg1MGQ3NTFhZTgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcblx0c3RhdGU6IG51bGwsXG5cdGFjdGlvbnM6IHtcblx0XHR1cGRhdGVTdGF0ZTogKCkgPT4ge30sXG5cdH0sXG59KTtcblxuZXhwb3J0IGNsYXNzIEF1dGhDb250ZXh0UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHRjb25zdCB1c2VyID0gcHJvcHMudXNlcjtcblx0XHRpZiAodXNlcikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgdXNlck9iamVjdCA9IEpTT04ucGFyc2UodXNlcik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSB1c2VyT2JqZWN0O1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR1cGRhdGVTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHRcdGlmIChzdGF0ZSkge1xuXHRcdFx0Y29uc3QgdXNlciA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcblx0XHRcdGNvb2tpZS5zZXQoJ3VzZXInLCB1c2VyLCB7IGV4cGlyZXM6IDcgfSk7XG5cdFx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIHVzZXIpO1xuXHRcdFx0aWYgKHN0YXRlLnRva2VuKSB7XG5cdFx0XHRcdGNvb2tpZS5zZXQoJ3VzZXInLCBzdGF0ZS50b2tlbik7XG5cdFx0XHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHN0YXRlLnRva2VuKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXHR9O1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgY29udGV4dCA9IHtcblx0XHRcdHN0YXRlOiB0aGlzLnN0YXRlLFxuXHRcdFx0YWN0aW9uczoge1xuXHRcdFx0XHR1cGRhdGVTdGF0ZTogdGhpcy51cGRhdGVTdGF0ZSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuXHRcdCk7XG5cdH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XG5cdGNvbnNvbGUubG9nKCdBdXRoQ29udGV4dFByb3ZpZGVyID0+IGdldFNlcnZlclNpZGVQcm9wcyA9PiAnLCByZXEuY29va2llcyk7XG5cdHJldHVybiB7IHByb3BzOiB7IHVzZXI6IHJlcS5jb29raWVzLnVzZXIgfHwgJycgfSB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==