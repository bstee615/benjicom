import path from 'path';
import express from 'express';
const app = express();

const assetsPath = path.join(__dirname, '../../assets/');

app.use('/', express.static('assets/'));
app.use('/', express.static('dist/'));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: assetsPath });
});

app.get('/projects', function(req, res) {
    res.sendFile('index.html', { root: assetsPath });
});

export default app;