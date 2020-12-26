webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/CarmaCounter/CarmaCounter.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CarmaCounter/CarmaCounter.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar carmacounter_css_1 = __importDefault(__webpack_require__(/*! ./carmacounter.css */ \"./src/shared/CardsList/Card/CarmaCounter/carmacounter.css\"));\r\nvar BtnUp_1 = __webpack_require__(/*! ../../../BtnUp */ \"./src/shared/BtnUp/index.ts\");\r\nvar BtnDown_1 = __webpack_require__(/*! ../../../BtnDown */ \"./src/shared/BtnDown/index.ts\");\r\nfunction CarmaCounter(_a) {\r\n    var score = _a.score;\r\n    return (react_1.default.createElement(\"div\", { className: carmacounter_css_1.default.karmaCounter },\r\n        react_1.default.createElement(BtnUp_1.BtnUp, { state: true }),\r\n        react_1.default.createElement(\"span\", { className: carmacounter_css_1.default.karmaValue }, score),\r\n        react_1.default.createElement(BtnDown_1.BtnDown, null)));\r\n}\r\nexports.CarmaCounter = CarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CarmaCounter/CarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardsList/Card/Controls/controls.css\"));\r\nvar CarmaCounter_1 = __webpack_require__(/*! ../CarmaCounter/CarmaCounter */ \"./src/shared/CardsList/Card/CarmaCounter/CarmaCounter.tsx\");\r\nvar CommentsNumber_1 = __webpack_require__(/*! ../CommentsNumber/CommentsNumber */ \"./src/shared/CardsList/Card/CommentsNumber/CommentsNumber.tsx\");\r\nvar ShareButton_1 = __webpack_require__(/*! ../ShareButton/ShareButton */ \"./src/shared/CardsList/Card/ShareButton/ShareButton.tsx\");\r\nvar SaveButton_1 = __webpack_require__(/*! ../SaveButton */ \"./src/shared/CardsList/Card/SaveButton/index.ts\");\r\nfunction Controls(_a) {\r\n    var score = _a.score, num_comments = _a.num_comments;\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(CarmaCounter_1.CarmaCounter, { score: score }),\r\n        react_1.default.createElement(CommentsNumber_1.CommentsNumber, { num_comments: num_comments }),\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.actions },\r\n            react_1.default.createElement(ShareButton_1.ShareButton, null),\r\n            react_1.default.createElement(SaveButton_1.SaveButton, null))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ })

})