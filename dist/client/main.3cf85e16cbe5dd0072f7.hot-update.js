webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Text/text.css":
false,

/***/ "./src/shared/CardsList/Card/TextComponent/TextComponent.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextComponent/TextComponent.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextComponent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar User_1 = __webpack_require__(/*! ../User/User */ \"./src/shared/CardsList/Card/User/User.tsx\");\r\nvar TimeComment_1 = __webpack_require__(/*! ../TimeComment/TimeComment */ \"./src/shared/CardsList/Card/TimeComment/TimeComment.tsx\");\r\nvar textcomponent_css_1 = __importDefault(__webpack_require__(/*! ./textcomponent.css */ \"./src/shared/CardsList/Card/TextComponent/textcomponent.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../Text/Text */ \"./src/shared/Text/Text.tsx\");\r\nfunction TextComponent() {\r\n    return (react_1.default.createElement(\"div\", { className: textcomponent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcomponent_css_1.default.metaData },\r\n            react_1.default.createElement(User_1.User, null),\r\n            react_1.default.createElement(TimeComment_1.TimeComment, null)),\r\n        react_1.default.createElement(Text_1.Text, { As: 'h2', size: 20, mobileSize: 16 },\r\n            react_1.default.createElement(\"a\", { href: \"#user-url\", className: textcomponent_css_1.default.postLink }, \"\\u0420\\u0435\\u0430\\u043B\\u0438\\u0437\\u0430\\u0446\\u0438\\u044F \\u043D\\u0430\\u043C\\u0435\\u0447\\u0435\\u043D\\u043D\\u044B\\u0445 \\u043F\\u043B\\u0430\\u043D\\u043E\\u0432\\u044B\\u0445 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0439\"))));\r\n}\r\nexports.TextComponent = TextComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextComponent/TextComponent.tsx?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unterminated string constant (14:364)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     var _a, _b, _c;\\n|     var _d = props.As, As = _d === void 0 ? 'span' : _d, _e = props.color, color = _e === void 0 ? enumColor_1.EColor.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize, _f = props.bold, bold = _f === void 0 ? 400 : _f, _g = props.margin, margin = _g === void 0 ? 0 : _g;\\n>     var classes = classnames_1.default(text_css_1.default[\\\"s\\\" + size], (_a = {}, _a[text_css_1.default[\\\"m\\\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\\\"m\\\" + desktopSize]] = desktopSize, _b), (_c = {}, _c[text_css_1.default[\\\"m\\\" + tabletSize]] = tabletSize, _c), text_css_1.default[color], text_css_1.default[\\\"bold\\\" + bold], text_css_1.default['margin${}`]]);\\n|     return react_1.default.createElement(As, { className: classes }, children);\\n| }\");\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/text.css":
false

})