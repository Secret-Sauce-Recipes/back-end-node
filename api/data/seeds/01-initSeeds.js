exports.seed = async function (knex) {
  await knex('users').insert([
    {
      username: 'Guy',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
      email: 'guy@email.com',
    },
  ]);
  await knex('recipes').insert([
    {
      user_id: 1,
      recipe_img:
        'https://www.seriouseats.com/recipes/assets_c/2015/05/20150511-scrambled-eggs-vicky-wasik-11-thumb-1500xauto-423059.jpg',
      source: 'Mom',
      category: 'Breakfast',
      ingredients:
        '1 Large Egg, 1 teaspoon salt, 1 teaspoon pepper, 1 tablespoon butter, 1 teaspoon truffle oil',
      instructions:
        '1. Heat pan and apply butter, 2. Pour egg mixture in pan over melted butter, 3. Cook until desired consistency, 4. Serve with truffle oil',
    },
  ]);
};
