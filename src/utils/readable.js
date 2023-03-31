const http = require('./http');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

const parse = (page) => {
  const { window: { document } } = new JSDOM(page);
  const reader = new Readability(document);

  return reader.parse();
};

const fetch = async (url) => {
  const page = await http.get(url);

  return parse(page);
};

module.exports = { fetch, parse };
