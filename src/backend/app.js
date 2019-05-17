import path from 'path';
import express from 'express';
const app = express();

app.use('/', express.static('assets/'));
app.use('/', express.static('dist/'));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../../assets/') });
});

export default app;