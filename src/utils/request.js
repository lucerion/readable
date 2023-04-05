const http = require('http');
const https = require('https');

const client = (url) => new URL(url).protocol.startsWith('https') ? https : http;

const get = (url) => (
  new Promise((resolve, reject) => {
    let data = '';

    client(url).get(url, (resp) => {
      if (resp.statusCode === 302) {
        return resolve(get(resp.headers.location));
      }

      resp.on('data', (chunk) => data += chunk);
      resp.on('end', () => resolve(data));
    }).on('error', (error) => reject(error));
  })
);

module.exports = { get };
