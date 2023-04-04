const express = require('express');
const { PORT } = require('./config');
const router = require('./router');

const app = express();

app.use(router);
app.listen(PORT, () => console.warn(`Listening on port ${PORT}`));
