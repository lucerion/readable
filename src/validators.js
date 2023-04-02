const validateSecretKey = (secretKey) => {
  if (!secretKey) {
    throw new Error('The `SECRET_KEY` environment variable is required but was not specified.');
  }
};

const validateSecretIV = (secretIV) => {
  if (!secretIV) {
    throw new Error('The `SECRET_IV` environment variable is required but was not specified.');
  }
};

// TODO: add validation that the url starts with 'http' or 'https'
const isURLValid = (url) => {
  if (url) {
    return true;
  }

  return false;
};

const isURLHashValid = (hash) => {
  if (hash) {
    return true;
  }

  return false;
};

module.exports = {
  validateSecretKey,
  validateSecretIV,
  isURLValid,
  isURLHashValid,
};
