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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
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
__exportStar(__webpack_require__(63), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(64), exports);
__exportStar(__webpack_require__(65), exports);
__exportStar(__webpack_require__(66), exports);
__exportStar(__webpack_require__(67), exports);
__exportStar(__webpack_require__(68), exports);
__exportStar(__webpack_require__(69), exports);
__exportStar(__webpack_require__(70), exports);
__exportStar(__webpack_require__(71), exports);
__exportStar(__webpack_require__(72), exports);
__exportStar(__webpack_require__(73), exports);
__exportStar(__webpack_require__(74), exports);
__exportStar(__webpack_require__(75), exports);
__exportStar(__webpack_require__(76), exports);
__exportStar(__webpack_require__(77), exports);
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(79), exports);
__exportStar(__webpack_require__(80), exports);
__exportStar(__webpack_require__(81), exports);
__exportStar(__webpack_require__(82), exports);
__exportStar(__webpack_require__(83), exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

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

Object.defineProperty(exports, "__esModule", { value: true });
exports.EIcon = void 0;
var EIcon;
(function (EIcon) {
    EIcon["save"] = "save";
    EIcon["share"] = "share";
    EIcon["anonim"] = "anonim";
})(EIcon = exports.EIcon || (exports.EIcon = {}));


/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.generateRandomString = void 0;
var assoc_1 = __webpack_require__(107);
exports.generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };
exports.generateId = function (obj) { return assoc_1.assoc('id', exports.generateRandomString())(obj); };


/***/ }),
/* 7 */
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
__exportStar(__webpack_require__(108), exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icon_css_1 = __importDefault(__webpack_require__(45));
var classnames_1 = __importDefault(__webpack_require__(46));
var enumColor_1 = __webpack_require__(47);
var enumIcon_1 = __webpack_require__(4);
function Icon(props) {
    var _a, _b, _c;
    var _d = props.As, As = _d === void 0 ? 'button' : _d, _e = props.color, color = _e === void 0 ? enumColor_1.EColor.black : _e, _f = props.icon, icon = _f === void 0 ? enumIcon_1.EIcon.save : _f, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;
    var classes = classnames_1.default(icon_css_1.default["s" + size], (_a = {}, _a[icon_css_1.default["m" + mobileSize]] = mobileSize, _a), (_b = {}, _b[icon_css_1.default["m" + desktopSize]] = desktopSize, _b), (_c = {}, _c[icon_css_1.default["m" + tabletSize]] = tabletSize, _c), icon_css_1.default[color], icon_css_1.default[icon]);
    return react_1.default.createElement(As, { className: classes });
}
exports.Icon = Icon;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsContextProvider = exports.postsContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var usePostsData_1 = __webpack_require__(58);
exports.postsContext = react_1.default.createContext([]);
function PostsContextProvider(_a) {
    var children = _a.children;
    var posts = usePostsData_1.usePostsData();
    return (react_1.default.createElement(exports.postsContext.Provider, { value: posts }, children));
}
exports.PostsContextProvider = PostsContextProvider;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContextProvider = exports.userContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useUserData_1 = __webpack_require__(40);
exports.userContext = react_1.default.createContext({});
function UserContextProvider(_a) {
    var children = _a.children;
    var data = useUserData_1.useUserData()[0];
    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));
}
exports.UserContextProvider = UserContextProvider;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextComponent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var User_1 = __webpack_require__(12);
var TimeComment_1 = __webpack_require__(14);
var textcomponent_css_1 = __importDefault(__webpack_require__(86));
var react_2 = __webpack_require__(0);
var Post_1 = __webpack_require__(87);
function TextComponent(_a) {
    var title = _a.title, author = _a.author, created_utc = _a.created_utc, _b = _a.titleShort, titleShort = _b === void 0 ? true : _b, id = _a.id, urlpreview = _a.urlpreview, score = _a.score;
    var _c = react_2.useState(false), isModalOpened = _c[0], SetIsModalOpened = _c[1];
    var titleMod = title.length > 70 && titleShort ? title.substring(0, 64) + '... ' : title;
    return (react_1.default.createElement("div", { className: textcomponent_css_1.default.textContent },
        react_1.default.createElement("div", { className: textcomponent_css_1.default.metaData },
            react_1.default.createElement(User_1.User, { author: author }),
            react_1.default.createElement(TimeComment_1.TimeComment, { created_utc: created_utc })),
        react_1.default.createElement("button", { className: textcomponent_css_1.default.postLink, onClick: function () {
                SetIsModalOpened(true);
            } }, titleMod),
        isModalOpened && (react_1.default.createElement(Post_1.Post, { urlpreview: urlpreview, id: id, title: title, author: author, created_utc: created_utc, onClose: function () { return SetIsModalOpened(false); }, score: score }))));
}
exports.TextComponent = TextComponent;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var user_css_1 = __importDefault(__webpack_require__(62));
var Icons_1 = __webpack_require__(1);
var useUserAvatar_1 = __webpack_require__(84);
function User(_a) {
    var author = _a.author;
    var data = useUserAvatar_1.useUserAvatar({ author: author });
    return (react_1.default.createElement("div", { className: user_css_1.default.userLink },
        data.avatar ? (react_1.default.createElement("img", { className: user_css_1.default.avatar, src: data.avatar })) : (react_1.default.createElement(Icons_1.RedditIcon, { size: '20px' })),
        react_1.default.createElement("a", { href: "#user-url", className: user_css_1.default.username }, data.user)));
}
exports.User = User;


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeComment = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var timecomment_css_1 = __importDefault(__webpack_require__(85));
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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controls_css_1 = __importDefault(__webpack_require__(92));
var CarmaCounter_1 = __webpack_require__(93);
var CommentsNumber_1 = __webpack_require__(99);
var ShareButton_1 = __webpack_require__(101);
var SaveButton_1 = __webpack_require__(103);
function Controls(_a) {
    var score = _a.score;
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement(CarmaCounter_1.CarmaCounter, { score: score }),
        react_1.default.createElement(CommentsNumber_1.CommentsNumber, null),
        react_1.default.createElement("div", { className: controls_css_1.default.actions },
            react_1.default.createElement(ShareButton_1.ShareButton, null),
            react_1.default.createElement(SaveButton_1.SaveButton, null))));
}
exports.Controls = Controls;


