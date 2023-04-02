const express = require('express');
const { PORT, SECRET_KEY, SECRET_IV } = require('./config');
const { isURLValid, isURLHashValid } = require('./validators');
const { request, readability, crypto } = require('./utils');
const layout = require('./views/layout');

const app = express();

app.get('/', async ({ query: { url }}, res) => {
  if (!isURLValid(url)) {
    return res.send('URL is not valid');
  }

  const urlHash = crypto.encrypt(url, SECRET_KEY, SECRET_IV);

  return res.redirect(`/${urlHash}`);
});

app.get('/:hash', async ({ params: { hash }}, res) => {
  if (!isURLHashValid(hash)) {
    return res.send('Link is not valid');
  }

  const url = crypto.decrypt(hash, SECRET_KEY, SECRET_IV);
  const page = await request.get(url);
  const content = readability.parse(page);
  const html = layout(content);

  return res.send(html);
});

app.listen(PORT, () => console.warn(`Listening on port ${PORT}`));
