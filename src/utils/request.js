const http = require('http');
const https = require('https');

const client = (url) => new URL(url).protocol.startsWith('https') ? https : http;

const get = (url) => (
  new Promise((resolve) => {
    let data = '';

    client(url).get(url, (resp) => {
      resp.on('data', (chunk) => data += chunk);
      resp.on('end', () => resolve(data));
    });
  })
);

module.exports = { get };
