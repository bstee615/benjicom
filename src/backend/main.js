
import app from './app';

const isProduction = process.env.NODE_ENV == 'production';
console.log(process.env.NODE_ENV, 'mode at', __dirname);
const host = isProduction ? '0.0.0.0' : '127.0.0.1';
const port = isProduction ? 80 : 8080;

app.listen(port, host);
console.log('Runnning at ' + host + ':' + port);
