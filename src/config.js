const { validateSecretKey, validateSecretIV } = require('./validators');
require('dotenv/config');

const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;
const SECRET_IV = process.env.SECRET_IV;

validateSecretKey(SECRET_KEY);
validateSecretIV(SECRET_IV);

module.exports = { PORT, SECRET_KEY, SECRET_IV };
