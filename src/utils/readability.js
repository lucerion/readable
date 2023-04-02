const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

const parse = (page) => {
  const { window: { document } } = new JSDOM(page);
  const reader = new Readability(document);

  return reader.parse();
};

module.exports = { parse };
