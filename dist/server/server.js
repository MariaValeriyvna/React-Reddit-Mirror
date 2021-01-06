/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nmodule.exports = function (url, options) {\r\n    if (!options) {\r\n        // eslint-disable-next-line no-param-reassign\r\n        options = {};\r\n    } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\r\n    url = url && url.__esModule ? url.default : url;\r\n    if (typeof url !== 'string') {\r\n        return url;\r\n    } // If url is already wrapped in quotes, remove them\r\n    if (/^['\"].*['\"]$/.test(url)) {\r\n        // eslint-disable-next-line no-param-reassign\r\n        url = url.slice(1, -1);\r\n    }\r\n    if (options.hash) {\r\n        // eslint-disable-next-line no-param-reassign\r\n        url += options.hash;\r\n    } // Should url be wrapped?\r\n    // See https://drafts.csswg.org/css-values-3/#urls\r\n    if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\r\n        return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\r\n    }\r\n    return url;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList/CardsList */ \"./src/shared/CardsList/CardsList.tsx\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/Context/userContext */ \"./src/shared/Context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/Context/postsContext */ \"./src/shared/Context/postsContext.tsx\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ./store/store */ \"./src/store/store.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nfunction AppComponent() {\r\n    useToken_1.useToken();\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardsList_1.CardsList, null)))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/const/enumColor.ts":
/*!********************************!*\
  !*** ./src/const/enumColor.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EColor = void 0;\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"greyF4\"] = \"greyF4\";\r\n    EColor[\"greyF3\"] = \"greyF3\";\r\n    EColor[\"greyD9\"] = \"greyD9\";\r\n    EColor[\"greyC4\"] = \"greyC4\";\r\n    EColor[\"grey99\"] = \"grey99\";\r\n    EColor[\"grey66\"] = \"grey66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\n\n\n//# sourceURL=webpack:///./src/const/enumColor.ts?");

/***/ }),

/***/ "./src/const/enumIcon.ts":
/*!*******************************!*\
  !*** ./src/const/enumIcon.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EIcon = void 0;\r\nvar EIcon;\r\n(function (EIcon) {\r\n    EIcon[\"save\"] = \"save\";\r\n    EIcon[\"share\"] = \"share\";\r\n    EIcon[\"anonim\"] = \"anonim\";\r\n})(EIcon = exports.EIcon || (exports.EIcon = {}));\r\n\n\n//# sourceURL=webpack:///./src/const/enumIcon.ts?");

/***/ }),

/***/ "./src/fonts/roboto-v20-cyrillic-500.woff":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v20-cyrillic-500.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./static/src/fonts/roboto-v20-cyrillic-500.woff\");\n\n//# sourceURL=webpack:///./src/fonts/roboto-v20-cyrillic-500.woff?");

/***/ }),

/***/ "./src/fonts/roboto-v20-cyrillic-500.woff2":
/*!*************************************************!*\
  !*** ./src/fonts/roboto-v20-cyrillic-500.woff2 ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./static/src/fonts/roboto-v20-cyrillic-500.woff2\");\n\n//# sourceURL=webpack:///./src/fonts/roboto-v20-cyrillic-500.woff2?");

/***/ }),

/***/ "./src/fonts/roboto-v20-cyrillic-regular.woff":
/*!****************************************************!*\
  !*** ./src/fonts/roboto-v20-cyrillic-regular.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./static/src/fonts/roboto-v20-cyrillic-regular.woff\");\n\n//# sourceURL=webpack:///./src/fonts/roboto-v20-cyrillic-regular.woff?");

/***/ }),

/***/ "./src/fonts/roboto-v20-cyrillic-regular.woff2":
/*!*****************************************************!*\
  !*** ./src/fonts/roboto-v20-cyrillic-regular.woff2 ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./static/src/fonts/roboto-v20-cyrillic-regular.woff2\");\n\n//# sourceURL=webpack:///./src/fonts/roboto-v20-cyrillic-regular.woff2?");

/***/ }),

/***/ "./src/hooks/useCloseElement.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCloseElement.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCloseElement = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useCloseElement(ref, state, onClose) {\r\n    var _a = react_1.useState(state), isClose = _a[0], setIsClose = _a[1];\r\n    react_1.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node &&\r\n                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                setIsClose(true);\r\n                onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, [isClose, onClose, ref]);\r\n    return isClose;\r\n}\r\nexports.useCloseElement = useCloseElement;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCloseElement.ts?");

/***/ }),

/***/ "./src/hooks/useCommentsData.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentsData.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCommentsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction useCommentsData(id) {\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var _a = react_1.useState([]), comments = _a[0], setComments = _a[1];\r\n    react_1.useEffect(function () {\r\n        axios_1.default\r\n            .get(\"https://www.reddit.com/comments/\" + id + \".json?limit=20\")\r\n            .then(function (resp) {\r\n            setComments(resp.data[1].data.children);\r\n        })\r\n            .catch(console.log);\r\n    }, [token, id]);\r\n    return comments;\r\n}\r\nexports.useCommentsData = useCommentsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.ts?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction usePostsData() {\r\n    var _a = react_1.useState([]), data = _a[0], setData = _a[1];\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    react_1.useEffect(function () {\r\n        axios_1.default\r\n            .get('https://oauth.reddit.com/best.json?limit=10', {\r\n            headers: { Authorization: \"bearer \" + token },\r\n        })\r\n            .then(function (resp) {\r\n            var postsData = resp.data.data.children;\r\n            console.log(postsData);\r\n            setData(postsData);\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return data;\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar actions_1 = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\r\nvar store_1 = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\r\nfunction useToken() {\r\n    react_1.useEffect(function () {\r\n        if (window.__token__)\r\n            store_1.store.dispatch({ type: actions_1.SET_TOKEN, token: window.__token__ });\r\n    });\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserAvatar.ts":
/*!************************************!*\
  !*** ./src/hooks/useUserAvatar.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserAvatar = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction useUserAvatar(_a) {\r\n    var author = _a.author;\r\n    var _b = react_1.useState({ user: '', avatar: '' }), data = _b[0], setData = _b[1];\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    react_1.useEffect(function () {\r\n        axios_1.default\r\n            .get(\"https://www.reddit.com/user/\" + author + \"/about.json\")\r\n            .then(function (resp) {\r\n            var avatarFull = resp.data.data.subreddit.icon_img;\r\n            var avatar = avatarFull.replace(/\\?.*/, '');\r\n            setData({ user: author, avatar: avatar });\r\n        })\r\n            .catch(console.log);\r\n    }, [author, token]);\r\n    return data;\r\n}\r\nexports.useUserAvatar = useUserAvatar;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserAvatar.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var data = react_redux_1.useSelector(function (state) { return state.me.data; });\r\n    var loading = react_redux_1.useSelector(function (state) { return state.me.loading; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        if (!token)\r\n            return;\r\n        dispatch(actions_1.meRequestAsync());\r\n    }, [dispatch, token]);\r\n    return { data: data, loading: loading };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../src/fonts/roboto-v20-cyrillic-regular.woff2 */ \"./src/fonts/roboto-v20-cyrillic-regular.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../src/fonts/roboto-v20-cyrillic-regular.woff */ \"./src/fonts/roboto-v20-cyrillic-regular.woff\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../src/fonts/roboto-v20-cyrillic-500.woff2 */ \"./src/fonts/roboto-v20-cyrillic-500.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../src/fonts/roboto-v20-cyrillic-500.woff */ \"./src/fonts/roboto-v20-cyrillic-500.woff\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\n// Module\nexports.push([module.i, \"@font-face {\\r\\n  font-family: 'Roboto';\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  src: local('Roboto'), local('Roboto-Regular'),\\r\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'), \\r\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff'); /* Modern Browsers */\\r\\n}\\r\\n/* roboto-500 - cyrillic */\\r\\n@font-face {\\r\\n  font-family: 'Roboto';\\r\\n  font-style: normal;\\r\\n  font-weight: 500;\\r\\n  src: local('Roboto'),\\r\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff2'), \\r\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('woff');/* Modern Browsers */\\r\\n}\\r\\n:root {\\r\\n  --black: #333333;\\r\\n  --orange: #cc6633;\\r\\n  --green: #a4cc33;\\r\\n  --white: #ffffff;\\r\\n  --greyF4: #f4f4f4;\\r\\n  --greyF3: #f3f3f3;\\r\\n  --greyD9: #d9d9d9;\\r\\n  --greyC4: #c4c4c4;\\r\\n  --grey99: #999999;\\r\\n  --grey66: #666666;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  overflow: hidden;\\r\\n  background-color: var(--greyF4);\\r\\n  font-size: 14px;\\r\\n  line-height: 16px;\\r\\n  font-family: 'Roboto', serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  color: var(--black);\\r\\n  box-sizing: border-box;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: greyscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nexports.indexTemplate = (function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n   <meta charset=\\\"UTF-8\\\">\\n   <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n   <title>ReactCard</title>\\n   <script src = \\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n   <script>window.__token__= '\" + token + \"'</script>\\n</head>\\n<body>\\n   <div id = \\\"react_root\\\">\" + content + \"</div>\\n   <div id = \\\"modal_root\\\"></div>\\n   <div id = \\\"dropDown_root\\\"></div>\\n</body>\\n</html>\\n\"; });\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.get('/auth', function (req, res) {\r\n    axios_1.default\r\n        .post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: {\r\n            username: process.env.CLIENT_ID,\r\n            password: 'GzOmTjX6TX1bVg3zAa74xRnQCkTX2Q',\r\n        },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' },\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/BtnDown/BtnDown.tsx":
