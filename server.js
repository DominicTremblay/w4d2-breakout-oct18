const config = require("./knexfile");
const env = "development";
const knex = require("knex")(config[env]);

// Let's get the list of players that played the game 'card'

knex
  .select("first_name", "last_name", "played_on")
  .from("players")
  .innerJoin("game_details", "game_details.player_id", "players.id")
  .innerJoin("games", "game_details.game_id", "games.id")
  .where("games.name", "matrix")
  .then(function(result) {
    console.log(result);
  })
  .catch(error => {
    console.log("error: ", error);
  })
  .finally(() => {
    knex.destroy();
  });
