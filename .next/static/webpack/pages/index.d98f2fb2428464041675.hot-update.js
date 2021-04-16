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
        });

        if (state.token) {
          js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('user', state.token);
        }
      } else {
        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('user');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYXV0aC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzdGF0ZSIsImFjdGlvbnMiLCJ1cGRhdGVTdGF0ZSIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwidXNlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwidG9rZW4iLCJyZW1vdmUiLCJzZXRTdGF0ZSIsInVzZXJPYmplY3QiLCJwYXJzZSIsImUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiY29udGV4dCIsImNoaWxkcmVuIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVzIiwiY29va2llcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUM7QUFDeENDLE9BQUssRUFBRSxJQURpQztBQUV4Q0MsU0FBTyxFQUFFO0FBQ1JDLGVBQVcsRUFBRSxNQUFNLENBQUU7QUFEYjtBQUYrQixDQUFELENBQWpDO0FBT0EsTUFBTUMsbUJBQU4sU0FBa0NDLCtDQUFsQyxDQUE0QztBQUNsREMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDbEIsVUFBTUEsS0FBTjs7QUFEa0Isd0xBYUpOLEtBQUQsSUFBVztBQUN4QixVQUFJQSxLQUFKLEVBQVc7QUFDVixjQUFNTyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxLQUFmLENBQWI7QUFDQVUsd0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLE1BQVgsRUFBbUJKLElBQW5CLEVBQXlCO0FBQUVLLGlCQUFPLEVBQUU7QUFBWCxTQUF6Qjs7QUFDQSxZQUFJWixLQUFLLENBQUNhLEtBQVYsRUFBaUI7QUFDaEJILDBEQUFNLENBQUNDLEdBQVAsQ0FBVyxNQUFYLEVBQW1CWCxLQUFLLENBQUNhLEtBQXpCO0FBQ0E7QUFDRCxPQU5ELE1BTU87QUFDTkgsd0RBQU0sQ0FBQ0ksTUFBUCxDQUFjLE1BQWQ7QUFDQTs7QUFDRCxXQUFLQyxRQUFMLENBQWNmLEtBQWQ7QUFDQSxLQXhCa0I7O0FBRWxCLFVBQU1PLEtBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFuQjs7QUFDQSxRQUFJQSxLQUFKLEVBQVU7QUFDVCxVQUFJO0FBQ0gsY0FBTVMsVUFBVSxHQUFHUixJQUFJLENBQUNTLEtBQUwsQ0FBV1YsS0FBWCxDQUFuQjtBQUNBLGFBQUtQLEtBQUwsR0FBYWdCLFVBQWI7QUFDQSxPQUhELENBR0UsT0FBT0UsQ0FBUCxFQUFVO0FBQ1hDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0E7QUFDRDtBQUNEOztBQWNERyxRQUFNLEdBQUc7QUFDUixVQUFNQyxPQUFPLEdBQUc7QUFDZnRCLFdBQUssRUFBRSxLQUFLQSxLQURHO0FBRWZDLGFBQU8sRUFBRTtBQUNSQyxtQkFBVyxFQUFFLEtBQUtBO0FBRFY7QUFGTSxLQUFoQjtBQU1BLHdCQUNDLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRW9CLE9BQTdCO0FBQUEsZ0JBQ0UsS0FBS2hCLEtBQUwsQ0FBV2lCO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBS0E7O0FBdENpRDtBQXdDNUMsU0FBU0Msa0JBQVQsQ0FBNEI7QUFBRUMsS0FBRjtBQUFPQztBQUFQLENBQTVCLEVBQTBDO0FBQ2hEUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSwrQ0FBWixFQUE2REssR0FBRyxDQUFDRSxPQUFqRTtBQUNBLFNBQU87QUFBRXJCLFNBQUssRUFBRTtBQUFFQyxVQUFJLEVBQUVrQixHQUFHLENBQUNFLE9BQUosQ0FBWXBCLElBQVosSUFBb0I7QUFBNUI7QUFBVCxHQUFQO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDk4ZjJmYjI0Mjg0NjQwNDE2NzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuXHRzdGF0ZTogbnVsbCxcblx0YWN0aW9uczoge1xuXHRcdHVwZGF0ZVN0YXRlOiAoKSA9PiB7fSxcblx0fSxcbn0pO1xuXG5leHBvcnQgY2xhc3MgQXV0aENvbnRleHRQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdGNvbnN0IHVzZXIgPSBwcm9wcy51c2VyO1xuXHRcdGlmICh1c2VyKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB1c2VyT2JqZWN0ID0gSlNPTi5wYXJzZSh1c2VyKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IHVzZXJPYmplY3Q7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVN0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0aWYgKHN0YXRlKSB7XG5cdFx0XHRjb25zdCB1c2VyID0gSlNPTi5zdHJpbmdpZnkoc3RhdGUpO1xuXHRcdFx0Y29va2llLnNldCgndXNlcicsIHVzZXIsIHsgZXhwaXJlczogNyB9KTtcblx0XHRcdGlmIChzdGF0ZS50b2tlbikge1xuXHRcdFx0XHRjb29raWUuc2V0KCd1c2VyJywgc3RhdGUudG9rZW4pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb29raWUucmVtb3ZlKCd1c2VyJyk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXHR9O1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgY29udGV4dCA9IHtcblx0XHRcdHN0YXRlOiB0aGlzLnN0YXRlLFxuXHRcdFx0YWN0aW9uczoge1xuXHRcdFx0XHR1cGRhdGVTdGF0ZTogdGhpcy51cGRhdGVTdGF0ZSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuXHRcdCk7XG5cdH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XG5cdGNvbnNvbGUubG9nKCdBdXRoQ29udGV4dFByb3ZpZGVyID0+IGdldFNlcnZlclNpZGVQcm9wcyA9PiAnLCByZXEuY29va2llcyk7XG5cdHJldHVybiB7IHByb3BzOiB7IHVzZXI6IHJlcS5jb29raWVzLnVzZXIgfHwgJycgfSB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==