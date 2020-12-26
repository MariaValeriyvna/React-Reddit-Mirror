webpackHotUpdate("main",{

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_2 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar merge_1 = __webpack_require__(/*! ../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar commentContext_1 = __webpack_require__(/*! ../Context/commentContext */ \"./src/shared/Context/commentContext.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nfunction CommentForm(_a) {\r\n    var placeHolder = _a.placeHolder, _b = _a.nameAthour, nameAthour = _b === void 0 ? '' : _b, textbtn = _a.textbtn, _c = _a.isOpen, isOpen = _c === void 0 ? true : _c, id = _a.id;\r\n    var _d = react_2.useContext(commentContext_1.commentContext), value = _d.value, onChange = _d.onChange;\r\n    var _e = react_1.useState(nameAthour ? nameAthour + ' , ' : ''), valueText = _e[0], setValueText = _e[1];\r\n    var inputRef = react_1.useRef(null);\r\n    var list = [\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Tagicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Copyicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Imgicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.SaveCommenticon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Personicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Personicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Renewicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Linkicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Microphoneicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Commentsicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Penicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Lettericon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Pdficon, null) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    function handleChange(event) {\r\n        if (id !== 'post')\r\n            setValueText(event.target.value);\r\n        else\r\n            onChange((event.target.value)); // для контролируемого компонента, для usecontext - onChange\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        // console.log (inputRef.current?.value) // для неконтролируемого компонента\r\n        console.log(value); // для контролируемого компонента\r\n    }\r\n    function handleClick() {\r\n        console.log('cl');\r\n    }\r\n    react_1.useEffect(function () {\r\n        var _a, _b, _c;\r\n        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n        (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.setSelectionRange((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.textLength, 'none');\r\n    }, [isOpen]);\r\n    if (!isOpen)\r\n        return react_1.default.createElement(\"div\", null);\r\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit, key: id },\r\n        react_1.default.createElement(\"textarea\", { ref: inputRef, className: commentform_css_1.default.inputText, onChange: handleChange, placeholder: placeHolder, value: id === 'post' ? value : valueText }),\r\n        react_1.default.createElement(\"div\", { className: commentform_css_1.default.commentEdit },\r\n            react_1.default.createElement(\"ul\", { className: commentform_css_1.default.ulEdit },\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: handleClick })) })),\r\n            react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.btnSubmit }, textbtn))));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ })

})