/***/ }),
/* 17 */
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
__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 18 */
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
__exportStar(__webpack_require__(97), exports);


/***/ }),
/* 19 */
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
__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.commentContext = react_1.default.createContext({
    value: '',
    onChange: function () { }
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(22));
var server_1 = __importDefault(__webpack_require__(23));
var axios_1 = __importDefault(__webpack_require__(2));
var App_1 = __webpack_require__(24);
var indexTemplate_1 = __webpack_require__(128);
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
/* 22 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
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
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
var root_1 = __webpack_require__(25);
__webpack_require__(26);
var Layout_1 = __webpack_require__(33);
var Header_1 = __webpack_require__(36);
var Content_1 = __webpack_require__(53);
var CardsList_1 = __webpack_require__(56);
var useToken_1 = __webpack_require__(127);
var TokenContext_1 = __webpack_require__(3);
var userContext_1 = __webpack_require__(10);
var postsContext_1 = __webpack_require__(9);
var commentContext_1 = __webpack_require__(20);
function AppComponent() {
    var _a = react_1.useState(''), commentValue = _a[0], setCommentValue = _a[1];
    var token = useToken_1.useToken()[0];
    return (react_1.default.createElement(commentContext_1.commentContext.Provider, { value: { value: commentValue, onChange: setCommentValue } },
        react_1.default.createElement(TokenContext_1.tokenContext.Provider, { value: token },
            react_1.default.createElement(userContext_1.UserContextProvider, null,
                react_1.default.createElement(postsContext_1.PostsContextProvider, null,
                    react_1.default.createElement(Layout_1.Layout, null,
                        react_1.default.createElement(Header_1.Header, null),
                        react_1.default.createElement(Content_1.Content, null,
                            react_1.default.createElement(CardsList_1.CardsList, null))))))));
}
exports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(32);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto'), local('Roboto-Regular'),\r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'), \r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff'); /* Modern Browsers */\r\n}\r\n/* roboto-500 - cyrillic */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  src: local('Roboto'),\r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), \r\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff');/* Modern Browsers */\r\n}\r\n:root {\r\n  --black: #333333;\r\n  --orange: #cc6633;\r\n  --green: #a4cc33;\r\n  --white: #ffffff;\r\n  --greyF4: #f4f4f4;\r\n  --greyF3: #f3f3f3;\r\n  --greyD9: #d9d9d9;\r\n  --greyC4: #c4c4c4;\r\n  --grey99: #999999;\r\n  --grey66: #666666;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: hidden;\r\n  background-color: var(--greyF4);\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  font-family: 'Roboto', serif;\r\n}\r\n\r\n* {\r\n  color: var(--black);\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: greyscale;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\nbutton {\r\n  padding: 0;\r\n  border: 0;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./static/src/fonts/roboto-v20-cyrillic-regular.woff2");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./static/src/fonts/roboto-v20-cyrillic-regular.woff");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./static/src/fonts/roboto-v20-cyrillic-500.woff2");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./static/src/fonts/roboto-v20-cyrillic-500.woff");

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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(35));
function Layout(_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: layout_css_1.default.layout }, children);
}
exports.Layout = Layout;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(37));
var SearchBlock_1 = __webpack_require__(38);
var ThreadTitle_1 = __webpack_require__(49);
var SortBlock_1 = __webpack_require__(51);
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG"
};


/***/ }),
/* 38 */
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
var searchblock_css_1 = __importDefault(__webpack_require__(39));
var userContext_1 = __webpack_require__(10);
var SearchIcon_1 = __webpack_require__(41);
var UserBlock_1 = __webpack_require__(42);
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
/* 39 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blockinput": "searchblock__blockinput--2bu_R",
	"searchblock": "searchblock__searchblock--34CVO",
	"searchinput": "searchblock__searchinput--3_7zV",
	"btnsearch": "searchblock__btnsearch--gAzMf"
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(2));
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
/* 42 */
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
__exportStar(__webpack_require__(43), exports);