/*!****************************************!*\
  !*** ./src/shared/BtnDown/BtnDown.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BtnDown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar btndown_css_1 = __importDefault(__webpack_require__(/*! ./btndown.css */ \"./src/shared/BtnDown/btndown.css\"));\r\nfunction BtnDown(_a) {\r\n    var click = _a.click, state = _a.state;\r\n    return (react_1.default.createElement(\"button\", { className: state ? btndown_css_1.default.down_disable : btndown_css_1.default.down, onClick: click },\r\n        react_1.default.createElement(Icons_1.DownIcon, null)));\r\n}\r\nexports.BtnDown = BtnDown;\r\n\n\n//# sourceURL=webpack:///./src/shared/BtnDown/BtnDown.tsx?");

/***/ }),

/***/ "./src/shared/BtnDown/btndown.css":
/*!****************************************!*\
  !*** ./src/shared/BtnDown/btndown.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"down\": \"btndown__down--sM3jR\",\n\t\"down_disable\": \"btndown__down_disable--8wUpF\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/BtnDown/btndown.css?");

/***/ }),

/***/ "./src/shared/BtnDown/index.ts":
/*!*************************************!*\
  !*** ./src/shared/BtnDown/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./BtnDown */ \"./src/shared/BtnDown/BtnDown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/BtnDown/index.ts?");

/***/ }),

/***/ "./src/shared/BtnUp/BtnUp.tsx":
/*!************************************!*\
  !*** ./src/shared/BtnUp/BtnUp.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BtnUp = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar btnup_css_1 = __importDefault(__webpack_require__(/*! ./btnup.css */ \"./src/shared/BtnUp/btnup.css\"));\r\nfunction BtnUp(_a) {\r\n    var click = _a.click, state = _a.state;\r\n    return (react_1.default.createElement(\"button\", { className: state ? btnup_css_1.default.up : btnup_css_1.default.up_disable, onClick: click },\r\n        react_1.default.createElement(Icons_1.UpIcon, null)));\r\n}\r\nexports.BtnUp = BtnUp;\r\n\n\n//# sourceURL=webpack:///./src/shared/BtnUp/BtnUp.tsx?");

/***/ }),

/***/ "./src/shared/BtnUp/btnup.css":
/*!************************************!*\
  !*** ./src/shared/BtnUp/btnup.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"up\": \"btnup__up--3C9qB\",\n\t\"up_disable\": \"btnup__up_disable--XMQbd\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/BtnUp/btnup.css?");

/***/ }),

