
/**
 * Insert this Errsole code snippet as the first line of your app's main file
 */
const errsole = require('errsole');
errsole.initialize({
  framework: 'express',
  token: '96bd5707-922f-4fdb-b3d5-be50581a65b0'
});
// End of Errsole code snippet

/**
 * Your app code starts here
 */
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
