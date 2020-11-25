webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\n__webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\r\nvar TextComponent_1 = __webpack_require__(/*! ./TextComponent/TextComponent */ \"./src/shared/CardsList/Card/TextComponent/TextComponent.tsx\");\r\nvar CardMenu_1 = __webpack_require__(/*! ./CardMenu/CardMenu */ \"./src/shared/CardsList/Card/CardMenu/CardMenu.tsx\");\r\nvar Controls_1 = __webpack_require__(/*! ./Controls/Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview/Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\");\r\nfunction Card() {\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(TextComponent_1.TextComponent, null),\r\n        react_1.default.createElement(Preview_1.Preview, null),\r\n        react_1.default.createElement(CardMenu_1.CardMenu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextComponent/TextComponent.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextComponent/TextComponent.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextComponent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar User_1 = __webpack_require__(/*! ../User/User */ \"./src/shared/CardsList/Card/User/User.tsx\");\r\nvar TimeComment_1 = __webpack_require__(/*! ../TimeComment/TimeComment */ \"./src/shared/CardsList/Card/TimeComment/TimeComment.tsx\");\r\nvar textcomponent_css_1 = __importDefault(__webpack_require__(/*! ./textcomponent.css */ \"./src/shared/CardsList/Card/TextComponent/textcomponent.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../Text/Text */ \"./src/shared/Text/Text.tsx\");\r\nfunction TextComponent() {\r\n    return (react_1.default.createElement(\"div\", { className: textcomponent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcomponent_css_1.default.metaData },\r\n            react_1.default.createElement(User_1.User, null),\r\n            react_1.default.createElement(TimeComment_1.TimeComment, null)),\r\n        react_1.default.createElement(Text_1.Text, __assign({ As: 'h2', size: 20, mobileSize: 16, margin: true }, 0),\r\n            react_1.default.createElement(\"a\", { href: \"#user-url\", className: textcomponent_css_1.default.postLink }, \"\\u0420\\u0435\\u0430\\u043B\\u0438\\u0437\\u0430\\u0446\\u0438\\u044F \\u043D\\u0430\\u043C\\u0435\\u0447\\u0435\\u043D\\u043D\\u044B\\u0445 \\u043F\\u043B\\u0430\\u043D\\u043E\\u0432\\u044B\\u0445 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0439\"))));\r\n}\r\nexports.TextComponent = TextComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextComponent/TextComponent.tsx?");

/***/ })

})