/***/ "./src/shared/BtnUp/index.ts":
/*!***********************************!*\
  !*** ./src/shared/BtnUp/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./BtnUp */ \"./src/shared/BtnUp/BtnUp.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/BtnUp/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\n__webpack_require__(/*! react-hot-loader */ \"react-hot-loader\");\r\nvar TextComponent_1 = __webpack_require__(/*! ./TextComponent/TextComponent */ \"./src/shared/CardsList/Card/TextComponent/TextComponent.tsx\");\r\nvar CardMenu_1 = __webpack_require__(/*! ./CardMenu/CardMenu */ \"./src/shared/CardsList/Card/CardMenu/CardMenu.tsx\");\r\nvar Controls_1 = __webpack_require__(/*! ./Controls/Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview/Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\");\r\nfunction Card(_a) {\r\n    var title = _a.title, author = _a.author, urlpreview = _a.urlpreview, created_utc = _a.created_utc, id = _a.id, score = _a.score, num_comments = _a.num_comments;\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(TextComponent_1.TextComponent, { urlpreview: urlpreview, id: id, title: title, author: author, created_utc: created_utc, score: score, num_comments: num_comments }),\r\n        react_1.default.createElement(Preview_1.Preview, { url: urlpreview }),\r\n        react_1.default.createElement(CardMenu_1.CardMenu, null),\r\n        react_1.default.createElement(Controls_1.Controls, { score: score, num_comments: num_comments })));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenu/CardMenu.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenu/CardMenu.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardMenu = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardmenu_css_1 = __importDefault(__webpack_require__(/*! ./cardmenu.css */ \"./src/shared/CardsList/Card/CardMenu/cardmenu.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar DropDownMenu_1 = __webpack_require__(/*! ./DropDownMenu */ \"./src/shared/CardsList/Card/CardMenu/DropDownMenu/index.ts\");\r\nfunction CardMenu() {\r\n    var _a = react_1.useState(false), isDropDownOpened = _a[0], setIsDropDownOpened = _a[1];\r\n    var _b = react_1.useState({ x: 0, y: 0 }), portalXY = _b[0], setPortalXY = _b[1];\r\n    return (react_1.default.createElement(\"div\", { className: cardmenu_css_1.default.cardmenu },\r\n        react_1.default.createElement(\"button\", { className: cardmenu_css_1.default.cardmenuButton, onClick: function (ev) {\r\n                setIsDropDownOpened(true);\r\n                setPortalXY({ x: ev.clientX, y: ev.clientY });\r\n            } },\r\n            react_1.default.createElement(Icons_1.MenuIcon, null)),\r\n        isDropDownOpened && (react_1.default.createElement(DropDownMenu_1.DropDownMenu, { portalTop: portalXY.y + 50, portalLeft: portalXY.x - 120, onClose: function () {\r\n                setIsDropDownOpened(false);\r\n            } }))));\r\n}\r\nexports.CardMenu = CardMenu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenu/CardMenu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenu/DropDownMenu/DropDownMenu.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenu/DropDownMenu/DropDownMenu.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DropDownMenu = void 0;\r\n/* eslint-disable @typescript-eslint/explicit-module-boundary-types */\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar useCloseElement_1 = __webpack_require__(/*! ../../../../../hooks/useCloseElement */ \"./src/hooks/useCloseElement.ts\");\r\nvar merge_1 = __webpack_require__(/*! ../../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar dropdownmenu_css_1 = __importDefault(__webpack_require__(/*! ./dropdownmenu.css */ \"./src/shared/CardsList/Card/CardMenu/DropDownMenu/dropdownmenu.css\"));\r\nfunction DropDownMenu(_a) {\r\n    var onClose = _a.onClose, portalTop = _a.portalTop, portalLeft = _a.portalLeft;\r\n    var LIST = [\r\n        { As: 'li', text: 'Комментарии', img: react_1.default.createElement(Icons_1.CommentIcon, null) },\r\n        { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },\r\n        { As: 'li', text: 'Скрыть', img: react_1.default.createElement(Icons_1.HideIcon, null) },\r\n        { As: 'li', text: 'Сохранить', img: react_1.default.createElement(Icons_1.SaveIcon, null) },\r\n        { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    var _b = react_1.useState(LIST), list = _b[0], setList = _b[1];\r\n    var handleItemClick = function () { return setList(list); };\r\n    var ref = react_1.useRef(null);\r\n    var isClose = useCloseElement_1.useCloseElement(ref, false, onClose);\r\n    var node = document.querySelector('#dropDown_root');\r\n    if (!node || isClose)\r\n        return react_1.default.createElement(\"div\", null);\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: dropdownmenu_css_1.default.dropdownmenuWrap },\r\n        react_1.default.createElement(\"div\", { style: {\r\n                position: 'fixed',\r\n                top: portalTop + \"px\",\r\n                left: portalLeft + \"px\",\r\n            }, className: dropdownmenu_css_1.default.dropdownmenu, ref: ref, id: \"drop\" },\r\n            react_1.default.createElement(\"ul\", { className: dropdownmenu_css_1.default.cardmenulist },\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: handleItemClick })) })),\r\n            react_1.default.createElement(\"button\", { className: dropdownmenu_css_1.default.btnClose, onClick: onClose }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))), node);\r\n}\r\nexports.DropDownMenu = DropDownMenu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenu/DropDownMenu/DropDownMenu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenu/DropDownMenu/dropdownmenu.css":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenu/DropDownMenu/dropdownmenu.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"dropdownmenuWrap\": \"dropdownmenu__dropdownmenuWrap--3RZ8j\",\n\t\"dropdownmenu\": \"dropdownmenu__dropdownmenu--1DWBD\",\n\t\"btnClose\": \"dropdownmenu__btnClose--1Dyi9\",\n\t\"cardmenulist\": \"dropdownmenu__cardmenulist--3A7uo\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenu/DropDownMenu/dropdownmenu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenu/DropDownMenu/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenu/DropDownMenu/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./DropDownMenu */ \"./src/shared/CardsList/Card/CardMenu/DropDownMenu/DropDownMenu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenu/DropDownMenu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenu/cardmenu.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenu/cardmenu.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardmenu\": \"cardmenu__cardmenu--2zHci\",\n\t\"cardmenuButton\": \"cardmenu__cardmenuButton--bunuf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenu/cardmenu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CarmaCounter/CarmaCounter.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CarmaCounter/CarmaCounter.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar carmacounter_css_1 = __importDefault(__webpack_require__(/*! ./carmacounter.css */ \"./src/shared/CardsList/Card/CarmaCounter/carmacounter.css\"));\r\nvar BtnUp_1 = __webpack_require__(/*! ../../../BtnUp */ \"./src/shared/BtnUp/index.ts\");\r\nvar BtnDown_1 = __webpack_require__(/*! ../../../BtnDown */ \"./src/shared/BtnDown/index.ts\");\r\nfunction CarmaCounter(_a) {\r\n    var score = _a.score;\r\n    return (react_1.default.createElement(\"div\", { className: carmacounter_css_1.default.karmaCounter },\r\n        react_1.default.createElement(BtnUp_1.BtnUp, { state: true }),\r\n        react_1.default.createElement(\"span\", { className: carmacounter_css_1.default.karmaValue }, score),\r\n        react_1.default.createElement(BtnDown_1.BtnDown, { state: false })));\r\n}\r\nexports.CarmaCounter = CarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CarmaCounter/CarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CarmaCounter/carmacounter.css":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CarmaCounter/carmacounter.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaValue\": \"carmacounter__karmaValue--J6tnX\",\n\t\"karmaCounter\": \"carmacounter__karmaCounter--3vSuH\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CarmaCounter/carmacounter.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentsNumber/CommentsNumber.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentsNumber/CommentsNumber.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsNumber = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentsnumber_css_1 = __importDefault(__webpack_require__(/*! ./commentsnumber.css */ \"./src/shared/CardsList/Card/CommentsNumber/commentsnumber.css\"));\r\nvar CommentIcon_1 = __webpack_require__(/*! ../../../Icons/CommentIcon */ \"./src/shared/Icons/CommentIcon.tsx\");\r\nfunction CommentsNumber(_a) {\r\n    var num_comments = _a.num_comments;\r\n    return (react_1.default.createElement(\"button\", { className: commentsnumber_css_1.default.commentsButton },\r\n        react_1.default.createElement(CommentIcon_1.CommentIcon, null),\r\n        react_1.default.createElement(\"span\", { className: commentsnumber_css_1.default.commentsNumber }, num_comments)));\r\n}\r\nexports.CommentsNumber = CommentsNumber;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentsNumber/CommentsNumber.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentsNumber/commentsnumber.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentsNumber/commentsnumber.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsnumber__commentsButton--3Vee8\",\n\t\"commentsNumber\": \"commentsnumber__commentsNumber--1Nkkv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentsNumber/commentsnumber.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardsList/Card/Controls/controls.css\"));\r\nvar CarmaCounter_1 = __webpack_require__(/*! ../CarmaCounter/CarmaCounter */ \"./src/shared/CardsList/Card/CarmaCounter/CarmaCounter.tsx\");\r\nvar CommentsNumber_1 = __webpack_require__(/*! ../CommentsNumber/CommentsNumber */ \"./src/shared/CardsList/Card/CommentsNumber/CommentsNumber.tsx\");\r\nvar ShareButton_1 = __webpack_require__(/*! ../ShareButton/ShareButton */ \"./src/shared/CardsList/Card/ShareButton/ShareButton.tsx\");\r\nvar SaveButton_1 = __webpack_require__(/*! ../SaveButton */ \"./src/shared/CardsList/Card/SaveButton/index.ts\");\r\nfunction Controls(_a) {\r\n    var score = _a.score, num_comments = _a.num_comments;\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(CarmaCounter_1.CarmaCounter, { score: score }),\r\n        react_1.default.createElement(CommentsNumber_1.CommentsNumber, { num_comments: num_comments }),\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.actions },\r\n            react_1.default.createElement(ShareButton_1.ShareButton, null),\r\n            react_1.default.createElement(SaveButton_1.SaveButton, null))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--1pbuI\",\n\t\"actions\": \"controls__actions--1iXY3\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardsList/Card/Preview/preview.css\"));\r\nfunction Preview(_a) {\r\n    var url = _a.url;\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview }, url.includes('//') ? (react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: url, alt: \"pic\" })) : (react_1.default.createElement(Icons_1.RedditIcon, { size: '100%' }))));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--1Nukb\",\n\t\"previewImg\": \"preview__previewImg--3kTAV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/SaveButton/SaveButton.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/SaveButton/SaveButton.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar savebtn_css_1 = __importDefault(__webpack_require__(/*! ./savebtn.css */ \"./src/shared/CardsList/Card/SaveButton/savebtn.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\r\nvar enumIcon_1 = __webpack_require__(/*! ../../../../const/enumIcon */ \"./src/const/enumIcon.ts\");\r\nfunction SaveButton() {\r\n    return (react_1.default.createElement(\"div\", { className: savebtn_css_1.default.savebtn },\r\n        react_1.default.createElement(Icon_1.Icon, { icon: enumIcon_1.EIcon.save, size: 20 })));\r\n}\r\nexports.SaveButton = SaveButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/SaveButton/SaveButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/SaveButton/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/SaveButton/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/Card/SaveButton/SaveButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/SaveButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/SaveButton/savebtn.css":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/Card/SaveButton/savebtn.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"savebtn\": \"savebtn__savebtn--3shgA\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/SaveButton/savebtn.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ShareButton/ShareButton.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/ShareButton/ShareButton.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sharebutton_css_1 = __importDefault(__webpack_require__(/*! ./sharebutton.css */ \"./src/shared/CardsList/Card/ShareButton/sharebutton.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\r\nvar enumIcon_1 = __webpack_require__(/*! ../../../../const/enumIcon */ \"./src/const/enumIcon.ts\");\r\nfunction ShareButton() {\r\n    return (react_1.default.createElement(\"div\", { className: sharebutton_css_1.default.sharebutton },\r\n        react_1.default.createElement(Icon_1.Icon, { icon: enumIcon_1.EIcon.share, size: 20 })));\r\n}\r\nexports.ShareButton = ShareButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ShareButton/sharebutton.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/ShareButton/sharebutton.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sharebutton\": \"sharebutton__sharebutton--Tbd6u\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ShareButton/sharebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextComponent/TextComponent.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextComponent/TextComponent.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextComponent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar User_1 = __webpack_require__(/*! ../User/User */ \"./src/shared/CardsList/Card/User/User.tsx\");\r\nvar TimeComment_1 = __webpack_require__(/*! ../TimeComment/TimeComment */ \"./src/shared/CardsList/Card/TimeComment/TimeComment.tsx\");\r\nvar textcomponent_css_1 = __importDefault(__webpack_require__(/*! ./textcomponent.css */ \"./src/shared/CardsList/Card/TextComponent/textcomponent.css\"));\r\nvar react_2 = __webpack_require__(/*! react */ \"react\");\r\nvar Post_1 = __webpack_require__(/*! ../../../Post */ \"./src/shared/Post/index.ts\");\r\nfunction TextComponent(_a) {\r\n    var title = _a.title, author = _a.author, created_utc = _a.created_utc, _b = _a.titleShort, titleShort = _b === void 0 ? true : _b, id = _a.id, urlpreview = _a.urlpreview, score = _a.score, num_comments = _a.num_comments;\r\n    var _c = react_2.useState(false), isModalOpened = _c[0], SetIsModalOpened = _c[1];\r\n    var titleMod = title.length > 70 && titleShort ? title.substring(0, 64) + '... ' : title;\r\n    return (react_1.default.createElement(\"div\", { className: textcomponent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcomponent_css_1.default.metaData },\r\n            react_1.default.createElement(User_1.User, { author: author }),\r\n            react_1.default.createElement(TimeComment_1.TimeComment, { created_utc: created_utc })),\r\n        react_1.default.createElement(\"button\", { className: textcomponent_css_1.default.postLink, onClick: function () {\r\n                SetIsModalOpened(true);\r\n            } }, titleMod),\r\n        isModalOpened && (react_1.default.createElement(Post_1.Post, { urlpreview: urlpreview, id: id, title: title, author: author, created_utc: created_utc, onClose: function () { return SetIsModalOpened(false); }, score: score, num_comments: num_comments }))));\r\n}\r\nexports.TextComponent = TextComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextComponent/TextComponent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextComponent/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextComponent/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextComponent */ \"./src/shared/CardsList/Card/TextComponent/TextComponent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextComponent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextComponent/textcomponent.css":
