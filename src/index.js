const express = require('express');
const { readable, crypto } = require('./utils');
const { isURLValid, isURLHashValid } = require('./validators');
const layout = require('./views/layout');

require('dotenv/config');

const app = express();
const port = process.env.PORT || 3000;
const secretKey = process.env.SECRET_KEY;
const initVector = process.env.SECRET_IV;

app.get('/', async ({ query: { url }}, res) => {
  if (!isURLValid(url)) {
    return res.send('URL is not valid');
  }

  const urlHash = crypto.encrypt(url, secretKey, initVector);

  return res.redirect(`/${urlHash}`);
});

app.get('/:hash', async ({ params: { hash }}, res) => {
  if (!isURLHashValid(hash)) {
    return res.send('Link is not valid');
  }

  const url = crypto.decrypt(hash, secretKey, initVector);
  const readablePage = await readable.fetch(url);
  const page = layout(readablePage);

  return res.send(page);
});

app.listen(port, () => console.warn(`Listening on port ${port}`));
