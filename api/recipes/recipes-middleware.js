const { findById } = require('./recipes-model');

const uniqueUserPermissions = async (req, res, next) => {
  const recipe_id = parseInt(req.params.recipeId);
  const decodedUserId = req.decodedJwt.user_id;

  const recipe = await findById(decodedUserId, recipe_id);

  if (!recipe) {
    return res
      .status(401)
      .json({ message: `This resource does not exist for user` });
  } else {
    next();
  }
};

module.exports = {
  uniqueUserPermissions,
};
