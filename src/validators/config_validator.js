const CONFIG_ERROR_MESSAGES = {
  secretKeyRequired: 'The `SECRET_KEY` environment variable is required but was not specified.',
  secretIVRequired: 'The `SECRET_IV` environment variable is required but was not specified.',
};

const validateSecretKey = (secretKey) => validateEnvVar(secretKey, CONFIG_ERROR_MESSAGES.secretKeyRequired);
const validateSecretIV = (secretIV) => validateEnvVar(secretIV, CONFIG_ERROR_MESSAGES.secretIVRequired);

const validateEnvVar = (value, message) => {
  if (!value) {
    throw new Error(message);
  }
};

module.exports = { validateSecretKey, validateSecretIV };
