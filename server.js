/**
 * User: Jose Luis Orozco Mejia
 * Date: 16/09/13
 * Time: 17:22
 */

var express = require('express'),
    wines = require('./routes/employee');

var app = express();

app.get('/', wines.findByManager);

app.listen(3000);
console.log('Listening on port 3000...');
