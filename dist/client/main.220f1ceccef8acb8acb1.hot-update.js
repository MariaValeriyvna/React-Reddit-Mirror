webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentsList/CommentItem/commentitem.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/CommentsList/CommentItem/commentitem.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\r\\n.commentitem__item--3BZMi {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  border: 1px solid transparent;\\r\\n}\\r\\n.commentitem__item--3BZMi:focus,\\r\\n.commentitem__item--3BZMi:hover{\\r\\n  border: 1px solid var(--greyD9);\\r\\n}\\r\\n\\r\\n.commentitem__itemtitle--2XM9E {\\r\\n  display: flex;\\r\\n  flex-direction: row-reverse;\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n.commentitem__titlesub--Q2JWn {\\r\\n  background-color: var(--greyD9);\\r\\n  font-size: 14px;\\r\\nline-height: 16px;\\r\\ntext-align: center;\\r\\npadding: 3px 5px;\\r\\n}\\r\\n.commentitem__ulicons--2fJ_N {\\r\\n  display: flex;\\r\\n}\\r\\n.commentitem__textcomment--2EU3f {\\r\\n  font-size: 14px;\\r\\n  line-height: 16px;\\r\\n  text-indent: 20px;\\r\\n  \\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"item\": \"commentitem__item--3BZMi\",\n\t\"itemtitle\": \"commentitem__itemtitle--2XM9E\",\n\t\"titlesub\": \"commentitem__titlesub--Q2JWn\",\n\t\"ulicons\": \"commentitem__ulicons--2fJ_N\",\n\t\"textcomment\": \"commentitem__textcomment--2EU3f\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentItem/commentitem.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/CardsList/Card/TimeComment/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/TimeComment/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TimeComment */ \"./src/shared/CardsList/Card/TimeComment/TimeComment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TimeComment/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/User/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/User/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./User */ \"./src/shared/CardsList/Card/User/User.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/User/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentItem/CommentItem.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CommentsList/CommentItem/CommentItem.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentItem = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar merge_1 = __webpack_require__(/*! ../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar TimeComment_1 = __webpack_require__(/*! ../../CardsList/Card/TimeComment */ \"./src/shared/CardsList/Card/TimeComment/index.ts\");\r\nvar User_1 = __webpack_require__(/*! ../../CardsList/Card/User */ \"./src/shared/CardsList/Card/User/index.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar commentitem_css_1 = __importDefault(__webpack_require__(/*! ./commentitem.css */ \"./src/shared/CommentsList/CommentItem/commentitem.css\"));\r\nfunction CommentItem(_a) {\r\n    var created_utc = _a.created_utc, subreddit = _a.subreddit, author = _a.author, body = _a.body, _b = _a.openReply, openReply = _b === void 0 ? true : _b, id = _a.id;\r\n    var _c = void 0;\r\n    var result = Math.ceil(Math.ceil(Math.abs(new Date().getTime() - created_utc * 1000)) /\r\n        (1000 * 60 * 60));\r\n    var handleItemClick = function () {\r\n        console.log('klik ответить', id);\r\n        openReply = false;\r\n    };\r\n    var LIST = [\r\n        {\r\n            As: 'li',\r\n            text: 'Ответить',\r\n            img: react_1.default.createElement(Icons_1.CommentIcon, null),\r\n            onClick: handleItemClick,\r\n        },\r\n        { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },\r\n        { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    react_1.useEffect(function () { console.log('commentitem useeffect'); }, []);\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"div\", { className: commentitem_css_1.default.itemtitle },\r\n                react_1.default.createElement(\"div\", { className: commentitem_css_1.default.titlesub }, subreddit),\r\n                react_1.default.createElement(\"div\", { className: commentitem_css_1.default.itemtitle },\r\n                    react_1.default.createElement(TimeComment_1.TimeComment, { created_utc: result }),\r\n                    react_1.default.createElement(User_1.User, { author: author }))),\r\n            react_1.default.createElement(\"p\", { className: commentitem_css_1.default.textcomment }, body),\r\n            react_1.default.createElement(\"ul\", { className: commentitem_css_1.default.ulicons },\r\n                react_1.default.createElement(GenericList_1.GenericList, { underline: false, list: LIST.map(merge_1.merge({})) }))),\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(CommentForm_1.CommentForm, { id: id, placeHolder: \"\\u0412\\u0430\\u0448 \\u043E\\u0442\\u0432\\u0435\\u0442\", isOpen: openReply }))));\r\n}\r\nexports.CommentItem = CommentItem;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentItem/CommentItem.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentItem/commentitem.css":
/*!*************************************************************!*\
  !*** ./src/shared/CommentsList/CommentItem/commentitem.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentitem.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentsList/CommentItem/commentitem.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentitem.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentsList/CommentItem/commentitem.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentitem.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentsList/CommentItem/commentitem.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentItem/commentitem.css?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentItem/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/CommentsList/CommentItem/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentItem */ \"./src/shared/CommentsList/CommentItem/CommentItem.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentItem/index.ts?");

/***/ })

})