/***/ }),
/* 43 */
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
var enumIcon_1 = __webpack_require__(4);
var Icon_1 = __webpack_require__(44);
var userblock_css_1 = __importDefault(__webpack_require__(48));
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, _b = _a.username, username = _b === void 0 ? 'Аноним' : _b;
    return (React.createElement("div", null,
        React.createElement("a", { className: userblock_css_1.default.userblock, href: "https://www.reddit.com/api/v1/authorize?client_id=iYguATByxd-5PA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity" },
            React.createElement("div", { className: userblock_css_1.default.photo }, avatarSrc ? (React.createElement("img", { className: userblock_css_1.default.avatar, src: avatarSrc, alt: "user avatar" })) : (React.createElement(Icon_1.Icon, { As: 'div', icon: enumIcon_1.EIcon.anonim, size: 50, mobileSize: 30 }))),
            React.createElement("div", { className: userblock_css_1.default.name }, username))));
}
exports.UserBlock = UserBlock;


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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(8), exports);


/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 47 */
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
/* 48 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userblock": "userblock__userblock--2-sph",
	"photo": "userblock__photo--jvysj",
	"name": "userblock__name--2mio1",
	"avatar": "userblock__avatar--3vdFj"
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_css_1 = __importDefault(__webpack_require__(50));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_css_1.default.threadTitle }, "Header"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--oxugx"
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sortblock_css_1 = __importDefault(__webpack_require__(52));
function SortBlock() {
    return (react_1.default.createElement("div", { className: sortblock_css_1.default.sortblock }, "sorting"));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortblock": "sortblock__sortblock--2jFPk"
};


/***/ }),
/* 53 */
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
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(55));
function Content(_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", { className: content_css_1.default.content }, children));
}
exports.Content = Content;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),
/* 56 */
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
var cardslist_css_1 = __importDefault(__webpack_require__(57));
var postsContext_1 = __webpack_require__(9);
var Card_1 = __webpack_require__(59);
function CardsList() {
    var posts = react_1.useContext(postsContext_1.postsContext);
    return (react_1.default.createElement("ul", { className: cardslist_css_1.default.cardsList }, posts.map(function (post, index) {
        var urlpreview;
        if (post.data.thumbnail === undefined)
            urlpreview = '';
        else
            urlpreview = post.data.thumbnail;
        var result = Math.ceil((Math.ceil(Math.abs(new Date().getTime() - post.data.created_utc * 1000))) / (1000 * 60 * 60));
        var author = post.data.author;
        return (react_1.default.createElement("li", { className: cardslist_css_1.default.cardLi, key: index },
            react_1.default.createElement(Card_1.Card, { id: post.data.id, title: post.data.title, author: author, created_utc: result, urlpreview: urlpreview, score: post.data.score })));
    })));
}
exports.CardsList = CardsList;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsList": "cardslist__cardsList--1DoiZ",
	"cardLi": "cardslist__cardLi--3-N0F"
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(2));
var TokenContext_1 = __webpack_require__(3);
function usePostsData() {
    var _a = react_1.useState([]), data = _a[0], setData = _a[1];
    var token = react_1.useContext(TokenContext_1.tokenContext);
    react_1.useEffect(function () {
        axios_1.default
            .get('https://oauth.reddit.com/best.json?limit=10', {
            headers: { Authorization: "bearer " + token },
        })
            .then(function (resp) {
            var postsData = resp.data.data.children;
            console.log(postsData);
            setData(postsData);
        })
            .catch(console.log);
    }, [token]);
    return data;
}
exports.usePostsData = usePostsData;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_css_1 = __importDefault(__webpack_require__(60));
__webpack_require__(61);
var TextComponent_1 = __webpack_require__(11);
var CardMenu_1 = __webpack_require__(120);
var Controls_1 = __webpack_require__(16);
var Preview_1 = __webpack_require__(125);
function Card(_a) {
    var title = _a.title, author = _a.author, urlpreview = _a.urlpreview, created_utc = _a.created_utc, id = _a.id, score = _a.score;
    return (react_1.default.createElement("div", { className: card_css_1.default.card },
        react_1.default.createElement(TextComponent_1.TextComponent, { urlpreview: urlpreview, id: id, title: title, author: author, created_utc: created_utc, score: score }),
        react_1.default.createElement(Preview_1.Preview, { url: urlpreview }),
        react_1.default.createElement(CardMenu_1.CardMenu, null),
        react_1.default.createElement(Controls_1.Controls, { score: score })));
}
exports.Card = Card;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--7bN6-"
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userLink": "user__userLink--1NY7B",
	"avatar": "user__avatar--on2f6",
	"username": "user__username--3ACnJ"
};


