webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '제로초'
    },
    content: '첫 번째 게시글 #해쉬태크 #익스프레스',
    Images: [{
      src: 'https://i.imgur.com/Bf97WeF.png'
    }, {
      src: 'https://i.imgur.com/Bf97WeF.png'
    }, {
      src: 'https://i.imgur.com/Bf97WeF.png'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      comment: '우와 개정판이 나왔군요'
    }, {
      User: {
        nickname: 'hero'
      },
      comment: '얼른 사고싶어요'
    }]
  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '제로초'
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        //앞에 추가해야 게시글 쓰면 가장 위에 올라감
        postAdded: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImNvbW1lbnQiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRTtBQUN2QkMsV0FBUyxFQUFHLENBQUM7QUFDVEMsTUFBRSxFQUFHLENBREk7QUFFVEMsUUFBSSxFQUFFO0FBQ0ZELFFBQUUsRUFBQyxDQUREO0FBRUZFLGNBQVEsRUFBRztBQUZULEtBRkc7QUFNVEMsV0FBTyxFQUFFLHVCQU5BO0FBT1RDLFVBQU0sRUFBRyxDQUNMO0FBQUNDLFNBQUcsRUFBQztBQUFMLEtBREssRUFFTDtBQUFDQSxTQUFHLEVBQUM7QUFBTCxLQUZLLEVBR0w7QUFBQ0EsU0FBRyxFQUFDO0FBQUwsS0FISyxDQVBBO0FBWVRDLFlBQVEsRUFBQyxDQUFDO0FBQ1JMLFVBQUksRUFBQztBQUNEQyxnQkFBUSxFQUFFO0FBRFQsT0FERztBQUlOSyxhQUFPLEVBQUM7QUFKRixLQUFELEVBS1A7QUFDRU4sVUFBSSxFQUFDO0FBQ0RDLGdCQUFRLEVBQUU7QUFEVCxPQURQO0FBSUVLLGFBQU8sRUFBRTtBQUpYLEtBTE87QUFaQSxHQUFELENBRFc7QUF5QnZCQyxZQUFVLEVBQUMsRUF6Qlk7QUEwQnZCQyxXQUFTLEVBQUM7QUExQmEsQ0FBcEI7QUE2QlAsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBRU8sSUFBTUMsT0FBTyxHQUFHO0FBQ25CQyxNQUFJLEVBQUdGO0FBRFksQ0FBaEI7QUFJUCxJQUFNRyxTQUFTLEdBQUc7QUFDZGIsSUFBRSxFQUFDLENBRFc7QUFFZEcsU0FBTyxFQUFHLFdBRkk7QUFHZEYsTUFBSSxFQUFFO0FBQ0ZELE1BQUUsRUFBQyxDQUREO0FBRUZFLFlBQVEsRUFBQztBQUZQLEdBSFE7QUFPZEUsUUFBTSxFQUFDLEVBUE87QUFRZEUsVUFBUSxFQUFDO0FBUkssQ0FBbEI7O0FBV0EsSUFBTVEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBZ0M7QUFBQSxNQUEvQkMsS0FBK0IsdUVBQXZCakIsWUFBdUI7QUFBQSxNQUFWa0IsTUFBVTs7QUFDNUMsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0ksU0FBS0YsUUFBTDtBQUNJLDZDQUNPSyxLQURQO0FBRUloQixpQkFBUyxHQUFHYyxTQUFILHNHQUFnQkUsS0FBSyxDQUFDaEIsU0FBdEIsRUFGYjtBQUUrQztBQUMzQ1UsaUJBQVMsRUFBRTtBQUhmOztBQUtKO0FBQ0ksYUFBT00sS0FBUDtBQVJSO0FBVUgsQ0FYRDs7QUFhZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNjFiMDBkOTI5YzRmOGRkYjVhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9e1xyXG4gICAgbWFpblBvc3RzIDogW3tcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgVXNlciA6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZSA6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6J+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsiaztg5ztgawgI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgSW1hZ2VzIDogW1xyXG4gICAgICAgICAgICB7c3JjOidodHRwczovL2kuaW1ndXIuY29tL0JmOTdXZUYucG5nJ30sXHJcbiAgICAgICAgICAgIHtzcmM6J2h0dHBzOi8vaS5pbWd1ci5jb20vQmY5N1dlRi5wbmcnfSxcclxuICAgICAgICAgICAge3NyYzonaHR0cHM6Ly9pLmltZ3VyLmNvbS9CZjk3V2VGLnBuZyd9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgQ29tbWVudHM6W3tcclxuICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21tZW50OifsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalCcsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdoZXJvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tbWVudDogJ+yWvOuluCDsgqzqs6Dsi7bslrTsmpQnLFxyXG4gICAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHM6W10sXHJcbiAgICBwb3N0QWRkZWQ6ZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gICAgdHlwZSA6IEFERF9QT1NULFxyXG59XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgICBpZDoyLFxyXG4gICAgY29udGVudCA6ICfrjZTrr7jrjbDsnbTthLDsnoXri4jri6QuJyxcclxuICAgIFVzZXIgOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOifsoJzroZzstIgnLFxyXG4gICAgfSxcclxuICAgIEltYWdlczpbXSxcclxuICAgIENvbW1lbnRzOltdLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLGFjdGlvbikgPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFERF9QT1NUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsLi4uc3RhdGUubWFpblBvc3RzXSwgLy/slZ7sl5Ag7LaU6rCA7ZW07JW8IOqyjOyLnOq4gCDsk7DrqbQg6rCA7J6lIOychOyXkCDsmKzrnbzqsJBcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==