exports.up = function(knex, Promise) {
  return knex.schema.createTable("game_details", function(table) {
    table.increments("id").primary();
    table.integer("player_id");
    table.integer("game_id");
    table.timestamps(true, true);

    table
      .foreign("player_id")
      .references("id")
      .on("players")
      .onDelete("cascade");

    table
      .foreign("game_id")
      .references("id")
      .on("games")
      .onDelete("cascade");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("game_details");
};
