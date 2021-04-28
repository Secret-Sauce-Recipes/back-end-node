const router = require('express').Router();
const Recipes = require('./recipes-model');

router.get('/', async (req, res, next) => {
  const decodedUserId = req.decodedJwt.user_id;
  try {
    const allRecipes = await Recipes.findAllRecipes(decodedUserId);
    res.json(allRecipes);
  } catch (err) {
    next(err);
  }
});

router.get('/:recipeId', async (req, res, next) => {
  const decodedUserId = req.decodedJwt.user_id;
  const recipeId = parseInt(req.params.recipeId);
  try {
    const recipe = await Recipes.findRecipeById(decodedUserId, recipeId);
    res.json(recipe);
  } catch (err) {
    next();
  }
});

router.post('/', (req, res, next) => {
  res.json({ message: 'POST recipe endpoint ' });
});

router.put('/:id', (req, res, next) => {
  res.json({ message: 'Put recipe by id endpoint' });
});

router.delete('/:id', (req, res, next) => {
  res.json({ message: 'Delete recipe by id endpoint' });
});

module.exports = router;
