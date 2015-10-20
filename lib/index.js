const path = require('path');

const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const app = express();

app.set('view engine', 'jade');
app.set('views', path.resolve(__dirname, 'views'));

app.use('/vendors', express.static(path.resolve(__dirname, '..', 'public', 'bower_components')));
app.use('/app', express.static(path.resolve(__dirname, '..', 'app')));

app.get('/', (req, res) => {
  res.render('index', {entry: 'main', content: ReactDOMServer.renderToString(React.createElement(require('./components/layout').default))});
});

module.exports = app;
