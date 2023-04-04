const { crypto } = require('../utils');

const generateSecret = () => {
  const hash = crypto.hash();
  console.warn(hash);
};

module.exports = { generateSecret };