/***/ }),
/* 63 */
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
/* 64 */
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
/* 65 */
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
/* 66 */
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
exports.ShareIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ShareIcon() {
    return (React.createElement("svg", { width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}
exports.ShareIcon = ShareIcon;


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
exports.DownIcon = void 0;
var React = __importStar(__webpack_require__(0));
function DownIcon() {
    return (React.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#C4C4C4" })));
}
exports.DownIcon = DownIcon;


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
exports.UpIcon = void 0;
var React = __importStar(__webpack_require__(0));
function UpIcon() {
    return (React.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" })));
}
exports.UpIcon = UpIcon;


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
exports.Copyicon = void 0;
var React = __importStar(__webpack_require__(0));
function Copyicon() {
    return (React.createElement("svg", { width: "16", height: "20", viewBox: "0 0 16 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z", fill: "#999999" })));
}
exports.Copyicon = Copyicon;


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
exports.Imgicon = void 0;
var React = __importStar(__webpack_require__(0));
function Imgicon() {
    return (React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z", fill: "#999999" })));
}
exports.Imgicon = Imgicon;


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
exports.Tagicon = void 0;
var React = __importStar(__webpack_require__(0));
function Tagicon() {
    return (React.createElement("svg", { width: "20", height: "12", viewBox: "0 0 20 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z", fill: "#999999" })));
}
exports.Tagicon = Tagicon;


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
exports.SaveCommenticon = void 0;
var React = __importStar(__webpack_require__(0));
function SaveCommenticon() {
    return (React.createElement("svg", { width: "14", height: "17", viewBox: "0 0 14 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z", fill: "#999999" })));
}
exports.SaveCommenticon = SaveCommenticon;


/***/ }),
/* 74 */
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
exports.Personicon = void 0;
var React = __importStar(__webpack_require__(0));
function Personicon() {
    return (React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z", fill: "#999999" })));
}
exports.Personicon = Personicon;


/***/ }),
/* 75 */
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
exports.Renewicon = void 0;
var React = __importStar(__webpack_require__(0));
function Renewicon() {
    return (React.createElement("svg", { width: "22", height: "16", viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z", fill: "#999999" })));
}
exports.Renewicon = Renewicon;


/***/ }),
/* 76 */
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
exports.Linkicon = void 0;
var React = __importStar(__webpack_require__(0));
function Linkicon() {
    return (React.createElement("svg", { width: "20", height: "10", viewBox: "0 0 20 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z", fill: "#999999" })));
}
exports.Linkicon = Linkicon;


/***/ }),
/* 77 */
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
exports.Microphoneicon = void 0;
var React = __importStar(__webpack_require__(0));
function Microphoneicon() {
    return (React.createElement("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z", fill: "#999999" })));
}
exports.Microphoneicon = Microphoneicon;


/***/ }),
/* 78 */
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
exports.Commentsicon = void 0;
var React = __importStar(__webpack_require__(0));
function Commentsicon() {
    return (React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z", fill: "#999999" })));
}
exports.Commentsicon = Commentsicon;


/***/ }),
/* 79 */
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
exports.Penicon = void 0;
var React = __importStar(__webpack_require__(0));
function Penicon() {
    return (React.createElement("svg", { width: "19", height: "19", viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z", fill: "#999999" })));
}
exports.Penicon = Penicon;


/***/ }),
/* 80 */
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
exports.Lettericon = void 0;
var React = __importStar(__webpack_require__(0));
function Lettericon() {
    return (React.createElement("svg", { width: "16", height: "18", viewBox: "0 0 16 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z", fill: "#999999" })));
}
exports.Lettericon = Lettericon;


