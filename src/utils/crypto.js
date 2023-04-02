const crypto = require('crypto');

const algorithm = 'aes-256-cbc';

const hash = (string) => {
  if (!string) {
    string = crypto.randomBytes(16).toString('hex');
  }

  return crypto.createHash('sha256').update(string).digest('hex');
};

const extractKey = (hash) => hash.substr(0, 32);
const extractIV = (hash) => hash.substr(0, 16);

const encrypt = (string, keyHash, ivHash) => {
  const cipher = crypto.createCipheriv(algorithm, extractKey(keyHash), extractIV(ivHash));
  const encryptedHex = cipher.update(string, 'utf8', 'hex');
  const cipherHex = cipher.final('hex');
  const buffer = Buffer.from(encryptedHex + cipherHex);

  return buffer.toString('base64url');
};

const decrypt = (encryptedString, keyHash, ivHash) => {
  const buffer = Buffer.from(encryptedString, 'base64url');
  const decipher = crypto.createDecipheriv(algorithm, extractKey(keyHash), extractIV(ivHash));
  const decryptedString = decipher.update(buffer.toString('utf8'), 'hex', 'utf8');
  const cipherString = decipher.final('utf8');

  return decryptedString + cipherString;
};

module.exports = { hash, encrypt, decrypt };
