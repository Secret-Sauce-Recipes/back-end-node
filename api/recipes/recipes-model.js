const db = require('../data/dbConfig');

const findAllRecipes = async (user_id) => {
  const allRecipes = await db('recipes as r').where('user_id', user_id);
  return allRecipes;
};

module.exports = {
  findAllRecipes,
};
