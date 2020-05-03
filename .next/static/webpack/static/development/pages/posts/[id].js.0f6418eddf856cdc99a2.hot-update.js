webpackHotUpdate("static/development/pages/posts/[id].js",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/date */ "./components/date.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/raykanani/Documents/GitHub/react-playground/pages/posts/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var __N_SSG = true;
function Post(_ref) {
  var postData = _ref.postData;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    prevQuestion: postData.prevQuestion,
    nextQuestion: postData.nextQuestion,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, postData.title)), __jsx("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.questionHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingXl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, postData.title, __jsx("span", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.lightText, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.date),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateString: postData.date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.videoContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, postData.videoUrl && __jsx(react_player__WEBPACK_IMPORTED_MODULE_4___default.a, {
    url: postData.videoUrl,
    height: 500,
    width: 300,
    playing: true,
    config: {
      youtube: {
        playerVars: {
          modestbranding: 1
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: postData.contentHtml
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=[id].js.0f6418eddf856cdc99a2.hot-update.js.map