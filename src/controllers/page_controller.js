const path = require('path');
const { SECRET_KEY, SECRET_IV } = require('../config');
const { request, readability, crypto } = require('../utils');
const { URL_ERROR_MESSAGES, isURLValid } = require('../validators');
const showTemplate = require('../views/page/show');

const index = (req, res) => res.sendFile(path.join(__dirname, '..', 'views', 'page', 'index.html'));

const create = ({ body: { url }}, res) => {
  if (!isURLValid(url)) {
    return res.send(URL_ERROR_MESSAGES.urlIsNotValid);
  }

  const urlHash = crypto.encrypt(url, SECRET_KEY, SECRET_IV);

  return res.redirect(`/${urlHash}`);
};

const show = async ({ params: { hash }}, res) => {
  let url;
  let page;
  try {
    url = crypto.decrypt(hash, SECRET_KEY, SECRET_IV);
    page = await request.get(url);
  } catch (error) {
    console.error(error);
    return res.send(URL_ERROR_MESSAGES.linkIsNotValid);
  }

  const parsedPage = readability.parse(page);
  const html = showTemplate(parsedPage);

  return res.send(html);
};

module.exports = { index, create, show };
