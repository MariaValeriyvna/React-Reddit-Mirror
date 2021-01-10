webpackHotUpdate("main",{

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar actions_1 = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\r\nvar store_1 = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\r\nfunction useToken() {\r\n    react_1.useEffect(function () {\r\n        store_1.store.dispatch(actions_1.saveToken());\r\n    });\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentItem/CommentItem.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CommentsList/CommentItem/CommentItem.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentItem = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar __1 = __webpack_require__(/*! .. */ \"./src/shared/CommentsList/index.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../../../store/actions */ \"./src/store/actions.ts\");\r\nvar merge_1 = __webpack_require__(/*! ../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar TimeComment_1 = __webpack_require__(/*! ../../CardsList/Card/TimeComment */ \"./src/shared/CardsList/Card/TimeComment/index.ts\");\r\nvar User_1 = __webpack_require__(/*! ../../CardsList/Card/User */ \"./src/shared/CardsList/Card/User/index.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ../../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar ControlOpenAddComments_1 = __webpack_require__(/*! ../ControlOpenAddComments */ \"./src/shared/CommentsList/ControlOpenAddComments/index.ts\");\r\nvar commentitem_css_1 = __importDefault(__webpack_require__(/*! ./commentitem.css */ \"./src/shared/CommentsList/CommentItem/commentitem.css\"));\r\nfunction CommentItem(_a) {\r\n    var created_utc = _a.created_utc, subreddit = _a.subreddit, author = _a.author, body = _a.body, _b = _a.isOpenReply, isOpenReply = _b === void 0 ? false : _b, replies = _a.replies, id = _a.id;\r\n    var _c = react_1.useState(replies && replies.data.children.length > 0 ? false : true), openReplies = _c[0], setOpenReplies = _c[1];\r\n    var _d = react_1.useState(isOpenReply), openFormReply = _d[0], setOpenFormReply = _d[1];\r\n    var result = Math.ceil(Math.ceil(Math.abs(new Date().getTime() - created_utc * 1000)) /\r\n        (1000 * 60 * 60));\r\n    var handleItemClick = function () {\r\n        setOpenFormReply(!openFormReply);\r\n    };\r\n    var LIST = [\r\n        {\r\n            As: 'li',\r\n            text: 'Ответить',\r\n            img: react_1.default.createElement(Icons_1.CommentIcon, null),\r\n            onClick: handleItemClick,\r\n        },\r\n        { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },\r\n        { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    var valueText = react_redux_1.useSelector(function (state) {\r\n        var _a;\r\n        return ((_a = state.commentsForReplies[id]) === null || _a === void 0 ? void 0 : _a.reply) ? state.commentsForReplies[id].reply\r\n            : author + ' , ';\r\n    });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(event) {\r\n        dispatch(actions_1.updateReply(id, author, event.target.value));\r\n    }\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: commentitem_css_1.default.controls },\r\n            react_1.default.createElement(ControlOpenAddComments_1.ControlOpenAddComments, { openReplies: openReplies, onClickUp: function () { return setOpenReplies(false); }, onClickDown: function () { return setOpenReplies(true); } })),\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"div\", { className: commentitem_css_1.default.itemtitle },\r\n                react_1.default.createElement(\"div\", { className: commentitem_css_1.default.titlesub }, subreddit),\r\n                react_1.default.createElement(\"div\", { className: commentitem_css_1.default.itemtitle },\r\n                    react_1.default.createElement(TimeComment_1.TimeComment, { created_utc: result }),\r\n                    react_1.default.createElement(User_1.User, { author: author }))),\r\n            react_1.default.createElement(\"p\", { className: commentitem_css_1.default.textcomment }, body),\r\n            react_1.default.createElement(\"ul\", { className: commentitem_css_1.default.ulicons },\r\n                react_1.default.createElement(GenericList_1.GenericList, { underline: false, list: LIST.map(merge_1.merge({})) })),\r\n            react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { placeHolder: \"\", textbtn: \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\", nameAuthor: author, isOpen: openFormReply, onChange: handleChange, valueText: valueText })),\r\n        openReplies && replies && replies.data.children.length > 0 && (react_1.default.createElement(__1.CommentsList, { forauthor: author, key: author, comments: replies.data.children }))));\r\n}\r\nexports.CommentItem = CommentItem;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentItem/CommentItem.tsx?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nvar TextComponent_1 = __webpack_require__(/*! ../CardsList/Card/TextComponent */ \"./src/shared/CardsList/Card/TextComponent/index.ts\");\r\nvar Controls_1 = __webpack_require__(/*! ../CardsList/Card/Controls */ \"./src/shared/CardsList/Card/Controls/index.ts\");\r\nvar postsContext_1 = __webpack_require__(/*! ../Context/postsContext */ \"./src/shared/Context/postsContext.tsx\");\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar merge_1 = __webpack_require__(/*! ../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar CommentsList_1 = __webpack_require__(/*! ../CommentsList */ \"./src/shared/CommentsList/index.ts\");\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.ts\");\r\nvar useCloseElement_1 = __webpack_require__(/*! ../../hooks/useCloseElement */ \"./src/hooks/useCloseElement.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nfunction Post(_a) {\r\n    var title = _a.title, onClose = _a.onClose, author = _a.author, created_utc = _a.created_utc, id = _a.id, urlpreview = _a.urlpreview, score = _a.score, num_comments = _a.num_comments;\r\n    var ref = react_1.useRef(null);\r\n    var posts = react_1.useContext(postsContext_1.postsContext);\r\n    var comments = useCommentsData_1.useCommentsData(id);\r\n    var isClose = useCloseElement_1.useCloseElement(ref, false, onClose);\r\n    var LIST = [\r\n        { As: 'li', text: 'Комментарии', img: react_1.default.createElement(Icons_1.CommentIcon, null) },\r\n        { As: 'li', text: 'Поделиться', img: react_1.default.createElement(Icons_1.ShareIcon, null) },\r\n        { As: 'li', text: 'Скрыть', img: react_1.default.createElement(Icons_1.HideIcon, null) },\r\n        { As: 'li', text: 'Сохранить', img: react_1.default.createElement(Icons_1.SaveIcon, null) },\r\n        { As: 'li', text: 'Пожаловаться', img: react_1.default.createElement(Icons_1.ComplainIcon, null) },\r\n    ].map(generateRandomIndex_1.generateId);\r\n    console.log(comments);\r\n    var postMedia, urlImg, checkurl, selftext;\r\n    posts.forEach(function (post) {\r\n        var _a, _b;\r\n        if (post.data.id === id) {\r\n            postMedia = (_b = (_a = post.data.media) === null || _a === void 0 ? void 0 : _a.reddit_video) === null || _b === void 0 ? void 0 : _b.fallback_url;\r\n            urlImg = post.data.url;\r\n            checkurl = urlImg.includes('jpg') || urlImg.includes('png');\r\n            selftext = post.data.selftext;\r\n        }\r\n    });\r\n    var valueText = react_redux_1.useSelector(function (state) { var _a; return ((_a = state.commentForPost[id]) === null || _a === void 0 ? void 0 : _a.comment) ? state.commentForPost[id].comment : ''; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(event) {\r\n        dispatch(actions_1.updateComment(id, title, event.target.value));\r\n    }\r\n    function handleClick() {\r\n        console.log('click');\r\n    }\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node || isClose)\r\n        return react_1.default.createElement(\"div\", null);\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: post_css_1.default.modalWrap },\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n            react_1.default.createElement(\"button\", { className: post_css_1.default.cross, onClick: onClose },\r\n                react_1.default.createElement(Icons_1.Crossicon, null)),\r\n            react_1.default.createElement(\"div\", { className: post_css_1.default.modalTitle },\r\n                react_1.default.createElement(Controls_1.Controls, { score: score, num_comments: num_comments }),\r\n                react_1.default.createElement(TextComponent_1.TextComponent, { title: title, author: author, created_utc: created_utc, titleShort: false, id: id, urlpreview: urlpreview, score: score, num_comments: num_comments })),\r\n            react_1.default.createElement(\"div\", { className: post_css_1.default.modalContent },\r\n                react_1.default.createElement(\"p\", null, selftext),\r\n                postMedia ? (react_1.default.createElement(\"video\", { className: post_css_1.default.modalContent__media, controls: true },\r\n                    react_1.default.createElement(\"source\", { src: postMedia, type: \"video/mp4\" }))) : checkurl ? (react_1.default.createElement(\"img\", { className: post_css_1.default.modalContent__media, src: urlImg, alt: \"pic\" })) : ((urlpreview.includes('//') && (react_1.default.createElement(react_1.default.Fragment, null,\r\n                    react_1.default.createElement(\"img\", { className: post_css_1.default.modalContent__media, src: urlpreview, alt: \"pic\" }),\r\n                    react_1.default.createElement(\"a\", { href: urlImg }, urlImg)))) || react_1.default.createElement(Icons_1.RedditIcon, { size: '100px' }))),\r\n            react_1.default.createElement(\"ul\", { className: post_css_1.default.ulicons },\r\n                react_1.default.createElement(GenericList_1.GenericList, { underline: false, list: LIST.map(merge_1.merge({ onClick: handleClick })) })),\r\n            react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { id: 'post', placeHolder: 'Оставьте Ваш комментарий', textbtn: 'Комментировать', onChange: handleChange, valueText: valueText }),\r\n            comments.length > 0 && (react_1.default.createElement(CommentsList_1.CommentsList, { comments: comments, forauthor: author, key: author })))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveToken = exports.setToken = exports.updateReply = exports.updateComment = exports.UPDATE_REPLY = exports.SET_TOKEN = exports.UPDATE_COMMENT = void 0;\r\nexports.UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nexports.SET_TOKEN = 'SET_TOKEN';\r\nexports.UPDATE_REPLY = 'UPDATE_REPLY';\r\nexports.updateComment = function (key, post, comment) { return ({\r\n    type: exports.UPDATE_COMMENT,\r\n    key: key,\r\n    post: post,\r\n    comment: comment,\r\n}); };\r\nexports.updateReply = function (key, forAuthor, reply) { return ({\r\n    type: exports.UPDATE_REPLY,\r\n    key: key,\r\n    forAuthor: forAuthor,\r\n    reply: reply,\r\n}); };\r\nexports.setToken = function (token) { return ({\r\n    type: exports.SET_TOKEN,\r\n    token: token,\r\n}); };\r\nexports.saveToken = function () { return function (dispatch, getState) {\r\n    if (window.__token__)\r\n        dispatch(exports.setToken(window.__token__));\r\n}; };\r\n\n\n//# sourceURL=webpack:///./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/reducers.ts":
/*!*******************************!*\
  !*** ./src/store/reducers.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/actions.ts\");\r\nvar actions_2 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store/store.ts\");\r\nexports.rootReducer = function (state, action) {\r\n    var _a, _b;\r\n    if (state === void 0) { state = store_1.initialState; }\r\n    switch (action.type) {\r\n        case actions_1.UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentForPost: __assign(__assign({}, state.commentForPost), (_a = {}, _a[action.key] = { post: action.post, comment: action.comment }, _a)) });\r\n        case actions_1.UPDATE_REPLY:\r\n            return __assign(__assign({}, state), { commentsForReplies: __assign(__assign({}, state.commentsForReplies), (_b = {}, _b[action.key] = { forAuthor: action.forAuthor, reply: action.reply }, _b)) });\r\n        case actions_1.SET_TOKEN:\r\n            return __assign(__assign({}, state), { token: action.token });\r\n        case actions_2.ME_REQUEST_SUCCESS:\r\n        case actions_2.ME_REQUEST:\r\n        case actions_2.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/reducers.ts?");

/***/ })

})