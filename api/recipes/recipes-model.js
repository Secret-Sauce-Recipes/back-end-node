const db = require('../data/dbConfig');

const findAllRecipes = async (user_id) => {
  const allRecipes = await db('recipes as r').where('user_id', user_id);
  return allRecipes;
};

const findRecipeById = async (user_id, recipeId) => {
  const allRecipes = await db('recipes').where('user_id', user_id);
  const [recipe] = allRecipes.filter((recipe) => {
    return recipe.recipe_id === recipeId;
  });
  return recipe;
};

module.exports = {
  findAllRecipes,
  findRecipeById,
};