/*!*******************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextComponent/textcomponent.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcomponent__textContent--1n1y-\",\n\t\"metaData\": \"textcomponent__metaData--2PVuX\",\n\t\"postLink\": \"textcomponent__postLink--dmjD3\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextComponent/textcomponent.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TimeComment/TimeComment.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TimeComment/TimeComment.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TimeComment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar timecomment_css_1 = __importDefault(__webpack_require__(/*! ./timecomment.css */ \"./src/shared/CardsList/Card/TimeComment/timecomment.css\"));\r\nfunction TimeComment(_a) {\r\n    var created_utc = _a.created_utc;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        created_utc < 60 && (react_1.default.createElement(\"span\", { className: timecomment_css_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: timecomment_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n            created_utc,\r\n            \" \",\r\n            created_utc == 1 && 'минута',\r\n            created_utc > 1 && created_utc < 5 && 'минуты',\r\n            ' ',\r\n            created_utc > 4 && 'минут',\r\n            \" \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n        created_utc > 60 && created_utc < 360 && (react_1.default.createElement(\"span\", { className: timecomment_css_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: timecomment_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n            created_utc / 60,\r\n            \" \\u0447\\u0430\\u0441\\u0430 \",\r\n            created_utc % 60,\r\n            \" \\u043C\\u0438\\u043D\\u0443\\u0442\\u044B \\u043D\\u0430\\u0437\\u0430\\u0434\"))));\r\n}\r\nexports.TimeComment = TimeComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TimeComment/TimeComment.tsx?");

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

/***/ "./src/shared/CardsList/Card/TimeComment/timecomment.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TimeComment/timecomment.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"createdAt\": \"timecomment__createdAt--3kC43\",\n\t\"publishedLabel\": \"timecomment__publishedLabel--1CxXs\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TimeComment/timecomment.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/User/User.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/User/User.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.User = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar user_css_1 = __importDefault(__webpack_require__(/*! ./user.css */ \"./src/shared/CardsList/Card/User/user.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar useUserAvatar_1 = __webpack_require__(/*! ../../../../hooks/useUserAvatar */ \"./src/hooks/useUserAvatar.ts\");\r\nfunction User(_a) {\r\n    var author = _a.author;\r\n    var data = useUserAvatar_1.useUserAvatar({ author: author });\r\n    return (react_1.default.createElement(\"div\", { className: user_css_1.default.userLink },\r\n        data.avatar ? (react_1.default.createElement(\"img\", { className: user_css_1.default.avatar, src: data.avatar })) : (react_1.default.createElement(Icons_1.RedditIcon, { size: '20px' })),\r\n        react_1.default.createElement(\"a\", { href: \"#user-url\", className: user_css_1.default.username }, data.user)));\r\n}\r\nexports.User = User;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/User/User.tsx?");

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

