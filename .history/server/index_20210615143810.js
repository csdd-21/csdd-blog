const { json } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(api);
app.listen('8100', function () {
    console.log("------ node express run in port 8100 ! ------");
})
