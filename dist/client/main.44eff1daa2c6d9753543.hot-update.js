webpackHotUpdate("main",{

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nvar SearchIcon_1 = __webpack_require__(/*! ../../Icons/SearchIcon */ \"./src/shared/Icons/SearchIcon.tsx\");\r\nfunction SearchBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchblock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, null),\r\n        react_1.default.createElement(\"div\", { className: searchblock_css_1.default.blockinput },\r\n            react_1.default.createElement(\"button\", { className: searchblock_css_1.default.btnsearch, \"aria-label\": \"\\u041F\\u043E\\u0438\\u0441\\u043A\" },\r\n                react_1.default.createElement(SearchIcon_1.SearchIcon, null),\r\n                \"button>\",\r\n                react_1.default.createElement(\"input\", { className: searchblock_css_1.default.searchinput, placeholder: '\\u041F\\u043E\\u0438\\u0441\\u043A' }))),\r\n        \"); }\"));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SearchIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/SearchIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction SearchIcon() {\r\n    return (React.createElement(\"svg\", { width: \"19\", height: \"19\", viewBox: \"0 0 19 19\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M13.541 11.9497H12.7037L12.407 11.6564C13.4456 10.418 14.0709 8.81018 14.0709 7.06118C14.0709 3.16124 10.9868 0 7.18194 0C3.37711 0 0.292969 3.16124 0.292969 7.06118C0.292969 10.9611 3.37711 14.1224 7.18194 14.1224C8.88828 14.1224 10.4568 13.4814 11.6651 12.4168L11.9512 12.721V13.5792L17.2504 19L18.8296 17.3814L13.541 11.9497ZM7.18194 11.9497C4.54293 11.9497 2.41265 9.76615 2.41265 7.06118C2.41265 4.3562 4.54293 2.17267 7.18194 2.17267C9.82094 2.17267 11.9512 4.3562 11.9512 7.06118C11.9512 9.76615 9.82094 11.9497 7.18194 11.9497Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.SearchIcon = SearchIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SearchIcon.tsx?");

/***/ })

})