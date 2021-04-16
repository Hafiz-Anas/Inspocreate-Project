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

        const setCookie = (cname, cvalue, exdays) => {
          var d = new Date();
          d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
          var expires = 'expires=' + d.toGMTString();
          document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
        };

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
      lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYXV0aC5qcyJdLCJuYW1lcyI6WyJzZXRDb29raWUiLCJjbmFtZSIsImN2YWx1ZSIsImV4ZGF5cyIsImQiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9HTVRTdHJpbmciLCJkb2N1bWVudCIsImNvb2tpZSIsImdldENvb2tpZSIsIm5hbWUiLCJkZWNvZGVkQ29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2EiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNoZWNrQ29va2llIiwidXNlciIsImFsZXJ0IiwicHJvbXB0IiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwic3RhdGUiLCJhY3Rpb25zIiwidXBkYXRlU3RhdGUiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJjbGVhciIsInNldFN0YXRlIiwidXNlck9iamVjdCIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJjb250ZXh0IiwiY2hpbGRyZW4iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJjb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxNQUExQixFQUFrQ0MsTUFBbEMsRUFBMEM7QUFDekMsTUFBSUMsQ0FBQyxHQUFHLElBQUlDLElBQUosRUFBUjtBQUNBRCxHQUFDLENBQUNFLE9BQUYsQ0FBVUYsQ0FBQyxDQUFDRyxPQUFGLEtBQWNKLE1BQU0sR0FBRyxFQUFULEdBQWMsRUFBZCxHQUFtQixFQUFuQixHQUF3QixJQUFoRDtBQUNBLE1BQUlL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MTAxZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmZ1bmN0aW9uIHNldENvb2tpZShjbmFtZSwgY3ZhbHVlLCBleGRheXMpIHtcblx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyBleGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblx0dmFyIGV4cGlyZXMgPSAnZXhwaXJlcz0nICsgZC50b0dNVFN0cmluZygpO1xuXHRkb2N1bWVudC5jb29raWUgPSBjbmFtZSArICc9JyArIGN2YWx1ZSArICc7JyArIGV4cGlyZXMgKyAnO3BhdGg9Lyc7XG59XG5cbmZ1bmN0aW9uIGdldENvb2tpZShjbmFtZSkge1xuXHR2YXIgbmFtZSA9IGNuYW1lICsgJz0nO1xuXHR2YXIgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xuXHR2YXIgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgYyA9IGNhW2ldO1xuXHRcdHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcblx0XHRcdGMgPSBjLnN1YnN0cmluZygxKTtcblx0XHR9XG5cdFx0aWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XG5cdFx0XHRyZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBjaGVja0Nvb2tpZSgpIHtcblx0dmFyIHVzZXIgPSBnZXRDb29raWUoJ3VzZXJuYW1lJyk7XG5cdGlmICh1c2VyICE9ICcnKSB7XG5cdFx0YWxlcnQoJ1dlbGNvbWUgYWdhaW4gJyArIHVzZXIpO1xuXHR9IGVsc2Uge1xuXHRcdHVzZXIgPSBwcm9tcHQoJ1BsZWFzZSBlbnRlciB5b3VyIG5hbWU6JywgJycpO1xuXHRcdGlmICh1c2VyICE9ICcnICYmIHVzZXIgIT0gbnVsbCkge1xuXHRcdFx0c2V0Q29va2llKCd1c2VybmFtZScsIHVzZXIsIDMwKTtcblx0XHR9XG5cdH1cbn1cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuXHRzdGF0ZTogbnVsbCxcblx0YWN0aW9uczoge1xuXHRcdHVwZGF0ZVN0YXRlOiAoKSA9PiB7fSxcblx0fSxcbn0pO1xuXG5leHBvcnQgY2xhc3MgQXV0aENvbnRleHRQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdGNvbnN0IHVzZXIgPSBwcm9wcy51c2VyO1xuXHRcdGlmICh1c2VyKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB1c2VyT2JqZWN0ID0gSlNPTi5wYXJzZSh1c2VyKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IHVzZXJPYmplY3Q7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVN0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0aWYgKHN0YXRlKSB7XG5cdFx0XHRjb25zdCB1c2VyID0gSlNPTi5zdHJpbmdpZnkoc3RhdGUpO1xuXG5cdFx0XHRjb25zdCBzZXRDb29raWUgPSAoY25hbWUsIGN2YWx1ZSwgZXhkYXlzKSA9PiB7XG5cdFx0XHRcdHZhciBkID0gbmV3IERhdGUoKTtcblx0XHRcdFx0ZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cdFx0XHRcdHZhciBleHBpcmVzID0gJ2V4cGlyZXM9JyArIGQudG9HTVRTdHJpbmcoKTtcblx0XHRcdFx0ZG9jdW1lbnQuY29va2llID0gY25hbWUgKyAnPScgKyBjdmFsdWUgKyAnOycgKyBleHBpcmVzICsgJztwYXRoPS8nO1xuXHRcdFx0fVxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCB1c2VyKTtcblx0XHRcdGlmIChzdGF0ZS50b2tlbikge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBzdGF0ZS50b2tlbik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcblx0fTtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGNvbnRleHQgPSB7XG5cdFx0XHRzdGF0ZTogdGhpcy5zdGF0ZSxcblx0XHRcdGFjdGlvbnM6IHtcblx0XHRcdFx0dXBkYXRlU3RhdGU6IHRoaXMudXBkYXRlU3RhdGUsXG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xuXHRjb25zb2xlLmxvZygnQXV0aENvbnRleHRQcm92aWRlciA9PiBnZXRTZXJ2ZXJTaWRlUHJvcHMgPT4gJywgcmVxLmNvb2tpZXMpO1xuXHRyZXR1cm4geyBwcm9wczogeyB1c2VyOiByZXEuY29va2llcy51c2VyIHx8ICcnIH0gfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=