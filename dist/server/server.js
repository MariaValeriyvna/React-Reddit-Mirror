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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EIcon = void 0;
var EIcon;
(function (EIcon) {
    EIcon["save"] = "save";
    EIcon["share"] = "share";
    EIcon["anonim"] = "anonim";
})(EIcon = exports.EIcon || (exports.EIcon = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.tokenContext = react_1.default.createContext('');


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icon_css_1 = __importDefault(__webpack_require__(35));
var classnames_1 = __importDefault(__webpack_require__(6));
var enumColor_1 = __webpack_require__(7);
var enumIcon_1 = __webpack_require__(2);
function Icon(props) {
    var _a, _b, _c;
    var _d = props.As, As = _d === void 0 ? 'button' : _d, _e = props.color, color = _e === void 0 ? enumColor_1.EColor.black : _e, _f = props.icon, icon = _f === void 0 ? enumIcon_1.EIcon.save : _f, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;
    var classes = classnames_1.default(icon_css_1.default["s" + size], (_a = {}, _a[icon_css_1.default["m" + mobileSize]] = mobileSize, _a), (_b = {}, _b[icon_css_1.default["m" + desktopSize]] = desktopSize, _b), (_c = {}, _c[icon_css_1.default["m" + tabletSize]] = tabletSize, _c), icon_css_1.default[color], icon_css_1.default[icon]);
    return react_1.default.createElement(As, { className: classes });
}
exports.Icon = Icon;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContextProvider = exports.userContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useUserData_1 = __webpack_require__(30);
exports.userContext = react_1.default.createContext({});
function UserContextProvider(_a) {
    var children = _a.children;
    var data = useUserData_1.useUserData()[0];
    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));
}
exports.UserContextProvider = UserContextProvider;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EColor = void 0;
var EColor;
(function (EColor) {
    EColor["black"] = "black";
    EColor["orange"] = "orange";
    EColor["green"] = "green";
    EColor["white"] = "white";
    EColor["greyF4"] = "greyF4";
    EColor["greyF3"] = "greyF3";
    EColor["greyD9"] = "greyD9";
    EColor["greyC4"] = "greyC4";
    EColor["grey99"] = "grey99";
    EColor["grey66"] = "grey66";
})(EColor = exports.EColor || (exports.EColor = {}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsContextProvider = exports.postsContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var usePostsData_1 = __webpack_require__(46);
exports.postsContext = react_1.default.createContext([]);
function PostsContextProvider(_a) {
    var children = _a.children;
    var posts = usePostsData_1.usePostsData();
    console.log('context', posts);
    return (react_1.default.createElement(exports.postsContext.Provider, { value: posts }, children));
}
exports.PostsContextProvider = PostsContextProvider;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(67), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(68), exports);
__exportStar(__webpack_require__(69), exports);
__exportStar(__webpack_require__(70), exports);
__exportStar(__webpack_require__(71), exports);
__exportStar(__webpack_require__(72), exports);
__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentIcon = void 0;
var React = __importStar(__webpack_require__(0));
function CommentIcon() {
    return (React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
}
exports.CommentIcon = CommentIcon;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(12));
var server_1 = __importDefault(__webpack_require__(13));
var axios_1 = __importDefault(__webpack_require__(1));
var App_1 = __webpack_require__(14);
var indexTemplate_1 = __webpack_require__(88);
var app = express_1.default();
app.use('/static', express_1.default.static('./dist/client'));
app.get("/", function (req, res) {
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));
});
app.get("/auth", function (req, res) {
    axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=" + req.query.code + "&redirect_uri=http://localhost:3000/auth", {
        auth: { username: 'undefined', password: 'GzOmTjX6TX1bVg3zAa74xRnQCkTX2Q' },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    })
        .then(function (_a) {
        var data = _a.data;
        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));
    })
        .catch(console.log);
});
app.listen(3000, function () {
    console.log('Server started on http://localhost:3000');
});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var root_1 = __webpack_require__(15);
__webpack_require__(16);
var Layout_1 = __webpack_require__(23);
var Header_1 = __webpack_require__(26);
var Content_1 = __webpack_require__(41);
var CardsList_1 = __webpack_require__(44);
var useToken_1 = __webpack_require__(87);
var TokenContext_1 = __webpack_require__(3);
var userContext_1 = __webpack_require__(5);
var postsContext_1 = __webpack_require__(8);
function AppComponent() {
    var token = useToken_1.useToken()[0];
    return (react_1.default.createElement(TokenContext_1.tokenContext.Provider, { value: token },
        react_1.default.createElement(userContext_1.UserContextProvider, null,
            react_1.default.createElement(postsContext_1.PostsContextProvider, null,
                react_1.default.createElement(Layout_1.Layout, null,
                    react_1.default.createElement(Header_1.Header, null),
                    react_1.default.createElement(Content_1.Content, null,
                        react_1.default.createElement(CardsList_1.CardsList, null)))))));
}
exports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(18);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(19);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(20);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(21);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto'), local('Roboto-Regular'),\r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'), \r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff'); /* Modern Browsers */\r\n}\r\n/* roboto-500 - cyrillic */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  src: local('Roboto'),\r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), \r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff');/* Modern Browsers */\r\n}\r\n:root {\r\n  --black: #333333;\r\n  --orange: #cc6633;\r\n  --green: #a4cc33;\r\n  --white: #ffffff;\r\n  --greyF4: #f4f4f4;\r\n  --greyF3: #f3f3f3;\r\n  --greyD9: #d9d9d9;\r\n  --greyC4: #c4c4c4;\r\n  --grey99: #999999;\r\n  --grey66: #666666;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--greyF4);\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  font-family: 'Roboto', serif;\r\n}\r\n\r\n* {\r\n  color: var(--black);\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: greyscale;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\nbutton {\r\n  padding: 0;\r\n  border: 0;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (url, options) {
    if (!options) {
        // eslint-disable-next-line no-param-reassign
        options = {};
    } // eslint-disable-next-line no-underscore-dangle, no-param-reassign
    url = url && url.__esModule ? url.default : url;
    if (typeof url !== 'string') {
        return url;
    } // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        // eslint-disable-next-line no-param-reassign
        url = url.slice(1, -1);
    }
    if (options.hash) {
        // eslint-disable-next-line no-param-reassign
        url += options.hash;
    } // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url) || options.needQuotes) {
        return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
    }
    return url;
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./static/src/fonts/roboto-v20-cyrillic-regular.woff2");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./static/src/fonts/roboto-v20-cyrillic-regular.woff");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./static/src/fonts/roboto-v20-cyrillic-500.woff2");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./static/src/fonts/roboto-v20-cyrillic-500.woff");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(24), exports);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(25));
function Layout(_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: layout_css_1.default.layout }, children);
}
exports.Layout = Layout;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(27));
var SearchBlock_1 = __webpack_require__(28);
var ThreadTitle_1 = __webpack_require__(37);
var SortBlock_1 = __webpack_require__(39);
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG"
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importStar(__webpack_require__(0));
var searchblock_css_1 = __importDefault(__webpack_require__(29));
var userContext_1 = __webpack_require__(5);
var SearchIcon_1 = __webpack_require__(31);
var UserBlock_1 = __webpack_require__(32);
function SearchBlock() {
    var _a = react_1.useContext(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name;
    return (react_1.default.createElement("div", { className: searchblock_css_1.default.searchblock },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, username: name }),
        react_1.default.createElement("div", { className: searchblock_css_1.default.blockinput },
            react_1.default.createElement("button", { className: searchblock_css_1.default.btnsearch, "aria-label": "\u041F\u043E\u0438\u0441\u043A" },
                react_1.default.createElement(SearchIcon_1.SearchIcon, null)),
            react_1.default.createElement("input", { className: searchblock_css_1.default.searchinput, placeholder: "\u041F\u043E\u0438\u0441\u043A" }))));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blockinput": "searchblock__blockinput--2bu_R",
	"searchblock": "searchblock__searchblock--34CVO",
	"searchinput": "searchblock__searchinput--3_7zV",
	"btnsearch": "searchblock__btnsearch--gAzMf"
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(1));
var TokenContext_1 = __webpack_require__(3);
function useUserData() {
    var _a = react_1.useState({}), data = _a[0], setData = _a[1];
    var token = react_1.useContext(TokenContext_1.tokenContext);
    react_1.useEffect(function () {
        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {
            headers: { Authorization: "bearer " + token }
        })
            .then(function (resp) {
            var userData = resp.data;
            setData({ name: userData.name, iconImg: userData.icon_img });
        })
            .catch(console.log);
    }, [token]);
    return [data];
}
exports.useUserData = useUserData;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchIcon = void 0;
var React = __importStar(__webpack_require__(0));
function SearchIcon() {
    return (React.createElement("svg", { width: "19", height: "19", viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M13.541 11.9497H12.7037L12.407 11.6564C13.4456 10.418 14.0709 8.81018 14.0709 7.06118C14.0709 3.16124 10.9868 0 7.18194 0C3.37711 0 0.292969 3.16124 0.292969 7.06118C0.292969 10.9611 3.37711 14.1224 7.18194 14.1224C8.88828 14.1224 10.4568 13.4814 11.6651 12.4168L11.9512 12.721V13.5792L17.2504 19L18.8296 17.3814L13.541 11.9497ZM7.18194 11.9497C4.54293 11.9497 2.41265 9.76615 2.41265 7.06118C2.41265 4.3562 4.54293 2.17267 7.18194 2.17267C9.82094 2.17267 11.9512 4.3562 11.9512 7.06118C11.9512 9.76615 9.82094 11.9497 7.18194 11.9497Z", fill: "#C4C4C4" })));
}
exports.SearchIcon = SearchIcon;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var React = __importStar(__webpack_require__(0));
var enumIcon_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(34);
var userblock_css_1 = __importDefault(__webpack_require__(36));
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, _b = _a.username, username = _b === void 0 ? 'Аноним' : _b;
    return (React.createElement("div", null,
        React.createElement("a", { className: userblock_css_1.default.userblock, href: "https://www.reddit.com/api/v1/authorize?client_id=iYguATByxd-5PA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity" },
            React.createElement("div", { className: userblock_css_1.default.photo }, avatarSrc ? (React.createElement("img", { className: userblock_css_1.default.avatar, src: avatarSrc, alt: "user avatar" })) : (React.createElement(Icon_1.Icon, { As: 'div', icon: enumIcon_1.EIcon.anonim, size: 50, mobileSize: 30 }))),
            React.createElement("div", { className: userblock_css_1.default.name }, username))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(4), exports);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"save": "icon__save--3rjhI",
	"share": "icon__share--2GsUq",
	"anonim": "icon__anonim--1Yc8m",
	"s10": "icon__s10--6UHq6",
	"s12": "icon__s12--LuYYL",
	"s14": "icon__s14--m4nyp",
	"s16": "icon__s16--NYdak",
	"s20": "icon__s20--1h1Sg",
	"s30": "icon__s30--2MvJ-",
	"s50": "icon__s50--3qS3F",
	"m10": "icon__m10--2A792",
	"m12": "icon__m12--1-U0b",
	"m20": "icon__m20--22ACs",
	"m30": "icon__m30--lay7A",
	"t10": "icon__t10--1yy-4",
	"t12": "icon__t12--3KfvD",
	"t16": "icon__t16--2OInr",
	"t20": "icon__t20--uj2iv",
	"t50": "icon__t50--cIkH5",
	"d10": "icon__d10--3846z",
	"d12": "icon__d12--29ZTk",
	"d20": "icon__d20--3J3ju",
	"d50": "icon__d50--Zzyqu"
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userblock": "userblock__userblock--2-sph",
	"photo": "userblock__photo--jvysj",
	"name": "userblock__name--2mio1",
	"avatar": "userblock__avatar--3vdFj"
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_css_1 = __importDefault(__webpack_require__(38));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_css_1.default.threadTitle }, "Header"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--oxugx"
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sortblock_css_1 = __importDefault(__webpack_require__(40));
function SortBlock() {
    return (react_1.default.createElement("div", { className: sortblock_css_1.default.sortblock }, "sorting"));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortblock": "sortblock__sortblock--2jFPk"
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(43));
function Content(_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", { className: content_css_1.default.content }, children));
}
exports.Content = Content;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var cardslist_css_1 = __importDefault(__webpack_require__(45));
var postsContext_1 = __webpack_require__(8);
var Card_1 = __webpack_require__(47);
function CardsList() {
    var posts = react_1.useContext(postsContext_1.postsContext);
    return (react_1.default.createElement("ul", { className: cardslist_css_1.default.cardsList }, posts.map(function (post, index) {
        var urlprew;
        if (post.data.thumbnail === undefined)
            urlprew = '';
        else
            urlprew = post.data.thumbnail;
        var result = Math.ceil((Math.ceil(Math.abs(new Date().getTime() - post.data.created_utc * 1000))) / (1000 * 60 * 60));
        var author = post.data.author;
        return (react_1.default.createElement("li", { key: index },
            react_1.default.createElement(Card_1.Card, { title: post.data.title, author: author, created_utc: result, url: urlprew })));
    })));
}
exports.CardsList = CardsList;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(1));
var TokenContext_1 = __webpack_require__(3);
function usePostsData() {
    var _a = react_1.useState([]), data = _a[0], setData = _a[1];
    var token = react_1.useContext(TokenContext_1.tokenContext);
    react_1.useEffect(function () {
        axios_1.default
            .get('https://oauth.reddit.com/best.json', {
            headers: { Authorization: "bearer " + token },
        })
            .then(function (resp) {
            var postsData = resp.data.data.children;
            setData(postsData);
        })
            .catch(console.log);
    }, [token]);
    return data;
}
exports.usePostsData = usePostsData;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_css_1 = __importDefault(__webpack_require__(48));
__webpack_require__(49);
var TextComponent_1 = __webpack_require__(50);
var CardMenu_1 = __webpack_require__(58);
var Controls_1 = __webpack_require__(74);
var Preview_1 = __webpack_require__(85);
function Card(_a) {
    var title = _a.title, author = _a.author, url = _a.url, created_utc = _a.created_utc;
    return (react_1.default.createElement("div", { className: card_css_1.default.card },
        react_1.default.createElement(TextComponent_1.TextComponent, { title: title, author: author, created_utc: created_utc }),
        react_1.default.createElement(Preview_1.Preview, { url: url }),
        react_1.default.createElement(CardMenu_1.CardMenu, null),
        react_1.default.createElement(Controls_1.Controls, null)));
}
exports.Card = Card;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--7bN6-"
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextComponent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var User_1 = __webpack_require__(51);
var TimeComment_1 = __webpack_require__(53);
var textcomponent_css_1 = __importDefault(__webpack_require__(55));
var Text_1 = __webpack_require__(56);
function TextComponent(_a) {
    var title = _a.title, author = _a.author, created_utc = _a.created_utc;
    if (title.length > 70)
        title = title.substring(0, 64) + '...';
    return (react_1.default.createElement("div", { className: textcomponent_css_1.default.textContent },
        react_1.default.createElement("div", { className: textcomponent_css_1.default.metaData },
            react_1.default.createElement(User_1.User, { author: author }),
            react_1.default.createElement(TimeComment_1.TimeComment, { created_utc: created_utc })),
        react_1.default.createElement(Text_1.Text, { As: 'h2', size: 20, mobileSize: 16, marginTB: 7 },
            react_1.default.createElement("a", { href: "#user-url", className: textcomponent_css_1.default.postLink },
                title,
                ' '))));
}
exports.TextComponent = TextComponent;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var axios_1 = __importDefault(__webpack_require__(1));
var user_css_1 = __importDefault(__webpack_require__(52));
var react_2 = __webpack_require__(0);
var react_3 = __webpack_require__(0);
function User(_a) {
    var author = _a.author;
    var _b = react_2.useState({ user: '', avatar: '' }), data = _b[0], setData = _b[1];
    react_3.useEffect(function () {
        axios_1.default
            .get("https://www.reddit.com/user/" + author + "/about.json")
            .then(function (resp) {
            var avatarFull = resp.data.data.subreddit.icon_img;
            var avatar = avatarFull.replace(/\?.*/, '');
            setData({ user: author, avatar: avatar });
        })
            .catch(console.log);
    }, []);
    return (react_1.default.createElement("div", { className: user_css_1.default.userLink },
        data.avatar ? (react_1.default.createElement("img", { className: user_css_1.default.avatar, src: data.avatar })) : (react_1.default.createElement("svg", { className: user_css_1.default.avatar, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" },
            react_1.default.createElement("g", null,
                react_1.default.createElement("circle", { fill: "#FF4500", cx: "10", cy: "10", r: "10" }),
                react_1.default.createElement("path", { fill: "#FFF", d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z" })))),
        react_1.default.createElement("a", { href: "#user-url", className: user_css_1.default.username }, data.user)));
}
exports.User = User;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userLink": "user__userLink--1NY7B",
	"avatar": "user__avatar--on2f6",
	"username": "user__username--3ACnJ"
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeComment = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var timecomment_css_1 = __importDefault(__webpack_require__(54));
function TimeComment(_a) {
    var created_utc = _a.created_utc;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        created_utc < 60 && (react_1.default.createElement("span", { className: timecomment_css_1.default.createdAt },
            react_1.default.createElement("span", { className: timecomment_css_1.default.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
            created_utc,
            " ",
            created_utc == 1 && 'минута',
            created_utc > 1 && created_utc < 5 && 'минуты',
            ' ',
            created_utc > 4 && 'минут',
            " \u043D\u0430\u0437\u0430\u0434")),
        created_utc > 60 && created_utc < 360 && (react_1.default.createElement("span", { className: timecomment_css_1.default.createdAt },
            react_1.default.createElement("span", { className: timecomment_css_1.default.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
            created_utc / 60,
            " \u0447\u0430\u0441\u0430 ",
            created_utc % 60,
            " \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434"))));
}
exports.TimeComment = TimeComment;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"createdAt": "timecomment__createdAt--3kC43",
	"publishedLabel": "timecomment__publishedLabel--1CxXs"
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcomponent__textContent--1n1y-",
	"metaData": "textcomponent__metaData--2PVuX",
	"postLink": "textcomponent__postLink--dmjD3"
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_css_1 = __importDefault(__webpack_require__(57));
var classnames_1 = __importDefault(__webpack_require__(6));
var enumColor_1 = __webpack_require__(7);
function Text(props) {
    var _a, _b, _c;
    var _d = props.As, As = _d === void 0 ? 'span' : _d, _e = props.color, color = _e === void 0 ? enumColor_1.EColor.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize, _f = props.bold, bold = _f === void 0 ? 400 : _f, marginTB = props.marginTB;
    var classes = classnames_1.default(text_css_1.default["s" + size], (_a = {}, _a[text_css_1.default["m" + mobileSize]] = mobileSize, _a), (_b = {}, _b[text_css_1.default["d" + desktopSize]] = desktopSize, _b), (_c = {}, _c[text_css_1.default["t" + tabletSize]] = tabletSize, _c), text_css_1.default[color], text_css_1.default["bold" + bold], text_css_1.default["marginTB" + marginTB]);
    return react_1.default.createElement(As, { className: classes }, children);
}
exports.Text = Text;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"black": "text__black--1zchg",
	"orange": "text__orange--1RyAM",
	"green": "text__green--3mYQn",
	"white": "text__white--13JGE",
	"greyF4": "text__greyF4--V0fR0",
	"greyF3": "text__greyF3--2Lfsi",
	"greyD9": "text__greyD9--7iRFr",
	"greyC4": "text__greyC4--3oiNM",
	"grey99": "text__grey99--35u3B",
	"grey66": "text__grey66--373uw",
	"bold400": "text__bold400--2otlD",
	"bold500": "text__bold500--3n6km",
	"marginTB0": "text__marginTB0--2Zacd",
	"marginTB7": "text__marginTB7--hKar_",
	"s10": "text__s10--DYLfy",
	"s12": "text__s12--2S2T2",
	"s14": "text__s14--jvCoO",
	"s16": "text__s16--G_lUr",
	"s20": "text__s20--3Xq66",
	"s28": "text__s28--Puvgs",
	"m10": "text__m10--UtIkW",
	"m12": "text__m12--1W0av",
	"m14": "text__m14--s6pnr",
	"m16": "text__m16--cSY4u",
	"m20": "text__m20--1gFlM",
	"m28": "text__m28--2u2zs",
	"t10": "text__t10--n2R7f",
	"t12": "text__t12--7txjW",
	"t14": "text__t14--1Rj72",
	"t16": "text__t16--nkVMz",
	"t20": "text__t20--78tCz",
	"t28": "text__t28--A4rHF",
	"d10": "text__d10--3pWnc",
	"d12": "text__d12--5X_qc",
	"d14": "text__d14--3Futo",
	"d16": "text__d16--1Pwd1",
	"d20": "text__d20--uwHxr",
	"d28": "text__d28--3oIok"
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardMenu = void 0;
var react_1 = __importStar(__webpack_require__(0));
var cardmenu_css_1 = __importDefault(__webpack_require__(59));
var DropDown_1 = __webpack_require__(60);
var GenericList_1 = __webpack_require__(62);
var merge_1 = __webpack_require__(64);
var generateRandomIndex_1 = __webpack_require__(65);
var Icons_1 = __webpack_require__(9);
var LIST = [
    { As: 'li', text: 'Комментарии', img: react_1.default.createElement(Icons_1.CommentIcon, null) },
    { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },
    { As: 'li', text: 'Скрыть', img: react_1.default.createElement(Icons_1.HideIcon, null) },
    { As: 'li', text: 'Сохранить', img: react_1.default.createElement(Icons_1.SaveIcon, null) },
    { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },
].map(generateRandomIndex_1.generateId);
function CardMenu() {
    var _a = react_1.useState(LIST), list = _a[0], setList = _a[1];
    var handleItemClick = function () {
        setList(list);
    };
    return (react_1.default.createElement("div", { className: cardmenu_css_1.default.cardmenu },
        react_1.default.createElement(DropDown_1.DropDown, { button: react_1.default.createElement("button", { className: cardmenu_css_1.default.cardmenuButton },
                react_1.default.createElement(Icons_1.MenuIcon, null)) },
            react_1.default.createElement("ul", { className: cardmenu_css_1.default.cardmenulist },
                react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: handleItemClick })) })),
            react_1.default.createElement("button", { className: cardmenu_css_1.default.btnClose }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
}
exports.CardMenu = CardMenu;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardmenu": "cardmenu__cardmenu--2zHci",
	"cardmenuButton": "cardmenu__cardmenuButton--bunuf",
	"btnClose": "cardmenu__btnClose--1FRe7",
	"cardmenulist": "cardmenu__cardmenulist--3WWMG"
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var dropdown_css_1 = __importDefault(__webpack_require__(61));
var NOOP = function () { };
function DropDown(_a) {
    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;
    var _d = react_1.useState(isOpen), isDropDownOpen = _d[0], setIsDropDownOpen = _d[1];
    react_1.useEffect(function () { return setIsDropDownOpen(isOpen); }, [isOpen]); //когда меняется св-во isOpen, хук useEffect устанавливает новое состояние
    react_1.useEffect(function () { return isDropDownOpen ? onOpen() : onClose(); }, [isDropDownOpen]); //когда меняется св-во isDropDownOpen, хук useEffect устанавливает новое состояние
    var handleOpen = function () {
        if (isOpen === undefined) {
            setIsDropDownOpen(!isDropDownOpen);
        }
    };
    return (react_1.default.createElement("div", { className: dropdown_css_1.default.container },
        react_1.default.createElement("div", { onClick: handleOpen }, button),
        isDropDownOpen && (react_1.default.createElement("div", { className: dropdown_css_1.default.listContainer },
            react_1.default.createElement("div", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropDownOpen(false); } }, children)))));
}
exports.DropDown = DropDown;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--1PRlF",
	"listContainer": "dropdown__listContainer--1NwGr",
	"list": "dropdown__list--3gZFy"
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = void 0;
//рендериит любые списки
var react_1 = __importDefault(__webpack_require__(0));
var GenericList_css_1 = __importDefault(__webpack_require__(63));
function GenericList(_a) {
    var list = _a.list;
    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {
        var _b = _a.As, As = _b === void 0 ? 'div' : _b, img = _a.img, text = _a.text, onClick = _a.onClick, id = _a.id, href = _a.href;
        return (react_1.default.createElement(As, { className: GenericList_css_1.default.item, onClick: function () { return onClick(id); }, key: id, href: href },
            img,
            text));
    })));
}
exports.GenericList = GenericList;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "GenericList__item--Ucdcn"
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(obj) {
    return function (obj2) { return (__assign(__assign({}, obj), obj2)); };
}
exports.merge = merge;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.generateRandomString = void 0;
var assoc_1 = __webpack_require__(66);
exports.generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };
exports.generateId = function (obj) { return assoc_1.assoc('id', exports.generateRandomString())(obj); };


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
// добавляет в объекты какие-то значения для создания ключей
function assoc(key, value) {
    return function (obj) {
        var _a;
        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));
    };
}
exports.assoc = assoc;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
var React = __importStar(__webpack_require__(0));
function MenuIcon() {
    return (React.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#F3F3F3" }),
        React.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#F3F3F3" }),
        React.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#F3F3F3" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplainIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ComplainIcon() {
    return (React.createElement("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z", fill: "#999999" })));
}
exports.ComplainIcon = ComplainIcon;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideIcon = void 0;
var React = __importStar(__webpack_require__(0));
function HideIcon() {
    return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z", fill: "#999999" })));
}
exports.HideIcon = HideIcon;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveIcon = void 0;
var React = __importStar(__webpack_require__(0));
function SaveIcon() {
    return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
}
exports.SaveIcon = SaveIcon;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ShareIcon() {
    return (React.createElement("svg", { width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}
exports.ShareIcon = ShareIcon;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownIcon = void 0;
var React = __importStar(__webpack_require__(0));
function DownIcon() {
    return (React.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#C4C4C4" })));
}
exports.DownIcon = DownIcon;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpIcon = void 0;
var React = __importStar(__webpack_require__(0));
function UpIcon() {
    return (React.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" })));
}
exports.UpIcon = UpIcon;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controls_css_1 = __importDefault(__webpack_require__(75));
var CarmaCounter_1 = __webpack_require__(76);
var CommentsNumber_1 = __webpack_require__(78);
var ShareButton_1 = __webpack_require__(80);
var SaveButton_1 = __webpack_require__(82);
function Controls() {
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement(CarmaCounter_1.CarmaCounter, null),
        react_1.default.createElement(CommentsNumber_1.CommentsNumber, null),
        react_1.default.createElement("div", { className: controls_css_1.default.actions },
            react_1.default.createElement(ShareButton_1.ShareButton, null),
            react_1.default.createElement(SaveButton_1.SaveButton, null))));
}
exports.Controls = Controls;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--1pbuI",
	"actions": "controls__actions--1iXY3"
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var carmacounter_css_1 = __importDefault(__webpack_require__(77));
var Icons_1 = __webpack_require__(9);
function CarmaCounter() {
    return (react_1.default.createElement("div", { className: carmacounter_css_1.default.karmaCounter },
        react_1.default.createElement("button", { className: carmacounter_css_1.default.up },
            react_1.default.createElement(Icons_1.UpIcon, null)),
        react_1.default.createElement("span", { className: carmacounter_css_1.default.karmaValue }, "256"),
        react_1.default.createElement("button", { className: carmacounter_css_1.default.down },
            react_1.default.createElement(Icons_1.DownIcon, null))));
}
exports.CarmaCounter = CarmaCounter;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"karmaValue": "carmacounter__karmaValue--J6tnX",
	"up": "carmacounter__up--B3-tU",
	"down": "carmacounter__down--3Zixv",
	"karmaCounter": "carmacounter__karmaCounter--3vSuH"
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsNumber = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentsnumber_css_1 = __importDefault(__webpack_require__(79));
var CommentIcon_1 = __webpack_require__(10);
function CommentsNumber() {
    return (react_1.default.createElement("button", { className: commentsnumber_css_1.default.commentsButton },
        react_1.default.createElement(CommentIcon_1.CommentIcon, null),
        react_1.default.createElement("span", { className: commentsnumber_css_1.default.commentsNumber }, "27")));
}
exports.CommentsNumber = CommentsNumber;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "commentsnumber__commentsButton--3Vee8",
	"commentsNumber": "commentsnumber__commentsNumber--1Nkkv"
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sharebutton_css_1 = __importDefault(__webpack_require__(81));
var Icon_1 = __webpack_require__(4);
var enumIcon_1 = __webpack_require__(2);
function ShareButton() {
    return (react_1.default.createElement("div", { className: sharebutton_css_1.default.sharebutton },
        react_1.default.createElement(Icon_1.Icon, { icon: enumIcon_1.EIcon.share, size: 20 })));
}
exports.ShareButton = ShareButton;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sharebutton": "sharebutton__sharebutton--Tbd6u"
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(83), exports);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var savebtn_css_1 = __importDefault(__webpack_require__(84));
var Icon_1 = __webpack_require__(4);
var enumIcon_1 = __webpack_require__(2);
function SaveButton() {
    return (react_1.default.createElement("div", { className: savebtn_css_1.default.savebtn },
        react_1.default.createElement(Icon_1.Icon, { icon: enumIcon_1.EIcon.save, size: 20 })));
}
exports.SaveButton = SaveButton;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"savebtn": "savebtn__savebtn--3shgA"
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_css_1 = __importDefault(__webpack_require__(86));
function Preview(_a) {
    var url = _a.url;
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview }, url.includes('//')
        ? react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: url })
        : react_1.default.createElement("svg", { className: preview_css_1.default.previewImg, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" },
            react_1.default.createElement("g", null,
                react_1.default.createElement("circle", { fill: "#FF4500", cx: "10", cy: "10", r: "10" }),
                react_1.default.createElement("path", { fill: "#FFF", d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z" })))));
}
exports.Preview = Preview;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--1Nukb",
	"previewImg": "preview__previewImg--3kTAV"
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useToken = void 0;
var react_1 = __webpack_require__(0);
function useToken() {
    var _a = react_1.useState(""), token = _a[0], setToken = _a[1];
    react_1.useEffect(function () {
        if (window.__token__)
            setToken(window.__token__);
    }, []);
    return [token];
}
exports.useToken = useToken;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
exports.indexTemplate = (function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n   <meta charset=\"UTF-8\">\n   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n   <title>ReactCard</title>\n   <script src = \"/static/client.js\" type=\"application/javascript\"></script>\n   <script>window.__token__= '" + token + "'</script>\n</head>\n<body>\n   <div id = \"react_root\">" + content + "</div>\n</body>\n</html>\n"; });


/***/ })
/******/ ]);