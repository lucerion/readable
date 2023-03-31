const express = require('express');
const https = require('https');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

require('dotenv/config');

const app = express();
const port = process.env.PORT || 3000;

const request = (url) => (
  new Promise((resolve) => {
    let data = '';

    https.get(url, (resp) => {
      resp.on('data', (chunk) => data += chunk);
      resp.on('end', () => resolve(data));
    });
  })
);

const layout = ({ title, content }) => (
  `
    <!doctype html>
    <html>
    <head>
        <title>${title}</title>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `
);

app.get('/', async (req, res) => {
  const pageString = await request(req.query.url);
  const pageDOM = new JSDOM(pageString);
  const pageObject = new Readability(pageDOM.window.document).parse();
  const readablePage = layout(pageObject);

  return res.send(readablePage);
});

app.listen(port, () => console.warn(`Listening on port ${port}`));
