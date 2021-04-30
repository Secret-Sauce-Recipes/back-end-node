module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'secretsecret',
  NODE_ENV: process.env.NODE_ENV || 'development',
  DEV_DATABASE_URL: process.env.DEV_DATABASE_URL,
  TESTING_DATABASE_URL: process.env.TESTING_DATABASE_URL,
  BCRYPT_ROUNDS: parseInt(process.env.BCRYPT_ROUNDS) || 10,
  AWS_ID: process.env.AWS_ID,
  AWS_SECRET: process.env.AWS_SECRET,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
};
