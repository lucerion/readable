const CONFIG_ERROR_MESSAGES = {
  secretKeyRequired: 'The `SECRET_KEY` environment variable is required but was not specified.',
  secretIVRequired: 'The `SECRET_IV` environment variable is required but was not specified.',
};

const validateSecretKey = (secretKey) => { if (!secretKey) throw new Error(CONFIG_ERROR_MESSAGES.secretKeyRequired); };
const validateSecretIV = (secretIV) => { if (!secretIV) throw new Error(CONFIG_ERROR_MESSAGES.secretIVRequired); };

module.exports = { validateSecretKey, validateSecretIV };
