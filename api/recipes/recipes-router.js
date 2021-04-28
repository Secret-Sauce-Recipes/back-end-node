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
  res.json({ message: 'POST recipe endpoint ', dummydata });
});

router.put('/:id', (req, res, next) => {
  res.json({ message: 'Put recipe by id endpoint', dummydata });
});

router.delete('/:id', (req, res, next) => {
  res.json({ message: 'Delete recipe by id endpoint' });
});

module.exports = router;

const dummydata = {
  recipe_id: 2,
  user_id: 1,
  recipe_img:
    'https://www.tasteofhome.com/wp-content/uploads/2019/02/Cast-Iron-Skillet-Steak_EXPS_CIMZ19_235746_B01_15_10b-2.jpg',
  source: 'Gordon Ramsey',
  category: 'Steak',
  ingredients:
    '1 rib-eye steak, 1 tablespoon butter, 1 tablespoon oil, 1 teaspoon salt, 1 teaspoon pepper',
  instructions:
    '1. Heat on high heat pan and apply oil, 2. Sear rib-eye on both sides for 45 seconds, 3. Keep flipping until medium rare, 4. Let rest and serve.',
  created_at: '2021-04-28T02:40:25.016Z',
  updated_at: '2021-04-28T02:40:25.016Z',
};
