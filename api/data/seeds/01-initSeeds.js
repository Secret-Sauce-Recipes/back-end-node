
exports.seed = async function(knex) {
  await knex('users').insert([
    {
      username: 'Guy',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
      email:'guy@email.com'
    },
    {
      username: 'Guyguy',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
      email:'guyguy@email.com'
    },
  ])
};
