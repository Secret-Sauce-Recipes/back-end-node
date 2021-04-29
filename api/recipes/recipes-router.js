const router = require('express').Router();
const Recipes = require('./recipes-model');
const { uniqueUserPermissions } = require('./recipes-middleware');

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
  let contents = req.body;
  contents = {
    ...contents,
    user_id: decodedUserId,
  };
  try {
    const newRecipe = await Recipes.add(contents);
    res.status(201).json(newRecipe);
  } catch (err) {
    next(err);
  }
});

router.put('/:recipeId', uniqueUserPermissions, async (req, res, next) => {
  const recipe_id = parseInt(req.params.recipeId);
  const contents = req.body;
  try {
    const editedRecipe = await Recipes.edit(recipe_id, contents);
    res.json(editedRecipe);
  } catch (err) {
    next(err);
  }
});

router.delete('/:recipeId', uniqueUserPermissions, async (req, res, next) => {
  const recipe_id = parseInt(req.params.recipeId);
  try {
    const deletedRecipe = await Recipes.remove(recipe_id);
    res.json(deletedRecipe);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
