
/**
 * Insert this Errsole code snippet as the first line of your app's main file
 */
const errsole = require('errsole');
errsole.initialize({
  framework: 'express',
  token: 'f02f2e8b-4463-41c7-a51a-24578ea0af11'
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
