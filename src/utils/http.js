const https = require('https');

const get = (url) => (
  new Promise((resolve) => {
    let data = '';

    https.get(url, (resp) => {
      resp.on('data', (chunk) => data += chunk);
      resp.on('end', () => resolve(data));
    });
  })
);

module.exports = { get };
