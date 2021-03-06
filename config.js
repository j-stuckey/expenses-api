require('dotenv');

module.exports = {
	PORT: process.env.PORT || 8080,
	CLIENT_ORIGIN:
		process.env.CLIENT_ORIGIN || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://host.docker.internal:27017/expenses',
    TEST_DATABASE_URL:
		process.env.TEST_DATABASE_URL || 'mongodb://localhost/expenses',
    API_KEY: process.env.API_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY || '3d'
}