module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    const status = {
        database: process.env.DATABASE_URL ? 'Configured' : 'MISSING',
        resend_api_key: process.env.RESEND_API_KEY ? 'Present' : 'MISSING',
        admin_email: process.env.ADMIN_EMAIL || 'Not Set (using fallback)',
        node_env: process.env.NODE_ENV || 'development'
    };

    return res.status(200).json(status);
};
