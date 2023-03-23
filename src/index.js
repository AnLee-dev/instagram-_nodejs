'use strict'
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require("morgan");
const app = express();
const port = 3001;


app.use(express.static(path.join(__dirname, 'public')))
//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//router
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port);
