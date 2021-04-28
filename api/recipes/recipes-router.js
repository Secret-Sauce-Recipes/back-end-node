const router = require('express').Router();
const Recipes = require('./recipes-model');

router.get('/', async (req, res, next) => {
  const decodedUserId = req.decodedJwt.user_id;
  try {
    const allRecipes = await Recipes.findAll(decodedUserId);
    res.json(allRecipes);
  } catch (err) {
    next(err);
  }
});

router.get('/:recipeId', async (req, res, next) => {
  const decodedUserId = req.decodedJwt.user_id;
  const recipe_id = parseInt(req.params.recipeId);
  try {
    const recipe = await Recipes.findById(decodedUserId, recipe_id);
    res.json(recipe);
  } catch (err) {
    next();
  }
});

router.post('/', async (req, res, next) => {
  const decodedUserId = req.decodedJwt.user_id;
  try {
    const newRecipe = await Recipes.add(decodedUserId);
    res.status(201).json(newRecipe);
  } catch (err) {
    next(err);
  }
});

router.put('/:recipeId', async (req, res, next) => {
  const decodedUserId = req.decodedJwt.user_id;
  const recipe_id = parseInt(req.params.recipeId);
  try {
    const editedRecipe = await Recipes.edit(decodedUserId, recipe_id);
    res.json(editedRecipe);
  } catch (err) {
    next(err);
  }
});

router.delete('/:recipeId', async (req, res, next) => {
  const decodedUserId = req.decodedJwt.user_id;
  const recipe_id = parseInt(req.params.recipeId);
  try {
    const deletedRecipe = await Recipes.remove(decodedUserId, recipe_id);
    res.json(deletedRecipe);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
