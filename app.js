const path = require('path');

const express = require('express');
const app = express();

app.use('/', express.static('assets/'));
app.use('/', express.static('dist/'));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, 'assets/') });
});

app.listen(8080);
console.log('Runnning at port 8080');