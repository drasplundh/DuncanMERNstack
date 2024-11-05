//create an api to read data via query parameter and save that information to a file on the server

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.listen(3000);