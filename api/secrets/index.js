module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'secretsecret',
  NODE_ENV: process.env.NODE_ENV || 'development',
  DEV_DATABASE_URL:
    'postgresql://postgres:iBi.k7D8ewTH6@localhost:5432/secret-sauce-recipe',
  TESTING_DATABASE_URL:
    'postgresql://postgres:iBi.k7D8ewTH6@localhost:5432/secret-sauce-recipe_TEST',
};