/***/ "./src/shared/CardsList/Card/User/user.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/User/user.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userLink\": \"user__userLink--1NY7B\",\n\t\"avatar\": \"user__avatar--on2f6\",\n\t\"username\": \"user__username--3ACnJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/User/user.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar postsContext_1 = __webpack_require__(/*! ../Context/postsContext */ \"./src/shared/Context/postsContext.tsx\");\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\r\nfunction CardsList() {\r\n    var posts = react_1.useContext(postsContext_1.postsContext);\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList }, posts.map(function (post, index) {\r\n        var urlpreview;\r\n        if (post.data.thumbnail === undefined)\r\n            urlpreview = '';\r\n        else\r\n            urlpreview = post.data.thumbnail;\r\n        var result = Math.ceil(Math.ceil(Math.abs(new Date().getTime() - post.data.created_utc * 1000)) /\r\n            (1000 * 60 * 60));\r\n        var author = post.data.author;\r\n        return (react_1.default.createElement(\"li\", { className: cardslist_css_1.default.cardLi, key: index },\r\n            react_1.default.createElement(Card_1.Card, { id: post.data.id, title: post.data.title, author: author, created_utc: result, urlpreview: urlpreview, score: post.data.score, num_comments: post.data.num_comments })));\r\n    })));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\",\n\t\"cardLi\": \"cardslist__cardLi--3-N0F\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar merge_1 = __webpack_require__(/*! ../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nfunction CommentForm(_a) {\r\n    var placeHolder = _a.placeHolder, textbtn = _a.textbtn, _b = _a.isOpen, isOpen = _b === void 0 ? true : _b, id = _a.id, onClick = _a.onClick, onSubmit = _a.onSubmit, onChange = _a.onChange, value = _a.value;\r\n    var inputRef = react_1.useRef(null);\r\n    var list = [\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Tagicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Copyicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Imgicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.SaveCommenticon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Personicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Personicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Renewicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Linkicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Microphoneicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Commentsicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Penicon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Lettericon, null) },\r\n        { As: 'li', img: react_1.default.createElement(Icons_1.Pdficon, null) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    react_1.useEffect(function () {\r\n        var _a, _b, _c, _d;\r\n        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n        (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.setSelectionRange((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.textLength, ((_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.textLength) + 1, 'forward');\r\n    }, [isOpen]);\r\n    if (!isOpen)\r\n        return react_1.default.createElement(\"div\", null);\r\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: onSubmit, key: id },\r\n        react_1.default.createElement(\"textarea\", { ref: inputRef, className: commentform_css_1.default.inputText, onChange: onChange, placeholder: placeHolder, value: value }),\r\n        react_1.default.createElement(\"div\", { className: commentform_css_1.default.commentEdit },\r\n            react_1.default.createElement(\"ul\", { className: commentform_css_1.default.ulEdit },\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: onClick })) })),\r\n            react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.btnSubmit }, textbtn))));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--Cs1Oi\",\n\t\"inputText\": \"commentform__inputText--1BDbX\",\n\t\"commentEdit\": \"commentform__commentEdit--1cwdc\",\n\t\"ulEdit\": \"commentform__ulEdit--2pxMw\",\n\t\"liEdit\": \"commentform__liEdit--3OYlL\",\n\t\"btnSubmit\": \"commentform__btnSubmit--2d0SV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nfunction CommentFormContainer(_a) {\r\n    var placeHolder = _a.placeHolder, _b = _a.nameAuthor, nameAuthor = _b === void 0 ? '' : _b, textbtn = _a.textbtn, _c = _a.isOpen, isOpen = _c === void 0 ? true : _c, id = _a.id, onChange = _a.onChange, valueText = _a.valueText;\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log(valueText);\r\n    }\r\n    function handleClick() {\r\n        console.log('cl');\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { id: id, placeHolder: placeHolder, textbtn: textbtn, onChange: onChange, onSubmit: handleSubmit, onClick: handleClick, isOpen: isOpen, nameAuthor: nameAuthor, value: valueText, key: id }));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentFormContainer/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentItem/CommentItem.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CommentsList/CommentItem/CommentItem.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentItem = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar __1 = __webpack_require__(/*! .. */ \"./src/shared/CommentsList/index.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../../../store/actions */ \"./src/store/actions.ts\");\r\nvar merge_1 = __webpack_require__(/*! ../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar TimeComment_1 = __webpack_require__(/*! ../../CardsList/Card/TimeComment */ \"./src/shared/CardsList/Card/TimeComment/index.ts\");\r\nvar User_1 = __webpack_require__(/*! ../../CardsList/Card/User */ \"./src/shared/CardsList/Card/User/index.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ../../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar ControlOpenAddComments_1 = __webpack_require__(/*! ../ControlOpenAddComments */ \"./src/shared/CommentsList/ControlOpenAddComments/index.ts\");\r\nvar commentitem_css_1 = __importDefault(__webpack_require__(/*! ./commentitem.css */ \"./src/shared/CommentsList/CommentItem/commentitem.css\"));\r\nfunction CommentItem(_a) {\r\n    var created_utc = _a.created_utc, subreddit = _a.subreddit, author = _a.author, body = _a.body, _b = _a.isOpenReply, isOpenReply = _b === void 0 ? false : _b, replies = _a.replies, id = _a.id;\r\n    var _c = react_1.useState(replies && replies.data.children.length > 0 ? false : true), openReplies = _c[0], setOpenReplies = _c[1];\r\n    var _d = react_1.useState(isOpenReply), openFormReply = _d[0], setOpenFormReply = _d[1];\r\n    var result = Math.ceil(Math.ceil(Math.abs(new Date().getTime() - created_utc * 1000)) /\r\n        (1000 * 60 * 60));\r\n    var handleItemClick = function () {\r\n        setOpenFormReply(!openFormReply);\r\n    };\r\n    var LIST = [\r\n        {\r\n            As: 'li',\r\n            text: 'Ответить',\r\n            img: react_1.default.createElement(Icons_1.CommentIcon, null),\r\n            onClick: handleItemClick,\r\n        },\r\n        { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },\r\n        { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    var valueText = react_redux_1.useSelector(function (state) {\r\n        var _a;\r\n        return ((_a = state.commentsForReplies[id]) === null || _a === void 0 ? void 0 : _a.reply) ? state.commentsForReplies[id].reply\r\n            : author + ' , ';\r\n    });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(event) {\r\n        dispatch(actions_1.updateReply(id, author, event.target.value));\r\n    }\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: commentitem_css_1.default.controls },\r\n            react_1.default.createElement(ControlOpenAddComments_1.ControlOpenAddComments, { openReplies: openReplies, onClickUp: function () { return setOpenReplies(false); }, onClickDown: function () { return setOpenReplies(true); } })),\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"div\", { className: commentitem_css_1.default.itemtitle },\r\n                react_1.default.createElement(\"div\", { className: commentitem_css_1.default.titlesub }, subreddit),\r\n                react_1.default.createElement(\"div\", { className: commentitem_css_1.default.itemtitle },\r\n                    react_1.default.createElement(TimeComment_1.TimeComment, { created_utc: result }),\r\n                    react_1.default.createElement(User_1.User, { author: author }))),\r\n            react_1.default.createElement(\"p\", { className: commentitem_css_1.default.textcomment }, body),\r\n            react_1.default.createElement(\"ul\", { className: commentitem_css_1.default.ulicons },\r\n                react_1.default.createElement(GenericList_1.GenericList, { underline: false, list: LIST.map(merge_1.merge({})) })),\r\n            react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { placeHolder: \"\", textbtn: \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\", nameAuthor: author, isOpen: openFormReply, onChange: handleChange, valueText: valueText })),\r\n        openReplies && replies && replies.data.children.length > 0 && (react_1.default.createElement(__1.CommentsList, { forauthor: author, key: author, comments: replies.data.children }))));\r\n}\r\nexports.CommentItem = CommentItem;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentItem/CommentItem.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentItem/commentitem.css":
/*!*************************************************************!*\
  !*** ./src/shared/CommentsList/CommentItem/commentitem.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"commentitem__controls--2sc-j\",\n\t\"item\": \"commentitem__item--3BZMi\",\n\t\"itemtitle\": \"commentitem__itemtitle--2XM9E\",\n\t\"titlesub\": \"commentitem__titlesub--Q2JWn\",\n\t\"ulicons\": \"commentitem__ulicons--2fJ_N\",\n\t\"textcomment\": \"commentitem__textcomment--2EU3f\",\n\t\"portalReply\": \"commentitem__portalReply--2zNWS\",\n\t\"replies\": \"commentitem__replies--2xWn1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentItem/commentitem.css?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentItem/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/CommentsList/CommentItem/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentItem */ \"./src/shared/CommentsList/CommentItem/CommentItem.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentItem/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentsList.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentsList/CommentsList.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CommentItem_1 = __webpack_require__(/*! ./CommentItem */ \"./src/shared/CommentsList/CommentItem/index.ts\");\r\nvar commentslist_css_1 = __importDefault(__webpack_require__(/*! ./commentslist.css */ \"./src/shared/CommentsList/commentslist.css\"));\r\nfunction CommentsList(_a) {\r\n    var comments = _a.comments, forauthor = _a.forauthor;\r\n    return (react_1.default.createElement(\"ul\", { className: commentslist_css_1.default.commentsList, key: forauthor }, comments.map(function (comment) {\r\n        if (!comment.data.body)\r\n            return null;\r\n        return (react_1.default.createElement(\"li\", { className: commentslist_css_1.default.item, key: comment.data.id },\r\n            react_1.default.createElement(CommentItem_1.CommentItem, { created_utc: comment.data.created_utc, subreddit: comment.data.subreddit, author: comment.data.author, body: comment.data.body, id: comment.data.id, replies: comment.data.replies })));\r\n    })));\r\n}\r\nexports.CommentsList = CommentsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentsList.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/ControlOpenAddComments/ControlOpenAddComments.tsx":
/*!***********************************************************************************!*\
  !*** ./src/shared/CommentsList/ControlOpenAddComments/ControlOpenAddComments.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ControlOpenAddComments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar BtnDown_1 = __webpack_require__(/*! ../../BtnDown */ \"./src/shared/BtnDown/index.ts\");\r\nvar BtnUp_1 = __webpack_require__(/*! ../../BtnUp */ \"./src/shared/BtnUp/index.ts\");\r\nfunction ControlOpenAddComments(_a) {\r\n    var onClickUp = _a.onClickUp, onClickDown = _a.onClickDown, openReplies = _a.openReplies;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(BtnUp_1.BtnUp, { click: onClickUp, state: openReplies }),\r\n        react_1.default.createElement(BtnDown_1.BtnDown, { click: onClickDown, state: openReplies })));\r\n}\r\nexports.ControlOpenAddComments = ControlOpenAddComments;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/ControlOpenAddComments/ControlOpenAddComments.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/ControlOpenAddComments/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CommentsList/ControlOpenAddComments/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ControlOpenAddComments */ \"./src/shared/CommentsList/ControlOpenAddComments/ControlOpenAddComments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/ControlOpenAddComments/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsList/commentslist.css":
