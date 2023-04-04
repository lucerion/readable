const express = require('express');
const { PORT } = require('./config');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());
app.use(router);
app.listen(PORT, () => console.warn(`Listening on port ${PORT}`));
