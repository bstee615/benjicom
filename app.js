const path = require('path');

const express = require('express');
const app = express();

app.use('/', express.static('dist/assets'));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, 'dist/') });
});

app.listen(8080);
console.log('Runnning at port 8080');