const http = require('http');
const https = require('https');

const get = (url) => (
  new Promise((resolve) => {
    let data = '';
    const client = new URL(url).protocol == 'https:' ? https : http;

    client.get(url, (resp) => {
      resp.on('data', (chunk) => data += chunk);
      resp.on('end', () => resolve(data));
    });
  })
);

module.exports = { get };