/*!**************************************************!*\
  !*** ./src/shared/CommentsList/commentslist.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"commentslist__item--19c2O\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/commentslist.css?");

/***/ }),

/***/ "./src/shared/CommentsList/index.ts":
/*!******************************************!*\
  !*** ./src/shared/CommentsList/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsList */ \"./src/shared/CommentsList/CommentsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children);\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/Context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.postsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nexports.postsContext = react_1.default.createContext([]);\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var posts = usePostsData_1.usePostsData();\r\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: posts }, children));\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/Context/postsContext.tsx?");

/***/ }),

/***/ "./src/shared/Context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/Context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = react_1.default.createContext({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var datauser = useUserData_1.useUserData();\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: datauser }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/Context/userContext.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.css":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"GenericList__item--Ucdcn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.css?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\n//рендериит любые списки\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar GenericList_css_1 = __importDefault(__webpack_require__(/*! ./GenericList.css */ \"./src/shared/GenericList/GenericList.css\"));\r\nvar noop = function () {\r\n    null;\r\n};\r\nfunction GenericList(_a) {\r\n    var list = _a.list, _b = _a.underline, underline = _b === void 0 ? true : _b;\r\n    var liStyle = underline\r\n        ? { border: '1px solid #ececec' }\r\n        : { border: 'none' };\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a, index) {\r\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, img = _a.img, text = _a.text, _c = _a.onClick, onClick = _c === void 0 ? noop : _c, id = _a.id, href = _a.href;\r\n        return (react_1.default.createElement(As, { style: liStyle, className: GenericList_css_1.default.item, onClick: function () { return onClick(id, index); }, key: index, id: id, href: href },\r\n            img,\r\n            text));\r\n    })));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/GenericList/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./GenericList */ \"./src/shared/GenericList/GenericList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle/ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nvar userContext_1 = __webpack_require__(/*! ../../Context/userContext */ \"./src/shared/Context/userContext.tsx\");\r\nvar SearchIcon_1 = __webpack_require__(/*! ../../Icons/SearchIcon */ \"./src/shared/Icons/SearchIcon.tsx\");\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nfunction SearchBlock() {\r\n    var _a = react_1.useContext(userContext_1.userContext), data = _a.data, _b = _a.loading, loading = _b === void 0 ? false : _b;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchblock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data === null || data === void 0 ? void 0 : data.iconImg, username: data === null || data === void 0 ? void 0 : data.name, loading: loading }),\r\n        react_1.default.createElement(\"div\", { className: searchblock_css_1.default.blockinput },\r\n            react_1.default.createElement(\"button\", { className: searchblock_css_1.default.btnsearch, \"aria-label\": \"\\u041F\\u043E\\u0438\\u0441\\u043A\" },\r\n                react_1.default.createElement(SearchIcon_1.SearchIcon, null)),\r\n            react_1.default.createElement(\"input\", { className: searchblock_css_1.default.searchinput, placeholder: \"\\u041F\\u043E\\u0438\\u0441\\u043A\" }))));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar enumIcon_1 = __webpack_require__(/*! ../../../../const/enumIcon */ \"./src/const/enumIcon.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, _b = _a.username, username = _b === void 0 ? 'Аноним' : _b, loading = _a.loading;\r\n    return (React.createElement(\"div\", null,\r\n        React.createElement(\"a\", { className: userblock_css_1.default.userblock, href: \"https://www.reddit.com/api/v1/authorize?client_id=iYguATByxd-5PA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\" },\r\n            React.createElement(\"div\", { className: userblock_css_1.default.photo }, avatarSrc ? (React.createElement(\"img\", { className: userblock_css_1.default.avatar, src: avatarSrc, alt: \"user avatar\" })) : (React.createElement(Icon_1.Icon, { As: 'div', icon: enumIcon_1.EIcon.anonim, size: 50, mobileSize: 30 }))),\r\n            React.createElement(\"div\", { className: userblock_css_1.default.name }, loading ? 'Загрузка...' : \"\" + username))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userblock\": \"userblock__userblock--2-sph\",\n\t\"photo\": \"userblock__photo--jvysj\",\n\t\"name\": \"userblock__name--2mio1\",\n\t\"avatar\": \"userblock__avatar--3vdFj\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"blockinput\": \"searchblock__blockinput--2bu_R\",\n\t\"searchblock\": \"searchblock__searchblock--34CVO\",\n\t\"searchinput\": \"searchblock__searchinput--3_7zV\",\n\t\"btnsearch\": \"searchblock__btnsearch--gAzMf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortblock }, \"sorting\");\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortblock\": \"sortblock__sortblock--2jFPk\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\");\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar enumColor_1 = __webpack_require__(/*! ../../const/enumColor */ \"./src/const/enumColor.ts\");\r\nvar enumIcon_1 = __webpack_require__(/*! ../../const/enumIcon */ \"./src/const/enumIcon.ts\");\r\nfunction Icon(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? 'button' : _d, _e = props.color, color = _e === void 0 ? enumColor_1.EColor.black : _e, _f = props.icon, icon = _f === void 0 ? enumIcon_1.EIcon.save : _f, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;\r\n    var classes = classnames_1.default(icon_css_1.default[\"s\" + size], (_a = {}, _a[icon_css_1.default[\"m\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[icon_css_1.default[\"m\" + desktopSize]] = desktopSize, _b), (_c = {}, _c[icon_css_1.default[\"m\" + tabletSize]] = tabletSize, _c), icon_css_1.default[color], icon_css_1.default[icon]);\r\n    return react_1.default.createElement(As, { className: classes });\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/icon.css":
/*!**********************************!*\
  !*** ./src/shared/Icon/icon.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"save\": \"icon__save--3rjhI\",\n\t\"share\": \"icon__share--2GsUq\",\n\t\"anonim\": \"icon__anonim--1Yc8m\",\n\t\"s10\": \"icon__s10--6UHq6\",\n\t\"s12\": \"icon__s12--LuYYL\",\n\t\"s14\": \"icon__s14--m4nyp\",\n\t\"s16\": \"icon__s16--NYdak\",\n\t\"s20\": \"icon__s20--1h1Sg\",\n\t\"s30\": \"icon__s30--2MvJ-\",\n\t\"s50\": \"icon__s50--3qS3F\",\n\t\"m10\": \"icon__m10--2A792\",\n\t\"m12\": \"icon__m12--1-U0b\",\n\t\"m20\": \"icon__m20--22ACs\",\n\t\"m30\": \"icon__m30--lay7A\",\n\t\"t10\": \"icon__t10--1yy-4\",\n\t\"t12\": \"icon__t12--3KfvD\",\n\t\"t16\": \"icon__t16--2OInr\",\n\t\"t20\": \"icon__t20--uj2iv\",\n\t\"t50\": \"icon__t50--cIkH5\",\n\t\"d10\": \"icon__d10--3846z\",\n\t\"d12\": \"icon__d12--29ZTk\",\n\t\"d20\": \"icon__d20--3J3ju\",\n\t\"d50\": \"icon__d50--Zzyqu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/CommentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentIcon() {\r\n    return (React.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentIcon = CommentIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Commentsicon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/Commentsicon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Commentsicon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Commentsicon() {\r\n    return (React.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z\", fill: \"#999999\" })));\r\n}\r\nexports.Commentsicon = Commentsicon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Commentsicon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ComplainIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/ComplainIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ComplainIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ComplainIcon() {\r\n    return (React.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\r\n}\r\nexports.ComplainIcon = ComplainIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ComplainIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Copyicon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/Copyicon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Copyicon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Copyicon() {\r\n    return (React.createElement(\"svg\", { width: \"16\", height: \"20\", viewBox: \"0 0 16 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z\", fill: \"#999999\" })));\r\n}\r\nexports.Copyicon = Copyicon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Copyicon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Crossicon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/Crossicon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Crossicon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Crossicon() {\r\n    return (React.createElement(\"svg\", { width: \"21\", height: \"21\", viewBox: \"0 0 21 21\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z\", fill: \"#ADADAD\" }),\r\n        React.createElement(\"path\", { d: \"M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z\", fill: \"#ADADAD\" })));\r\n}\r\nexports.Crossicon = Crossicon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Crossicon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/DownIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/DownIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DownIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction DownIcon() {\r\n    return (React.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.DownIcon = DownIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/DownIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/HideIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/HideIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.HideIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction HideIcon() {\r\n    return (React.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\r\n}\r\nexports.HideIcon = HideIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/HideIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Imgicon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/Imgicon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Imgicon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Imgicon() {\r\n    return (React.createElement(\"svg\", { width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z\", fill: \"#999999\" })));\r\n}\r\nexports.Imgicon = Imgicon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Imgicon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Lettericon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/Lettericon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Lettericon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Lettericon() {\r\n    return (React.createElement(\"svg\", { width: \"16\", height: \"18\", viewBox: \"0 0 16 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z\", fill: \"#999999\" })));\r\n}\r\nexports.Lettericon = Lettericon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Lettericon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Linkicon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/Linkicon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Linkicon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Linkicon() {\r\n    return (React.createElement(\"svg\", { width: \"20\", height: \"10\", viewBox: \"0 0 20 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z\", fill: \"#999999\" })));\r\n}\r\nexports.Linkicon = Linkicon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Linkicon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon() {\r\n    return (React.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#F3F3F3\" }),\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#F3F3F3\" }),\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#F3F3F3\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Microphoneicon.tsx":
/*!*********************************************!*\
  !*** ./src/shared/Icons/Microphoneicon.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Microphoneicon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Microphoneicon() {\r\n    return (React.createElement(\"svg\", { width: \"20\", height: \"18\", viewBox: \"0 0 20 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z\", fill: \"#999999\" })));\r\n}\r\nexports.Microphoneicon = Microphoneicon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Microphoneicon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Pdficon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/Pdficon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Pdficon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Pdficon() {\r\n    return (React.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z\", fill: \"#999999\" })));\r\n}\r\nexports.Pdficon = Pdficon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Pdficon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Penicon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/Penicon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Penicon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Penicon() {\r\n    return (React.createElement(\"svg\", { width: \"19\", height: \"19\", viewBox: \"0 0 19 19\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z\", fill: \"#999999\" })));\r\n}\r\nexports.Penicon = Penicon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Penicon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Personicon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/Personicon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Personicon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Personicon() {\r\n    return (React.createElement(\"svg\", { width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z\", fill: \"#999999\" })));\r\n}\r\nexports.Personicon = Personicon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Personicon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/RedditIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/RedditIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RedditIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction RedditIcon(prop) {\r\n    return (React.createElement(\"svg\", { width: prop.size, height: prop.size, xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 20 20\" },\r\n        React.createElement(\"g\", null,\r\n            React.createElement(\"circle\", { fill: \"#FF4500\", cx: \"10\", cy: \"10\", r: \"10\" }),\r\n            React.createElement(\"path\", { fill: \"#FFF\", d: \"M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z\" }))));\r\n}\r\nexports.RedditIcon = RedditIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/RedditIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Renewicon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/Renewicon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Renewicon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Renewicon() {\r\n    return (React.createElement(\"svg\", { width: \"22\", height: \"16\", viewBox: \"0 0 22 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z\", fill: \"#999999\" })));\r\n}\r\nexports.Renewicon = Renewicon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Renewicon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SaveCommenticon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Icons/SaveCommenticon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveCommenticon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction SaveCommenticon() {\r\n    return (React.createElement(\"svg\", { width: \"14\", height: \"17\", viewBox: \"0 0 14 17\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z\", fill: \"#999999\" })));\r\n}\r\nexports.SaveCommenticon = SaveCommenticon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SaveCommenticon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction SaveIcon() {\r\n    return (React.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SearchIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/SearchIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction SearchIcon() {\r\n    return (React.createElement(\"svg\", { width: \"19\", height: \"19\", viewBox: \"0 0 19 19\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M13.541 11.9497H12.7037L12.407 11.6564C13.4456 10.418 14.0709 8.81018 14.0709 7.06118C14.0709 3.16124 10.9868 0 7.18194 0C3.37711 0 0.292969 3.16124 0.292969 7.06118C0.292969 10.9611 3.37711 14.1224 7.18194 14.1224C8.88828 14.1224 10.4568 13.4814 11.6651 12.4168L11.9512 12.721V13.5792L17.2504 19L18.8296 17.3814L13.541 11.9497ZM7.18194 11.9497C4.54293 11.9497 2.41265 9.76615 2.41265 7.06118C2.41265 4.3562 4.54293 2.17267 7.18194 2.17267C9.82094 2.17267 11.9512 4.3562 11.9512 7.06118C11.9512 9.76615 9.82094 11.9497 7.18194 11.9497Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.SearchIcon = SearchIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SearchIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ShareIcon() {\r\n    return (React.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.ShareIcon = ShareIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Tagicon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/Tagicon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Tagicon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Tagicon() {\r\n    return (React.createElement(\"svg\", { width: \"20\", height: \"12\", viewBox: \"0 0 20 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z\", fill: \"#999999\" })));\r\n}\r\nexports.Tagicon = Tagicon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Tagicon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/UpIcon.tsx":
/*!*************************************!*\
  !*** ./src/shared/Icons/UpIcon.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UpIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction UpIcon() {\r\n    return (React.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.UpIcon = UpIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/UpIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentIcon */ \"./src/shared/Icons/CommentIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ComplainIcon */ \"./src/shared/Icons/ComplainIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./HideIcon */ \"./src/shared/Icons/HideIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/Icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/Icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./DownIcon */ \"./src/shared/Icons/DownIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./UpIcon */ \"./src/shared/Icons/UpIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Copyicon */ \"./src/shared/Icons/Copyicon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Imgicon */ \"./src/shared/Icons/Imgicon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Tagicon */ \"./src/shared/Icons/Tagicon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveCommenticon */ \"./src/shared/Icons/SaveCommenticon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Personicon */ \"./src/shared/Icons/Personicon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Renewicon */ \"./src/shared/Icons/Renewicon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Linkicon */ \"./src/shared/Icons/Linkicon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Microphoneicon */ \"./src/shared/Icons/Microphoneicon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Commentsicon */ \"./src/shared/Icons/Commentsicon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Penicon */ \"./src/shared/Icons/Penicon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Lettericon */ \"./src/shared/Icons/Lettericon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Pdficon */ \"./src/shared/Icons/Pdficon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./RedditIcon */ \"./src/shared/Icons/RedditIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Crossicon */ \"./src/shared/Icons/Crossicon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children);\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nvar TextComponent_1 = __webpack_require__(/*! ../CardsList/Card/TextComponent */ \"./src/shared/CardsList/Card/TextComponent/index.ts\");\r\nvar Controls_1 = __webpack_require__(/*! ../CardsList/Card/Controls */ \"./src/shared/CardsList/Card/Controls/index.ts\");\r\nvar postsContext_1 = __webpack_require__(/*! ../Context/postsContext */ \"./src/shared/Context/postsContext.tsx\");\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar merge_1 = __webpack_require__(/*! ../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar CommentsList_1 = __webpack_require__(/*! ../CommentsList */ \"./src/shared/CommentsList/index.ts\");\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.ts\");\r\nvar useCloseElement_1 = __webpack_require__(/*! ../../hooks/useCloseElement */ \"./src/hooks/useCloseElement.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction Post(_a) {\r\n    var title = _a.title, onClose = _a.onClose, author = _a.author, created_utc = _a.created_utc, id = _a.id, urlpreview = _a.urlpreview, score = _a.score, num_comments = _a.num_comments;\r\n    var ref = react_1.useRef(null);\r\n    var posts = react_1.useContext(postsContext_1.postsContext);\r\n    var comments = useCommentsData_1.useCommentsData(id);\r\n    var isClose = useCloseElement_1.useCloseElement(ref, false, onClose);\r\n    var LIST = [\r\n        { As: 'li', text: 'Комментарии', img: react_1.default.createElement(Icons_1.CommentIcon, null) },\r\n        { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },\r\n        { As: 'li', text: 'Скрыть', img: react_1.default.createElement(Icons_1.HideIcon, null) },\r\n        { As: 'li', text: 'Сохранить', img: react_1.default.createElement(Icons_1.SaveIcon, null) },\r\n        { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    console.log(comments);\r\n    var postMedia, urlImg, checkurl, selftext;\r\n    posts.forEach(function (post) {\r\n        var _a, _b;\r\n        if (post.data.id === id) {\r\n            postMedia = (_b = (_a = post.data.media) === null || _a === void 0 ? void 0 : _a.reddit_video) === null || _b === void 0 ? void 0 : _b.fallback_url;\r\n            urlImg = post.data.url;\r\n            checkurl = urlImg.includes('jpg') || urlImg.includes('png');\r\n            selftext = post.data.selftext;\r\n        }\r\n    });\r\n    var valueText = react_redux_1.useSelector(function (state) { var _a; return ((_a = state.commentForPost[id]) === null || _a === void 0 ? void 0 : _a.comment) ? state.commentForPost[id].comment : ''; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(event) {\r\n        dispatch(actions_1.updateComment(id, title, event.target.value));\r\n    }\r\n    function handleClick() {\r\n        console.log('click');\r\n    }\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node || isClose)\r\n        return react_1.default.createElement(\"div\", null);\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: post_css_1.default.modalWrap },\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n            react_1.default.createElement(\"button\", { className: post_css_1.default.cross, onClick: onClose },\r\n                react_1.default.createElement(Icons_1.Crossicon, null)),\r\n            react_1.default.createElement(\"div\", { className: post_css_1.default.modalTitle },\r\n                react_1.default.createElement(Controls_1.Controls, { score: score, num_comments: num_comments }),\r\n                react_1.default.createElement(TextComponent_1.TextComponent, { title: title, author: author, created_utc: created_utc, titleShort: false, id: id, urlpreview: urlpreview, score: score, num_comments: num_comments })),\r\n            react_1.default.createElement(\"div\", { className: post_css_1.default.modalContent },\r\n                react_1.default.createElement(\"p\", null, selftext),\r\n                postMedia ? (react_1.default.createElement(\"video\", { className: post_css_1.default.modalContent__media, controls: true },\r\n                    react_1.default.createElement(\"source\", { src: postMedia, type: \"video/mp4\" }))) : checkurl ? (react_1.default.createElement(\"img\", { className: post_css_1.default.modalContent__media, src: urlImg, alt: \"pic\" })) : ((urlpreview.includes('//') && (react_1.default.createElement(react_1.default.Fragment, null,\r\n                    react_1.default.createElement(\"img\", { className: post_css_1.default.modalContent__media, src: urlpreview, alt: \"pic\" }),\r\n                    react_1.default.createElement(\"a\", { href: urlImg }, urlImg)))) || react_1.default.createElement(Icons_1.RedditIcon, { size: '100px' }))),\r\n            react_1.default.createElement(\"ul\", { className: post_css_1.default.ulicons },\r\n                react_1.default.createElement(GenericList_1.GenericList, { underline: false, list: LIST.map(merge_1.merge({ onClick: handleClick })) })),\r\n            react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { id: 'post', placeHolder: 'Оставьте Ваш комментарий', textbtn: 'Комментировать', onChange: handleChange, valueText: valueText }),\r\n            comments.length > 0 && (react_1.default.createElement(CommentsList_1.CommentsList, { comments: comments, forauthor: author, key: author })))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modalWrap\": \"post__modalWrap--1EYNj\",\n\t\"modal\": \"post__modal--yRo-c\",\n\t\"modalTitle\": \"post__modalTitle--2EKXn\",\n\t\"modalContent\": \"post__modalContent--38k5y\",\n\t\"modalContent__media\": \"post__modalContent__media--1P4YL\",\n\t\"cross\": \"post__cross--2ieHK\",\n\t\"ulicons\": \"post__ulicons--4AK_C\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setToken = exports.updateReply = exports.updateComment = exports.UPDATE_REPLY = exports.SET_TOKEN = exports.UPDATE_COMMENT = void 0;\r\nexports.UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nexports.SET_TOKEN = 'SET_TOKEN';\r\nexports.UPDATE_REPLY = 'UPDATE_REPLY';\r\nexports.updateComment = function (key, post, comment) { return ({\r\n    type: exports.UPDATE_COMMENT,\r\n    key: key,\r\n    post: post,\r\n    comment: comment,\r\n}); };\r\nexports.updateReply = function (key, forAuthor, reply) { return ({\r\n    type: exports.UPDATE_REPLY,\r\n    key: key,\r\n    forAuthor: forAuthor,\r\n    reply: reply,\r\n}); };\r\nexports.setToken = function (token) { return ({\r\n    type: exports.SET_TOKEN,\r\n    token: token,\r\n}); };\r\n\n\n//# sourceURL=webpack:///./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.meRequestSuccess = exports.meRequest = exports.ME_REQUEST_ERROR = exports.ME_REQUEST_SUCCESS = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nexports.meRequest = function () { return ({\r\n    type: exports.ME_REQUEST,\r\n}); };\r\nexports.meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.meRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch(exports.meRequest());\r\n    axios_1.default\r\n        .get('https://oauth.reddit.com/api/v1/me', {\r\n        headers: { Authorization: \"bearer \" + getState().token },\r\n    })\r\n        .then(function (resp) {\r\n        var userData = resp.data;\r\n        dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch(exports.meRequestError(String(error)));\r\n    });\r\n    return getState().token;\r\n}; };\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/me/reducer.ts":
