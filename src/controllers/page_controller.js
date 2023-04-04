const { SECRET_KEY, SECRET_IV } = require('../config');
const { request, readability, crypto } = require('../utils');
const { URL_ERROR_MESSAGES, isURLValid, isURLHashValid } = require('../validators');
const layout = require('../views/layout');

const index = ({ query: { url }}, res) => {
  if (!isURLValid(url)) return res.send(URL_ERROR_MESSAGES.urlIsNotValid);

  const urlHash = crypto.encrypt(url, SECRET_KEY, SECRET_IV);

  return res.redirect(`/${urlHash}`);
};

const show = async ({ params: { hash }}, res) => {
  if (!isURLHashValid(hash)) return res.send(URL_ERROR_MESSAGES.linkIsNotValid);

  const url = crypto.decrypt(hash, SECRET_KEY, SECRET_IV);
  const page = await request.get(url);
  const parsedPage = readability.parse(page);
  const html = layout(parsedPage);

  return res.send(html);
};

module.exports = { index, show };
