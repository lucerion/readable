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

module.exports = { isURLValid, isURLHashValid };
