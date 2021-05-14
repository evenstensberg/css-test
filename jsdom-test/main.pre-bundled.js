import jsdom from 'jsdom';
import React from 'react';
import ReactDOM from "react-dom";

const { JSDOM } = jsdom;
const dom = new JSDOM(`<div id="root"></div>`);

const App = () => {
    return <h1>Hello</h1>
}
global.window = dom.window;
ReactDOM.render(
    <App />,
    dom.window.document.getElementById("root")
);