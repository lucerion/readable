const express = require('express');
const { readable } = require('./utils');
const layout = require('./views/layout');

require('dotenv/config');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async ({ query: { url }}, res) => {
  const readablePage = await readable.fetch(url);
  const page = layout(readablePage);

  return res.send(page);
});

app.listen(port, () => console.warn(`Listening on port ${port}`));