/***/ }),
/* 81 */
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
exports.Pdficon = void 0;
var React = __importStar(__webpack_require__(0));
function Pdficon() {
    return (React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z", fill: "#999999" })));
}
exports.Pdficon = Pdficon;


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
exports.RedditIcon = void 0;
var React = __importStar(__webpack_require__(0));
function RedditIcon(prop) {
    return (React.createElement("svg", { width: prop.size, height: prop.size, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" },
        React.createElement("g", null,
            React.createElement("circle", { fill: "#FF4500", cx: "10", cy: "10", r: "10" }),
            React.createElement("path", { fill: "#FFF", d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z" }))));
}
exports.RedditIcon = RedditIcon;


/***/ }),
/* 83 */
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
exports.Crossicon = void 0;
var React = __importStar(__webpack_require__(0));
function Crossicon() {
    return (React.createElement("svg", { width: "21", height: "21", viewBox: "0 0 21 21", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z", fill: "#ADADAD" }),
        React.createElement("path", { d: "M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z", fill: "#ADADAD" })));
}
exports.Crossicon = Crossicon;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserAvatar = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(2));
var TokenContext_1 = __webpack_require__(3);
function useUserAvatar(_a) {
    var author = _a.author;
    var _b = react_1.useState({ user: '', avatar: '' }), data = _b[0], setData = _b[1];
    var token = react_1.useContext(TokenContext_1.tokenContext);
    react_1.useEffect(function () {
        axios_1.default
            .get("https://www.reddit.com/user/" + author + "/about.json")
            .then(function (resp) {
            var avatarFull = resp.data.data.subreddit.icon_img;
            var avatar = avatarFull.replace(/\?.*/, '');
            setData({ user: author, avatar: avatar });
        })
            .catch(console.log);
    }, [token]);
    return data;
}
exports.useUserAvatar = useUserAvatar;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"createdAt": "timecomment__createdAt--3kC43",
	"publishedLabel": "timecomment__publishedLabel--1CxXs"
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcomponent__textContent--1n1y-",
	"metaData": "textcomponent__metaData--2PVuX",
	"postLink": "textcomponent__postLink--dmjD3"
};


/***/ }),
/* 87 */
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
__exportStar(__webpack_require__(88), exports);


/***/ }),
/* 88 */
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
exports.Post = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(15));
var post_css_1 = __importDefault(__webpack_require__(89));
var TextComponent_1 = __webpack_require__(90);
var Controls_1 = __webpack_require__(91);
var CommentForm_1 = __webpack_require__(19);
var postsContext_1 = __webpack_require__(9);
var Icons_1 = __webpack_require__(1);
var merge_1 = __webpack_require__(5);
var generateRandomIndex_1 = __webpack_require__(6);
var GenericList_1 = __webpack_require__(7);
var CommentsList_1 = __webpack_require__(111);
var useCommentsData_1 = __webpack_require__(119);
var LIST = [
    { As: 'li', text: 'Комментарии', img: react_1.default.createElement(Icons_1.CommentIcon, null) },
    { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },
    { As: 'li', text: 'Скрыть', img: react_1.default.createElement(Icons_1.HideIcon, null) },
    { As: 'li', text: 'Сохранить', img: react_1.default.createElement(Icons_1.SaveIcon, null) },
    { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },
].map(generateRandomIndex_1.generateId);
function Post(_a) {
    var title = _a.title, onClose = _a.onClose, author = _a.author, created_utc = _a.created_utc, id = _a.id, urlpreview = _a.urlpreview, score = _a.score;
    var ref = react_1.useRef(null);
    var posts = react_1.useContext(postsContext_1.postsContext);
    var comments = useCommentsData_1.useCommentsData(id);
    console.log(comments);
    var postMedia, urlImg, checkurl, selftext;
    posts.forEach(function (post, index) {
        var _a, _b;
        if (post.data.id === id) {
            postMedia = (_b = (_a = post.data.media) === null || _a === void 0 ? void 0 : _a.reddit_video) === null || _b === void 0 ? void 0 : _b.fallback_url;
            urlImg = post.data.url;
            checkurl = urlImg.includes('jpg') || urlImg.includes('png');
            selftext = post.data.selftext;
        }
    });
    function handleClick() {
        console.log('click');
    }
    react_1.useEffect(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node &&
                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    });
    var node = document.querySelector('#modal_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: post_css_1.default.modalWrap },
        react_1.default.createElement("div", { className: post_css_1.default.modal, ref: ref },
            react_1.default.createElement("button", { className: post_css_1.default.cross, onClick: onClose },
                react_1.default.createElement(Icons_1.Crossicon, null)),
            react_1.default.createElement("div", { className: post_css_1.default.modalTitle },
                react_1.default.createElement(Controls_1.Controls, { score: score }),
                react_1.default.createElement(TextComponent_1.TextComponent, { title: title, author: author, created_utc: created_utc, titleShort: false, id: id, urlpreview: urlpreview, score: score })),
            react_1.default.createElement("div", { className: post_css_1.default.modalContent },
                react_1.default.createElement("p", null, selftext),
                postMedia ? (react_1.default.createElement("video", { className: post_css_1.default.modalContent__media, controls: true },
                    react_1.default.createElement("source", { src: postMedia, type: "video/mp4" }))) : checkurl ? (react_1.default.createElement("img", { className: post_css_1.default.modalContent__media, src: urlImg, alt: "pic" })) : ((urlpreview.includes('//') && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("img", { className: post_css_1.default.modalContent__media, src: urlpreview, alt: "pic" }),
                    react_1.default.createElement("a", { href: urlImg }, urlImg)))) || react_1.default.createElement(Icons_1.RedditIcon, { size: '100px' }))),
            react_1.default.createElement("ul", { className: post_css_1.default.ulicons },
                react_1.default.createElement(GenericList_1.GenericList, { underline: false, list: LIST.map(merge_1.merge({ onClick: handleClick })) })),
            react_1.default.createElement(CommentForm_1.CommentForm, { placeHolder: 'Оставьте Ваш комментарий' }),
            comments.length > 0 && react_1.default.createElement(CommentsList_1.CommentsList, { comments: comments }))), node);
}
exports.Post = Post;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modalWrap": "post__modalWrap--1EYNj",
	"modal": "post__modal--yRo-c",
	"modalTitle": "post__modalTitle--2EKXn",
	"modalContent": "post__modalContent--38k5y",
	"modalContent__media": "post__modalContent__media--1P4YL",
	"cross": "post__cross--2ieHK",
	"ulicons": "post__ulicons--4AK_C"
};


/***/ }),
/* 90 */
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
__exportStar(__webpack_require__(11), exports);


/***/ }),
/* 91 */
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
__exportStar(__webpack_require__(16), exports);


