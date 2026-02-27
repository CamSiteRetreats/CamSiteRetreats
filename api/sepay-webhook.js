const paymentHandler = require('./payment');

module.exports = async (req, res) => {
    // Ensure req.query exists
    req.query = req.query || {};

    // Force the action to 'webhook'
    req.query.action = 'webhook';

    // Delegate to the main payment handler
    return paymentHandler(req, res);
};
