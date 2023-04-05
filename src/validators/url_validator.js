const URL_ERROR_MESSAGES = {
  urlIsNotValid: 'URL is not valid.',
  linkIsNotValid: 'Link is not valid.',
};

// TODO: add stricter validation of the url
const isURLValid = (url) => url && (url.startsWith('http://') || url.startsWith('https://')) ? true : false;

module.exports = { URL_ERROR_MESSAGES, isURLValid };