/***/ }),
/* 92 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--1pbuI",
	"actions": "controls__actions--1iXY3"
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var carmacounter_css_1 = __importDefault(__webpack_require__(94));
var BtnUp_1 = __webpack_require__(17);
var BtnDown_1 = __webpack_require__(18);
function CarmaCounter(_a) {
    var score = _a.score;
    return (react_1.default.createElement("div", { className: carmacounter_css_1.default.karmaCounter },
        react_1.default.createElement(BtnUp_1.BtnUp, null),
        react_1.default.createElement("span", { className: carmacounter_css_1.default.karmaValue }, score),
        react_1.default.createElement(BtnDown_1.BtnDown, null)));
}
exports.CarmaCounter = CarmaCounter;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"karmaValue": "carmacounter__karmaValue--J6tnX",
	"karmaCounter": "carmacounter__karmaCounter--3vSuH"
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtnUp = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Icons_1 = __webpack_require__(1);
var btnup_css_1 = __importDefault(__webpack_require__(96));
function BtnUp(_a) {
    var click = _a.click;
    return (react_1.default.createElement("button", { className: btnup_css_1.default.up, onClick: click },
        react_1.default.createElement(Icons_1.UpIcon, null)));
}
exports.BtnUp = BtnUp;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"up": "btnup__up--3C9qB"
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtnDown = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Icons_1 = __webpack_require__(1);
var btndown_css_1 = __importDefault(__webpack_require__(98));
function BtnDown(_a) {
    var click = _a.click;
    return (react_1.default.createElement("button", { className: btndown_css_1.default.down, onClick: click },
        react_1.default.createElement(Icons_1.DownIcon, null)));
}
exports.BtnDown = BtnDown;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"down": "btndown__down--sM3jR"
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsNumber = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentsnumber_css_1 = __importDefault(__webpack_require__(100));
var CommentIcon_1 = __webpack_require__(13);
function CommentsNumber() {
    return (react_1.default.createElement("button", { className: commentsnumber_css_1.default.commentsButton },
        react_1.default.createElement(CommentIcon_1.CommentIcon, null),
        react_1.default.createElement("span", { className: commentsnumber_css_1.default.commentsNumber }, "27")));
}
exports.CommentsNumber = CommentsNumber;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "commentsnumber__commentsButton--3Vee8",
	"commentsNumber": "commentsnumber__commentsNumber--1Nkkv"
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sharebutton_css_1 = __importDefault(__webpack_require__(102));
var Icon_1 = __webpack_require__(8);
var enumIcon_1 = __webpack_require__(4);
function ShareButton() {
    return (react_1.default.createElement("div", { className: sharebutton_css_1.default.sharebutton },
        react_1.default.createElement(Icon_1.Icon, { icon: enumIcon_1.EIcon.share, size: 20 })));
}
exports.ShareButton = ShareButton;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sharebutton": "sharebutton__sharebutton--Tbd6u"
};


/***/ }),
/* 103 */
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
__exportStar(__webpack_require__(104), exports);


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var savebtn_css_1 = __importDefault(__webpack_require__(105));
var Icon_1 = __webpack_require__(8);
var enumIcon_1 = __webpack_require__(4);
function SaveButton() {
    return (react_1.default.createElement("div", { className: savebtn_css_1.default.savebtn },
        react_1.default.createElement(Icon_1.Icon, { icon: enumIcon_1.EIcon.save, size: 20 })));
}
exports.SaveButton = SaveButton;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"savebtn": "savebtn__savebtn--3shgA"
};


/***/ }),
/* 106 */
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
exports.CommentForm = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_2 = __webpack_require__(0);
var merge_1 = __webpack_require__(5);
var generateRandomIndex_1 = __webpack_require__(6);
var commentContext_1 = __webpack_require__(20);
var GenericList_1 = __webpack_require__(7);
var Icons_1 = __webpack_require__(1);
var commentform_css_1 = __importDefault(__webpack_require__(110));
var list = [
    { As: 'li', img: react_1.default.createElement(Icons_1.Tagicon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.Copyicon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.Imgicon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.SaveCommenticon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.Personicon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.Personicon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.Renewicon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.Linkicon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.Microphoneicon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.Commentsicon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.Penicon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.Lettericon, null) },
    { As: 'li', img: react_1.default.createElement(Icons_1.Pdficon, null) },
].map(generateRandomIndex_1.generateId);
function CommentForm(_a) {
    var placeHolder = _a.placeHolder, _b = _a.isOpen, isOpen = _b === void 0 ? true : _b, id = _a.id, nameAthour = _a.nameAthour;
    var _c = react_2.useContext(commentContext_1.commentContext), value = _c.value, onChange = _c.onChange;
    function handleChange(event) {
        onChange(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(value);
    }
    function handleClick() {
        console.log('cl');
    }
    react_1.useEffect(function () { console.log('commentform useeffect'); }, [isOpen]);
    if (!isOpen)
        return react_1.default.createElement("div", null);
    return (isOpen && (react_1.default.createElement("form", { className: commentform_css_1.default.form, onSubmit: handleSubmit },
        react_1.default.createElement("textarea", { className: commentform_css_1.default.inputText, value: value ? value : nameAthour, onChange: handleChange, placeholder: placeHolder }),
        react_1.default.createElement("div", { className: commentform_css_1.default.commentEdit },
            react_1.default.createElement("ul", { className: commentform_css_1.default.ulEdit },
                react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: handleClick })) })),
            react_1.default.createElement("button", { type: "submit", className: commentform_css_1.default.btnSubmit }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")))));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 107 */
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = void 0;
//рендериит любые списки
var react_1 = __importDefault(__webpack_require__(0));
var GenericList_css_1 = __importDefault(__webpack_require__(109));
var noop = function () { };
function GenericList(_a) {
    var list = _a.list, _b = _a.underline, underline = _b === void 0 ? true : _b;
    var liStyle = (underline) ? { 'border': '1px solid #ececec' } : { 'border': 'none' };
    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {
        var _b = _a.As, As = _b === void 0 ? 'div' : _b, img = _a.img, text = _a.text, _c = _a.onClick, onClick = _c === void 0 ? noop : _c, id = _a.id, href = _a.href;
        return (react_1.default.createElement(As, { style: liStyle, className: GenericList_css_1.default.item, onClick: function () { return onClick(id); }, key: id, href: href },
            img,
            text));
    })));
}
exports.GenericList = GenericList;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "GenericList__item--Ucdcn"
};


