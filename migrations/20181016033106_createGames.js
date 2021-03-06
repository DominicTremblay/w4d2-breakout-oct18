exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", function(table) {
    table.increments("id").primary();
    table.string("name");
    table.string("played_on");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("games");
};
