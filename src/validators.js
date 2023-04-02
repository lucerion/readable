const ERROR_MESSAGES = {
  urlIsNotValid: 'URL is not valid.',
  linkIsNotValid: 'Link is not valid.',
  secretKeyRequired: 'The `SECRET_KEY` environment variable is required but was not specified.',
  secretIVRequired: 'The `SECRET_IV` environment variable is required but was not specified.',
};

const validateSecretKey = (secretKey) => { if (!secretKey) throw new Error(ERROR_MESSAGES.secretKeyRequired); };
const validateSecretIV = (secretIV) => { if (!secretIV) throw new Error(ERROR_MESSAGES.secretIVRequired); };

const isURLValid = (url) => url ? true : false; // TODO: add validation that the url starts with 'http' or 'https'
const isURLHashValid = (hash) => hash ? true : false;

module.exports = {
  ERROR_MESSAGES,
  validateSecretKey,
  validateSecretIV,
  isURLValid,
  isURLHashValid,
};
