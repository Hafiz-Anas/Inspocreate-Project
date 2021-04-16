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
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('name', 'value');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYXV0aC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzdGF0ZSIsImFjdGlvbnMiLCJ1cGRhdGVTdGF0ZSIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwidXNlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb29raWVzIiwic2V0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY2xlYXIiLCJzZXRTdGF0ZSIsInVzZXJPYmplY3QiLCJwYXJzZSIsImUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiY29udGV4dCIsImNoaWxkcmVuIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQztBQUN4Q0MsT0FBSyxFQUFFLElBRGlDO0FBRXhDQyxTQUFPLEVBQUU7QUFDUkMsZUFBVyxFQUFFLE1BQU0sQ0FBRTtBQURiO0FBRitCLENBQUQsQ0FBakM7QUFPQSxNQUFNQyxtQkFBTixTQUFrQ0MsK0NBQWxDLENBQTRDO0FBQ2xEQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOOztBQURrQix3TEFhSk4sS0FBRCxJQUFXO0FBQ3hCLFVBQUlBLEtBQUosRUFBVztBQUNWLGNBQU1PLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVULEtBQWYsQ0FBYjtBQUNBVSx3REFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQixPQUFwQjs7QUFDQSxZQUFJWCxLQUFLLENBQUNZLEtBQVYsRUFBaUI7QUFDaEJDLHNCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJkLEtBQUssQ0FBQ1ksS0FBcEM7QUFDQTtBQUNELE9BTkQsTUFNTztBQUNOQyxvQkFBWSxDQUFDRSxLQUFiO0FBQ0E7O0FBQ0QsV0FBS0MsUUFBTCxDQUFjaEIsS0FBZDtBQUNBLEtBeEJrQjs7QUFFbEIsVUFBTU8sSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQW5COztBQUNBLFFBQUlBLElBQUosRUFBVTtBQUNULFVBQUk7QUFDSCxjQUFNVSxVQUFVLEdBQUdULElBQUksQ0FBQ1UsS0FBTCxDQUFXWCxJQUFYLENBQW5CO0FBQ0EsYUFBS1AsS0FBTCxHQUFhaUIsVUFBYjtBQUNBLE9BSEQsQ0FHRSxPQUFPRSxDQUFQLEVBQVU7QUFDWEMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQTtBQUNEO0FBQ0Q7O0FBY0RHLFFBQU0sR0FBRztBQUNSLFVBQU1DLE9BQU8sR0FBRztBQUNmdkIsV0FBSyxFQUFFLEtBQUtBLEtBREc7QUFFZkMsYUFBTyxFQUFFO0FBQ1JDLG1CQUFXLEVBQUUsS0FBS0E7QUFEVjtBQUZNLEtBQWhCO0FBTUEsd0JBQ0MscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsV0FBSyxFQUFFcUIsT0FBN0I7QUFBQSxnQkFDRSxLQUFLakIsS0FBTCxDQUFXa0I7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFLQTs7QUF0Q2lEO0FBd0M1QyxTQUFTQyxrQkFBVCxDQUE0QjtBQUFFQyxLQUFGO0FBQU9DO0FBQVAsQ0FBNUIsRUFBMEM7QUFDaERQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLCtDQUFaLEVBQTZESyxHQUFHLENBQUNoQixPQUFqRTtBQUNBLFNBQU87QUFBRUosU0FBSyxFQUFFO0FBQUVDLFVBQUksRUFBRW1CLEdBQUcsQ0FBQ2hCLE9BQUosQ0FBWUgsSUFBWixJQUFvQjtBQUE1QjtBQUFULEdBQVA7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MmFiYWQ4MWE2NjUxMjUzZTA5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuXHRzdGF0ZTogbnVsbCxcblx0YWN0aW9uczoge1xuXHRcdHVwZGF0ZVN0YXRlOiAoKSA9PiB7fSxcblx0fSxcbn0pO1xuXG5leHBvcnQgY2xhc3MgQXV0aENvbnRleHRQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdGNvbnN0IHVzZXIgPSBwcm9wcy51c2VyO1xuXHRcdGlmICh1c2VyKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB1c2VyT2JqZWN0ID0gSlNPTi5wYXJzZSh1c2VyKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IHVzZXJPYmplY3Q7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVN0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0aWYgKHN0YXRlKSB7XG5cdFx0XHRjb25zdCB1c2VyID0gSlNPTi5zdHJpbmdpZnkoc3RhdGUpO1xuXHRcdFx0Y29va2llcy5zZXQoJ25hbWUnLCAndmFsdWUnKTtcblx0XHRcdGlmIChzdGF0ZS50b2tlbikge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBzdGF0ZS50b2tlbik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcblx0fTtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGNvbnRleHQgPSB7XG5cdFx0XHRzdGF0ZTogdGhpcy5zdGF0ZSxcblx0XHRcdGFjdGlvbnM6IHtcblx0XHRcdFx0dXBkYXRlU3RhdGU6IHRoaXMudXBkYXRlU3RhdGUsXG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xuXHRjb25zb2xlLmxvZygnQXV0aENvbnRleHRQcm92aWRlciA9PiBnZXRTZXJ2ZXJTaWRlUHJvcHMgPT4gJywgcmVxLmNvb2tpZXMpO1xuXHRyZXR1cm4geyBwcm9wczogeyB1c2VyOiByZXEuY29va2llcy51c2VyIHx8ICcnIH0gfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=