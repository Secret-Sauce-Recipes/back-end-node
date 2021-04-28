const db = require('../data/dbConfig');

const findAll = async (user_id) => {
  const allRecipes = await db('recipes as r').where('user_id', user_id);
  return allRecipes;
};

const findById = async (user_id, recipe_id) => {
  const allRecipes = await db('recipes').where('user_id', user_id);
  const [recipe] = allRecipes.filter((recipe) => {
    return recipe.recipe_id === recipe_id;
  });
  return recipe;
};

const add = async (newRecipe) => {
  const something = await db('recipes').insert(newRecipe);
  return something
}

const edit = async (user_id, recipe_id) => {

}
const remove = async (user_id, recipe_id) => {

}
module.exports = {
  findAll,
  findById,
  add,
  edit,
  remove
};
