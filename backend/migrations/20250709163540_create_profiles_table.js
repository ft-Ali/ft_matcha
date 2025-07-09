exports.up = function(knex) {
  return knex.schema.createTable('account_member', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('age').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
