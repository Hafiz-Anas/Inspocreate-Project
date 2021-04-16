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



function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toGMTString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}

function checkCookie() {
  var user = getCookie('username');

  if (user != '') {
    alert('Welcome again ' + user);
  } else {
    user = prompt('Please enter your name:', '');

    if (user != '' && user != null) {
      setCookie('username', user, 30);
    }
  }
}

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
      lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYXV0aC5qcyJdLCJuYW1lcyI6WyJzZXRDb29raWUiLCJjbmFtZSIsImN2YWx1ZSIsImV4ZGF5cyIsImQiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9HTVRTdHJpbmciLCJkb2N1bWVudCIsImNvb2tpZSIsImdldENvb2tpZSIsIm5hbWUiLCJkZWNvZGVkQ29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2EiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNoZWNrQ29va2llIiwidXNlciIsImFsZXJ0IiwicHJvbXB0IiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwic3RhdGUiLCJhY3Rpb25zIiwidXBkYXRlU3RhdGUiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJjbGVhciIsInNldFN0YXRlIiwidXNlck9iamVjdCIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJjb250ZXh0IiwiY2hpbGRyZW4iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJjb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxNQUExQixFQUFrQ0MsTUFBbEMsRUFBMEM7QUFDekMsTUFBSUMsQ0FBQyxHQUFHLElBQUlDLElBQUosRUFBUjtBQUNBRCxHQUFDLENBQUNFLE9BQUYsQ0FBVUYsQ0FBQyxDQUFDRyxPQUFGLEtBQWNKLE1BQU0sR0FBRyxFQUFULEdBQWMsRUFBZCxHQUFtQixFQUFuQixHQUF3QixJQUFoRDtBQUNBLE1BQUlL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UixDQUFZRixDQUFaO0FBQ0E7QUFDRDtBQUNEOztBQWNERyxRQUFNLEdBQUc7QUFDUixVQUFNQyxPQUFPLEdBQUc7QUFDZnBCLFdBQUssRUFBRSxLQUFLQSxLQURHO0FBRWZDLGFBQU8sRUFBRTtBQUNSQyxtQkFBVyxFQUFFLEtBQUtBO0FBRFY7QUFGTSxLQUFoQjtBQU1BLHdCQUNDLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRWtCLE9BQTdCO0FBQUEsZ0JBQ0UsS0FBS2QsS0FBTCxDQUFXZTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQUtBOztBQXRDaUQ7QUF3QzVDLFNBQVNDLGtCQUFULENBQTRCO0FBQUVDLEtBQUY7QUFBT0M7QUFBUCxDQUE1QixFQUEwQztBQUNoRFAsU0FBTyxDQUFDQyxHQUFSLENBQVksK0NBQVosRUFBNkRLLEdBQUcsQ0FBQ0UsT0FBakU7QUFDQSxTQUFPO0FBQUVuQixTQUFLLEVBQUU7QUFBRVgsVUFBSSxFQUFFNEIsR0FBRyxDQUFDRSxPQUFKLENBQVk5QixJQUFaLElBQW9CO0FBQTVCO0FBQVQsR0FBUDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBlNGJmNjExOTRhZmJjOGVhZDczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuXG5mdW5jdGlvbiBzZXRDb29raWUoY25hbWUsIGN2YWx1ZSwgZXhkYXlzKSB7XG5cdHZhciBkID0gbmV3IERhdGUoKTtcblx0ZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cdHZhciBleHBpcmVzID0gJ2V4cGlyZXM9JyArIGQudG9HTVRTdHJpbmcoKTtcblx0ZG9jdW1lbnQuY29va2llID0gY25hbWUgKyAnPScgKyBjdmFsdWUgKyAnOycgKyBleHBpcmVzICsgJztwYXRoPS8nO1xufVxuXG5mdW5jdGlvbiBnZXRDb29raWUoY25hbWUpIHtcblx0dmFyIG5hbWUgPSBjbmFtZSArICc9Jztcblx0dmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcblx0dmFyIGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGMgPSBjYVtpXTtcblx0XHR3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XG5cdFx0XHRjID0gYy5zdWJzdHJpbmcoMSk7XG5cdFx0fVxuXHRcdGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xuXHRcdFx0cmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gY2hlY2tDb29raWUoKSB7XG5cdHZhciB1c2VyID0gZ2V0Q29va2llKCd1c2VybmFtZScpO1xuXHRpZiAodXNlciAhPSAnJykge1xuXHRcdGFsZXJ0KCdXZWxjb21lIGFnYWluICcgKyB1c2VyKTtcblx0fSBlbHNlIHtcblx0XHR1c2VyID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgeW91ciBuYW1lOicsICcnKTtcblx0XHRpZiAodXNlciAhPSAnJyAmJiB1c2VyICE9IG51bGwpIHtcblx0XHRcdHNldENvb2tpZSgndXNlcm5hbWUnLCB1c2VyLCAzMCk7XG5cdFx0fVxuXHR9XG59XG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcblx0c3RhdGU6IG51bGwsXG5cdGFjdGlvbnM6IHtcblx0XHR1cGRhdGVTdGF0ZTogKCkgPT4ge30sXG5cdH0sXG59KTtcblxuZXhwb3J0IGNsYXNzIEF1dGhDb250ZXh0UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHRjb25zdCB1c2VyID0gcHJvcHMudXNlcjtcblx0XHRpZiAodXNlcikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgdXNlck9iamVjdCA9IEpTT04ucGFyc2UodXNlcik7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSB1c2VyT2JqZWN0O1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR1cGRhdGVTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHRcdGlmIChzdGF0ZSkge1xuXHRcdFx0Y29uc3QgdXNlciA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgdXNlcik7XG5cdFx0XHRpZiAoc3RhdGUudG9rZW4pIHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgc3RhdGUudG9rZW4pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cdH07XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBjb250ZXh0ID0ge1xuXHRcdFx0c3RhdGU6IHRoaXMuc3RhdGUsXG5cdFx0XHRhY3Rpb25zOiB7XG5cdFx0XHRcdHVwZGF0ZVN0YXRlOiB0aGlzLnVwZGF0ZVN0YXRlLFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG5cdFx0KTtcblx0fVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcblx0Y29uc29sZS5sb2coJ0F1dGhDb250ZXh0UHJvdmlkZXIgPT4gZ2V0U2VydmVyU2lkZVByb3BzID0+ICcsIHJlcS5jb29raWVzKTtcblx0cmV0dXJuIHsgcHJvcHM6IHsgdXNlcjogcmVxLmNvb2tpZXMudXNlciB8fCAnJyB9IH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9