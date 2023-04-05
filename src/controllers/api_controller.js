const { SECRET_KEY, SECRET_IV } = require('../config');
const { crypto } = require('../utils');
const { URL_ERROR_MESSAGES, isURLValid } = require('../validators');

const create = ({ protocol, headers: { host }, body: { url }}, res) => {
  if (!isURLValid(url)) return res.send({ error: URL_ERROR_MESSAGES.urlIsNotValid });

  const hash = crypto.encrypt(url, SECRET_KEY, SECRET_IV);
  const readablePageURL = `${protocol}://${host}/${hash}`;

  return res.send({ originalPageURL: url, readablePageURL });
};

module.exports = { create };
