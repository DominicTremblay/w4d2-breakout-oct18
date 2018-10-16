const faker = require("faker");
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE games_id_seq RESTART WITH 1"),
    knex("games")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("games").insert([
          { name: faker.hacker.noun(), played_on: faker.date.past() },
          { name: faker.hacker.noun(), played_on: faker.date.past() },
          { name: faker.hacker.noun(), played_on: faker.date.past() },
          { name: faker.hacker.noun(), played_on: faker.date.past() },
          { name: faker.hacker.noun(), played_on: faker.date.past() },
          { name: faker.hacker.noun(), played_on: faker.date.past() },
          { name: faker.hacker.noun(), played_on: faker.date.past() }
        ]);
      })
  ]);
};
