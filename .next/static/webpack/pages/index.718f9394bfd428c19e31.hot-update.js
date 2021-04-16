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
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
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

  return "";
}

function checkCookie() {
  var user = getCookie("username");

  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");

    if (user != "" && user != null) {
      setCookie("username", user, 30);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYXV0aC5qcyJdLCJuYW1lcyI6WyJzZXRDb29raWUiLCJjbmFtZSIsImN2YWx1ZSIsImV4ZGF5cyIsImQiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9HTVRTdHJpbmciLCJkb2N1bWVudCIsImNvb2tpZSIsImdldENvb2tpZSIsIm5hbWUiLCJkZWNvZGVkQ29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2EiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNoZWNrQ29va2llIiwidXNlciIsImFsZXJ0IiwicHJvbXB0IiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwic3RhdGUiLCJhY3Rpb25zIiwidXBkYXRlU3RhdGUiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJjbGVhciIsInNldFN0YXRlIiwidXNlck9iamVjdCIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJjb250ZXh0IiwiY2hpbGRyZW4iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJjb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQXlCQyxNQUF6QixFQUFnQ0MsTUFBaEMsRUFBd0M7QUFDdkMsTUFBSUMsQ0FBQyxHQUFHLElBQUlDLElBQUosRUFBUjtBQUNBRCxHQUFDLENBQUNFLE9BQUYsQ0FBVUYsQ0FBQyxDQUFDRyxPQUFGLEtBQWVKLE1BQU0sR0FBQyxFQUFQLEdBQVUsRUFBVixHQUFhLEVBQWIsR0FBZ0IsSUFBekM7QUFDQSxNQUFJSyxPQUFPLEdBQUcsYUFBYUosQ0FBQyxDQUFDSyxXQUFGLEVBQTNCO0FBQ0FDLFVBQVEsQ0FBQ0MsTUFBVCxHQUFrQlYsS0FBSyxHQUFHLEdBQVIsR0FBY0MsTUFBZCxHQUF1QixHQUF2QixHQUE2Qk0sT0FBN0IsR0FBdUMsU0FBekQ7QUFDQTs7QUFFRCxTQUFTSSxTQUFULENBQW1CWCxLQUFuQixFQUEwQjtBQUN6QixNQUFJWSxJQUFJLEdBQUdaLEtBQUssR0FBRyxHQUFuQjtBQUNBLE1BQUlhLGFBQWEsR0FBR0Msa0JBQWtCLENBQUNMLFFBQVEsQ0FBQ0MsTUFBVixDQUF0QztBQUNBLE1BQUlLLEVBQUUsR0FBR0YsYUFBYSxDQUFDRyxLQUFkLENBQW9CLEdBQXBCLENBQVQ7O0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdGLEVBQUUsQ0FBQ0csTUFBdEIsRUFBOEJELENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsUUFBSUUsQ0FBQyxHQUFHSixFQUFFLENBQUNFLENBQUQsQ0FBVjs7QUFDQSxXQUFPRSxDQUFDLENBQUNDLE1BQUYsQ0FBUyxDQUFULEtBQWUsR0FBdEIsRUFBMkI7QUFDMUJELE9BQUMsR0FBR0EsQ0FBQyxDQUFDRSxTQUFGLENBQVksQ0FBWixDQUFKO0FBQ0E7O0FBQ0QsUUFBSUYsQ0FBQyxDQUFDRyxPQUFGLENBQVVWLElBQVYsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDekIsYUFBT08sQ0FBQyxDQUFDRSxTQUFGLENBQVlULElBQUksQ0FBQ00sTUFBakIsRUFBeUJDLENBQUMsQ0FBQ0QsTUFBM0IsQ0FBUDtBQUNBO0FBQ0Q7O0FBQ0QsU0FBTyxFQUFQO0FBQ0E7O0FBRUQsU0FBU0ssV0FBVCxHQUF1QjtBQUN0QixNQUFJQyxJQUFJLEdBQUNiLFNBQVMsQ0FBQyxVQUFELENBQWxCOztBQUNBLE1BQUlhLElBQUksSUFBSSxFQUFaLEVBQWdCO0FBQ2ZDLFNBQUssQ0FBQyxtQkFBbUJELElBQXBCLENBQUw7QUFDQSxHQUZELE1BRU87QUFDTkEsUUFBSSxHQUFHRSxNQUFNLENBQUMseUJBQUQsRUFBMkIsRUFBM0IsQ0FBYjs7QUFDQSxRQUFJRixJQUFJLElBQUksRUFBUixJQUFjQSxJQUFJLElBQUksSUFBMUIsRUFBZ0M7QUFDL0J6QixlQUFTLENBQUMsVUFBRCxFQUFheUIsSUFBYixFQUFtQixFQUFuQixDQUFUO0FBQ0E7QUFDRDtBQUNEOztBQUNNLE1BQU1HLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUM7QUFDeENDLE9BQUssRUFBRSxJQURpQztBQUV4Q0MsU0FBTyxFQUFFO0FBQ1JDLGVBQVcsRUFBRSxNQUFNLENBQUU7QUFEYjtBQUYrQixDQUFELENBQWpDO0FBT0EsTUFBTUMsbUJBQU4sU0FBa0NDLCtDQUFsQyxDQUE0QztBQUNsREMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDbEIsVUFBTUEsS0FBTjs7QUFEa0Isd0xBYUpOLEtBQUQsSUFBVztBQUN4QixVQUFJQSxLQUFKLEVBQVc7QUFDVixjQUFNTCxJQUFJLEdBQUdZLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixLQUFmLENBQWI7QUFDQVMsb0JBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QmYsSUFBN0I7O0FBQ0EsWUFBSUssS0FBSyxDQUFDVyxLQUFWLEVBQWlCO0FBQ2hCRixzQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCVixLQUFLLENBQUNXLEtBQXBDO0FBQ0E7QUFDRCxPQU5ELE1BTU87QUFDTkYsb0JBQVksQ0FBQ0csS0FBYjtBQUNBOztBQUNELFdBQUtDLFFBQUwsQ0FBY2IsS0FBZDtBQUNBLEtBeEJrQjs7QUFFbEIsVUFBTUwsS0FBSSxHQUFHVyxLQUFLLENBQUNYLElBQW5COztBQUNBLFFBQUlBLEtBQUosRUFBVTtBQUNULFVBQUk7QUFDSCxjQUFNbUIsVUFBVSxHQUFHUCxJQUFJLENBQUNRLEtBQUwsQ0FBV3BCLEtBQVgsQ0FBbkI7QUFDQSxhQUFLSyxLQUFMLEdBQWFjLFVBQWI7QUFDQSxPQUhELENBR0UsT0FBT0UsQ0FBUCxFQUFVO0FBQ1hDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0E7QUFDRDtBQUNEOztBQWNERyxRQUFNLEdBQUc7QUFDUixVQUFNQyxPQUFPLEdBQUc7QUFDZnBCLFdBQUssRUFBRSxLQUFLQSxLQURHO0FBRWZDLGFBQU8sRUFBRTtBQUNSQyxtQkFBVyxFQUFFLEtBQUtBO0FBRFY7QUFGTSxLQUFoQjtBQU1BLHdCQUNDLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRWtCLE9BQTdCO0FBQUEsZ0JBQ0UsS0FBS2QsS0FBTCxDQUFXZTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQUtBOztBQXRDaUQ7QUF3QzVDLFNBQVNDLGtCQUFULENBQTRCO0FBQUVDLEtBQUY7QUFBT0M7QUFBUCxDQUE1QixFQUEwQztBQUNoRFAsU0FBTyxDQUFDQyxHQUFSLENBQVksK0NBQVosRUFBNkRLLEdBQUcsQ0FBQ0UsT0FBakU7QUFDQSxTQUFPO0FBQUVuQixTQUFLLEVBQUU7QUFBRVgsVUFBSSxFQUFFNEIsR0FBRyxDQUFDRSxPQUFKLENBQVk5QixJQUFaLElBQW9CO0FBQTVCO0FBQVQsR0FBUDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcxOGY5Mzk0YmZkNDI4YzE5ZTMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuXG5mdW5jdGlvbiBzZXRDb29raWUoY25hbWUsY3ZhbHVlLGV4ZGF5cykge1xuXHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdGQuc2V0VGltZShkLmdldFRpbWUoKSArIChleGRheXMqMjQqNjAqNjAqMTAwMCkpO1xuXHR2YXIgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIiArIGQudG9HTVRTdHJpbmcoKTtcblx0ZG9jdW1lbnQuY29va2llID0gY25hbWUgKyBcIj1cIiArIGN2YWx1ZSArIFwiO1wiICsgZXhwaXJlcyArIFwiO3BhdGg9L1wiO1xufVxuXG5mdW5jdGlvbiBnZXRDb29raWUoY25hbWUpIHtcblx0dmFyIG5hbWUgPSBjbmFtZSArIFwiPVwiO1xuXHR2YXIgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xuXHR2YXIgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjID0gY2FbaV07XG5cdFx0d2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xuXHRcdFx0YyA9IGMuc3Vic3RyaW5nKDEpO1xuXHRcdH1cblx0XHRpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcblx0XHRcdHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2hlY2tDb29raWUoKSB7XG5cdHZhciB1c2VyPWdldENvb2tpZShcInVzZXJuYW1lXCIpO1xuXHRpZiAodXNlciAhPSBcIlwiKSB7XG5cdFx0YWxlcnQoXCJXZWxjb21lIGFnYWluIFwiICsgdXNlcik7XG5cdH0gZWxzZSB7XG5cdFx0dXNlciA9IHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWU6XCIsXCJcIik7XG5cdFx0aWYgKHVzZXIgIT0gXCJcIiAmJiB1c2VyICE9IG51bGwpIHtcblx0XHRcdHNldENvb2tpZShcInVzZXJuYW1lXCIsIHVzZXIsIDMwKTtcblx0XHR9XG5cdH1cbn1cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuXHRzdGF0ZTogbnVsbCxcblx0YWN0aW9uczoge1xuXHRcdHVwZGF0ZVN0YXRlOiAoKSA9PiB7fSxcblx0fSxcbn0pO1xuXG5leHBvcnQgY2xhc3MgQXV0aENvbnRleHRQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdGNvbnN0IHVzZXIgPSBwcm9wcy51c2VyO1xuXHRcdGlmICh1c2VyKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB1c2VyT2JqZWN0ID0gSlNPTi5wYXJzZSh1c2VyKTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IHVzZXJPYmplY3Q7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVN0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0aWYgKHN0YXRlKSB7XG5cdFx0XHRjb25zdCB1c2VyID0gSlNPTi5zdHJpbmdpZnkoc3RhdGUpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCB1c2VyKTtcblx0XHRcdGlmIChzdGF0ZS50b2tlbikge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBzdGF0ZS50b2tlbik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcblx0fTtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGNvbnRleHQgPSB7XG5cdFx0XHRzdGF0ZTogdGhpcy5zdGF0ZSxcblx0XHRcdGFjdGlvbnM6IHtcblx0XHRcdFx0dXBkYXRlU3RhdGU6IHRoaXMudXBkYXRlU3RhdGUsXG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xuXHRjb25zb2xlLmxvZygnQXV0aENvbnRleHRQcm92aWRlciA9PiBnZXRTZXJ2ZXJTaWRlUHJvcHMgPT4gJywgcmVxLmNvb2tpZXMpO1xuXHRyZXR1cm4geyBwcm9wczogeyB1c2VyOiByZXEuY29va2llcy51c2VyIHx8ICcnIH0gfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=