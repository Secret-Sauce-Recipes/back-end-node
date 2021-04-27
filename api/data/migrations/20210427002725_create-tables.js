exports.up = async (knex) => {
  await knex.schema
  .createTable('users', (tbl) => {
    tbl.increments('user_id');
    tbl.string('username', 200).notNullable().unique();
    tbl.string('password', 200).notNullable();
    tbl.string('email', 200).notNullable().unique();
    tbl.timestamps(false, true);
  })
  .createTable('recipes', (tbl) => {
    tbl.increments('recipe_id');
    tbl
       .integer('user_id')
       .unsigned()
       .notNullable()
       .references('user_id')
       .inTable('users')
       .onDelete('RESTRICT')
       .onUpdate('RESTRICT');
    tbl.string('recipe_img');
    tbl.string('source').notNullable();
    tbl.string('category');
    tbl.text('ingredients').notNullable();
    tbl.text('instructions').notNullable();
    tbl.timestamps(false, true);
  });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('users');
};