/*!*********************************!*\
  !*** ./src/store/me/reducer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar store_1 = __webpack_require__(/*! ../store */ \"./src/store/store.ts\");\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/me/actions.ts\");\r\nexports.meReducer = function (state, action) {\r\n    if (state === void 0) { state = store_1.initialState.me; }\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/me/reducer.ts?");

/***/ }),

/***/ "./src/store/reducers.ts":
/*!*******************************!*\
  !*** ./src/store/reducers.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/actions.ts\");\r\nvar actions_2 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store/store.ts\");\r\nexports.rootReducer = function (state, action) {\r\n    var _a, _b;\r\n    if (state === void 0) { state = store_1.initialState; }\r\n    switch (action.type) {\r\n        case actions_1.UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentForPost: __assign(__assign({}, state.commentForPost), (_a = {}, _a[action.key] = { post: action.post, comment: action.comment }, _a)) });\r\n        case actions_1.UPDATE_REPLY:\r\n            return __assign(__assign({}, state), { commentsForReplies: __assign(__assign({}, state.commentsForReplies), (_b = {}, _b[action.key] = { forAuthor: action.forAuthor, reply: action.reply }, _b)) });\r\n        case actions_1.SET_TOKEN:\r\n            return __assign(__assign({}, state), { token: action.token });\r\n        case actions_2.ME_REQUEST_SUCCESS:\r\n        case actions_2.ME_REQUEST:\r\n        case actions_2.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/reducers.ts?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.store = exports.initialState = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar reducers_1 = __webpack_require__(/*! ./reducers */ \"./src/store/reducers.ts\");\r\nexports.initialState = {\r\n    commentForPost: {},\r\n    commentsForReplies: {},\r\n    token: '',\r\n    me: { loading: false, error: '', data: {} },\r\n};\r\nexports.store = redux_1.createStore(reducers_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\n// добавляет в объекты какие-то значения для создания ключей\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/merge.ts":
/*!*******************************!*\
  !*** ./src/utils/js/merge.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.merge = void 0;\r\nfunction merge(obj) {\r\n    return function (obj2) { return (__assign(__assign({}, obj), obj2)); };\r\n}\r\nexports.merge = merge;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/merge.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\nexports.generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateId = function (obj) { return assoc_1.assoc('id', exports.generateRandomString())(obj); };\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });