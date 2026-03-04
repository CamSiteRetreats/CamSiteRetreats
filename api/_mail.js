const path = require('path');
const { sendEmail } = require(path.resolve(__dirname, '../utils/mail'));

module.exports = { sendEmail };
