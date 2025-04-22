const jwt = require('jsonwebtoken');

const jwtSecret = 'olihfu';

const encrypt = (payload) => {
  try {
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
    return token;
  } catch (err) {
    console.error('Encryption error:', err);
    return null;
  }
};

const decrypt = (encryptedToken) => {
  try {
    const decoded = jwt.verify(encryptedToken, jwtSecret);
    return decoded;
  } catch (err) {
    console.error('Decryption error:', err);
    return null;
  }
};

module.exports = {
  encrypt,
  decrypt
};