import 'react-hot-loader';
import React from 'react';
import * as ReactDOM from "react-dom";
import {App} from "../App";
import {useToken} from 'react';

window.addEventListener('load',()=> {
ReactDOM.hydrate(<App />, document.getElementById("react_root"));
});