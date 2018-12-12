var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css'); //style-loader will inject this into the page, and become active when the page runs

var App = require('./components/App');

// A component is composed of 3 things:
// state 
// lifecycle events (methods)
// UI

ReactDOM.render(
    <App />,
    document.getElementById('app')
)