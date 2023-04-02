require('dotenv/config');

const PORT = process.env.PORT || 3000;

const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
  throw new Error('The `SECRET_KEY` environment variable is required but was not specified.');
}

const SECRET_IV = process.env.SECRET_IV;
if (!SECRET_IV) {
  throw new Error('The `SECRET_IV` environment variable is required but was not specified.');
}

module.exports = { PORT, SECRET_KEY, SECRET_IV };
