webpackHotUpdate("main",{

/***/ "./src/shared/CommentsList/CommentItem/CommentItem.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CommentsList/CommentItem/CommentItem.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentItem = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar merge_1 = __webpack_require__(/*! ../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar TimeComment_1 = __webpack_require__(/*! ../../CardsList/Card/TimeComment */ \"./src/shared/CardsList/Card/TimeComment/index.ts\");\r\nvar User_1 = __webpack_require__(/*! ../../CardsList/Card/User */ \"./src/shared/CardsList/Card/User/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar commentitem_css_1 = __importDefault(__webpack_require__(/*! ./commentitem.css */ \"./src/shared/CommentsList/CommentItem/commentitem.css\"));\r\nfunction CommentItem(_a) {\r\n    var created_utc = _a.created_utc, subreddit = _a.subreddit, author = _a.author, body = _a.body, _b = _a.openReply, openReply = _b === void 0 ? true : _b, id = _a.id;\r\n    var result = Math.ceil(Math.ceil(Math.abs(new Date().getTime() - created_utc * 1000)) /\r\n        (1000 * 60 * 60));\r\n    var handleItemClick = function () {\r\n        console.log('klik ответить', id);\r\n        return react_1.default.crea;\r\n    };\r\n    var LIST = [\r\n        {\r\n            As: 'li',\r\n            text: 'Ответить',\r\n            img: react_1.default.createElement(Icons_1.CommentIcon, null),\r\n            onClick: handleItemClick,\r\n        },\r\n        { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },\r\n        { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"div\", { className: commentitem_css_1.default.itemtitle },\r\n                react_1.default.createElement(\"div\", { className: commentitem_css_1.default.titlesub }, subreddit),\r\n                react_1.default.createElement(\"div\", { className: commentitem_css_1.default.itemtitle },\r\n                    react_1.default.createElement(TimeComment_1.TimeComment, { created_utc: result }),\r\n                    react_1.default.createElement(User_1.User, { author: author }))),\r\n            react_1.default.createElement(\"p\", { className: commentitem_css_1.default.textcomment }, body),\r\n            react_1.default.createElement(\"ul\", { className: commentitem_css_1.default.ulicons },\r\n                react_1.default.createElement(GenericList_1.GenericList, { underline: false, list: LIST.map(merge_1.merge({})) })))));\r\n}\r\nexports.CommentItem = CommentItem;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentItem/CommentItem.tsx?");

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