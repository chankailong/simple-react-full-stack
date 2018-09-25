const apiService = require('./service/apiService');
const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use('/api', apiService)
app.listen(8080, () => console.log('Listening on port 8080!'));
