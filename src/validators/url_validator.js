const URL_ERROR_MESSAGES = {
  urlIsNotValid: 'URL is not valid.',
  linkIsNotValid: 'Link is not valid.',
};

const isURLValid = (url) => url ? true : false; // TODO: add validation that the url starts with 'http' or 'https'
const isURLHashValid = (hash) => hash ? true : false;

module.exports = { URL_ERROR_MESSAGES, isURLValid, isURLHashValid };
