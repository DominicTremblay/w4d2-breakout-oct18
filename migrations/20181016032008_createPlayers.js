exports.up = function(knex, Promise) {
  return knex.schema.createTable("players", function(table) {
    table.increments("id").primary();
    table.string("first_name");
    table.string("last_name");
    table.string("email");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("players");
};