/***/ }),
/* 110 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentform__form--Cs1Oi",
	"inputText": "commentform__inputText--1BDbX",
	"commentEdit": "commentform__commentEdit--1cwdc",
	"ulEdit": "commentform__ulEdit--2pxMw",
	"liEdit": "commentform__liEdit--3OYlL",
	"btnSubmit": "commentform__btnSubmit--2d0SV"
};


/***/ }),
/* 111 */
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
__exportStar(__webpack_require__(112), exports);


/***/ }),
/* 112 */
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
exports.CommentsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var BtnDown_1 = __webpack_require__(18);
var BtnUp_1 = __webpack_require__(17);
var CommentItem_1 = __webpack_require__(113);
var commentslist_css_1 = __importDefault(__webpack_require__(118));
function CommentsList(_a) {
    var comments = _a.comments;
    return (react_1.default.createElement("ul", { className: commentslist_css_1.default.commentsList }, comments.map(function (comment, index) {
        var _a = react_1.useState(false), openReplies = _a[0], setOpenReplies = _a[1];
        if (comment.data.body)
            return (react_1.default.createElement("li", { className: commentslist_css_1.default.item, key: comment.data.id },
                react_1.default.createElement("div", { className: commentslist_css_1.default.controls },
                    react_1.default.createElement(BtnUp_1.BtnUp, { click: function () { return setOpenReplies(false); } }),
                    react_1.default.createElement(BtnDown_1.BtnDown, { click: function () { return setOpenReplies(true); } })),
                react_1.default.createElement(CommentItem_1.CommentItem, { created_utc: comment.data.created_utc, subreddit: comment.data.subreddit, author: comment.data.author, body: comment.data.body, id: comment.data.id }),
                openReplies &&
                    react_1.default.createElement("ul", { className: commentslist_css_1.default.commentsList }, comment.data.replies &&
                        comment.data.replies.data.children.length > 0 &&
                        comment.data.replies.data.children.map(function (child, index) {
                            if (child.data.body)
                                return (react_1.default.createElement("li", { className: commentslist_css_1.default.replies, key: index },
                                    react_1.default.createElement("div", { className: commentslist_css_1.default.controls },
                                        react_1.default.createElement(BtnUp_1.BtnUp, null),
                                        react_1.default.createElement(BtnDown_1.BtnDown, null)),
                                    react_1.default.createElement(CommentItem_1.CommentItem, { created_utc: child.data.created_utc, subreddit: child.data.subreddit, author: child.data.author, body: child.data.body, id: child.data.id })));
                        }))));
    })));
}
exports.CommentsList = CommentsList;


/***/ }),
/* 113 */
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
__exportStar(__webpack_require__(114), exports);


/***/ }),
/* 114 */
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
exports.CommentItem = void 0;
var react_1 = __importStar(__webpack_require__(0));
var merge_1 = __webpack_require__(5);
var generateRandomIndex_1 = __webpack_require__(6);
var TimeComment_1 = __webpack_require__(115);
var User_1 = __webpack_require__(116);
var CommentForm_1 = __webpack_require__(19);
var GenericList_1 = __webpack_require__(7);
var Icons_1 = __webpack_require__(1);
var commentitem_css_1 = __importDefault(__webpack_require__(117));
function CommentItem(_a) {
    var created_utc = _a.created_utc, subreddit = _a.subreddit, author = _a.author, body = _a.body, _b = _a.openReply, openReply = _b === void 0 ? true : _b, id = _a.id;
    var _c = react_1.useState(openReply), openFormReply = _c[0], setOpenFormReply = _c[1];
    var result = Math.ceil(Math.ceil(Math.abs(new Date().getTime() - created_utc * 1000)) /
        (1000 * 60 * 60));
    var handleItemClick = function () {
        console.log('klik ответить', id);
        setOpenFormReply(!openReply);
    };
    var LIST = [
        {
            As: 'li',
            text: 'Ответить',
            img: react_1.default.createElement(Icons_1.CommentIcon, null),
            onClick: handleItemClick,
        },
        { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },
        { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },
    ].map(generateRandomIndex_1.generateId);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: commentitem_css_1.default.itemtitle },
                react_1.default.createElement("div", { className: commentitem_css_1.default.titlesub }, subreddit),
                react_1.default.createElement("div", { className: commentitem_css_1.default.itemtitle },
                    react_1.default.createElement(TimeComment_1.TimeComment, { created_utc: result }),
                    react_1.default.createElement(User_1.User, { author: author }))),
            react_1.default.createElement("p", { className: commentitem_css_1.default.textcomment }, body),
            react_1.default.createElement("ul", { className: commentitem_css_1.default.ulicons },
                react_1.default.createElement(GenericList_1.GenericList, { underline: false, list: LIST.map(merge_1.merge({})) }))),
        react_1.default.createElement("div", null,
            react_1.default.createElement(CommentForm_1.CommentForm, { id: id, placeHolder: "", nameAthour: author, isOpen: openReply }))));
}
exports.CommentItem = CommentItem;


/***/ }),
/* 115 */
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
__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 116 */
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
__exportStar(__webpack_require__(12), exports);


