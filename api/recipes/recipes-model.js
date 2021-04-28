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

const add = async (contents) => {
  const [newRecipe] = await db('recipes').insert(contents, [
    'recipe_id',
    'recipe_name',
    'recipe_img',
    'source',
    'category',
    'ingredients',
    'instructions',
    'created_at',
  ]);
  return newRecipe;
};

const edit = async (recipe_id, contents) => {
  const [updatedRecipe] = await db('recipes')
    .where('recipe_id', recipe_id)
    .update(contents, [
      'recipe_id',
      'recipe_name',
      'recipe_img',
      'source',
      'category',
      'ingredients',
      'instructions',
      'created_at',
    ]);
  return updatedRecipe;
};
const remove = async (recipe_id) => {
  const toBeDeleted = await db('recipes')
    .where('recipe_id', recipe_id)
    .del(['recipe_id', 'recipe_name']);

    return toBeDeleted
};
module.exports = {
  findAll,
  findById,
  add,
  edit,
  remove,
};