/***/ }),
/* 117 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "commentitem__item--3BZMi",
	"itemtitle": "commentitem__itemtitle--2XM9E",
	"titlesub": "commentitem__titlesub--Q2JWn",
	"ulicons": "commentitem__ulicons--2fJ_N",
	"textcomment": "commentitem__textcomment--2EU3f",
	"portalReply": "commentitem__portalReply--2zNWS"
};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "commentslist__item--19c2O",
	"replies": "commentslist__replies--3Z8OR",
	"controls": "commentslist__controls--1ZA-8"
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCommentsData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(2));
var TokenContext_1 = __webpack_require__(3);
function useCommentsData(id) {
    var token = react_1.useContext(TokenContext_1.tokenContext);
    var _a = react_1.useState([]), comments = _a[0], setComments = _a[1];
    react_1.useEffect(function () {
        axios_1.default
            .get("https://www.reddit.com/comments/" + id + ".json?limit=20")
            .then(function (resp) {
            setComments(resp.data[1].data.children);
        })
            .catch(console.log);
    }, [token]);
    return comments;
}
exports.useCommentsData = useCommentsData;


/***/ }),
/* 120 */
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
var cardmenu_css_1 = __importDefault(__webpack_require__(121));
var Icons_1 = __webpack_require__(1);
var DropDownMenu_1 = __webpack_require__(122);
function CardMenu() {
    var _a = react_1.useState(false), isDropDownOpened = _a[0], setIsDropDownOpened = _a[1];
    var _b = react_1.useState({ x: 0, y: 0 }), portalXY = _b[0], setPortalXY = _b[1];
    return (react_1.default.createElement("div", { className: cardmenu_css_1.default.cardmenu },
        react_1.default.createElement("button", { className: cardmenu_css_1.default.cardmenuButton, onClick: function (ev) {
                setIsDropDownOpened(true);
                setPortalXY({ x: ev.clientX, y: ev.clientY });
            } },
            react_1.default.createElement(Icons_1.MenuIcon, null)),
        isDropDownOpened && (react_1.default.createElement(DropDownMenu_1.DropDownMenu, { portalTop: portalXY.y + 50, portalLeft: portalXY.x - 120, onClose: function () {
                setIsDropDownOpened(false);
            } }))));
}
exports.CardMenu = CardMenu;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardmenu": "cardmenu__cardmenu--2zHci",
	"cardmenuButton": "cardmenu__cardmenuButton--bunuf"
};


/***/ }),
/* 122 */
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
__exportStar(__webpack_require__(123), exports);


/***/ }),
/* 123 */
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
exports.DropDownMenu = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(15));
var merge_1 = __webpack_require__(5);
var generateRandomIndex_1 = __webpack_require__(6);
var GenericList_1 = __webpack_require__(7);
var Icons_1 = __webpack_require__(1);
var dropdownmenu_css_1 = __importDefault(__webpack_require__(124));
var LIST = [
    { As: 'li', text: 'Комментарии', img: react_1.default.createElement(Icons_1.CommentIcon, null) },
    { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },
    { As: 'li', text: 'Скрыть', img: react_1.default.createElement(Icons_1.HideIcon, null) },
    { As: 'li', text: 'Сохранить', img: react_1.default.createElement(Icons_1.SaveIcon, null) },
    { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },
].map(generateRandomIndex_1.generateId);
function DropDownMenu(_a) {
    var onClose = _a.onClose, portalTop = _a.portalTop, portalLeft = _a.portalLeft;
    var _b = react_1.useState(LIST), list = _b[0], setList = _b[1];
    var handleItemClick = function () {
        setList(list);
    };
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node &&
                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    var node = document.querySelector('#dropDown_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: dropdownmenu_css_1.default.dropdownmenuWrap },
        react_1.default.createElement("div", { style: { position: 'fixed', top: portalTop + "px", left: portalLeft + "px" }, className: dropdownmenu_css_1.default.dropdownmenu, ref: ref, id: "drop" },
            react_1.default.createElement("ul", { className: dropdownmenu_css_1.default.cardmenulist },
                react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: handleItemClick })) })),
            react_1.default.createElement("button", { className: dropdownmenu_css_1.default.btnClose, onClick: onClose }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))), node);
}
exports.DropDownMenu = DropDownMenu;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dropdownmenuWrap": "dropdownmenu__dropdownmenuWrap--3RZ8j",
	"dropdownmenu": "dropdownmenu__dropdownmenu--1DWBD",
	"btnClose": "dropdownmenu__btnClose--1Dyi9",
	"cardmenulist": "dropdownmenu__cardmenulist--3A7uo"
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Icons_1 = __webpack_require__(1);
var preview_css_1 = __importDefault(__webpack_require__(126));
function Preview(_a) {
    var url = _a.url;
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview }, url.includes('//')
        ? react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: url, alt: "pic" })
        : react_1.default.createElement(Icons_1.RedditIcon, { size: "100%" })));
}
exports.Preview = Preview;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--1Nukb",
	"previewImg": "preview__previewImg--3kTAV"
};


/***/ }),
/* 127 */
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
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
exports.indexTemplate = (function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n   <meta charset=\"UTF-8\">\n   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n   <title>ReactCard</title>\n   <script src = \"/static/client.js\" type=\"application/javascript\"></script>\n   <script>window.__token__= '" + token + "'</script>\n</head>\n<body>\n   <div id = \"react_root\">" + content + "</div>\n   <div id = \"modal_root\"></div>\n   <div id = \"dropDown_root\"></div>\n</body>\n</html>\n"; });


/***/ })
/******/ ]);