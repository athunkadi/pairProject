"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = require("../data/games.json");

    data = data.map((x) => {
      x.createdAt = new Date();
      x.updatedAt = new Date();

      return x;
    });

    return queryInterface.bulkInsert("Games", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Games", null, {});
  },
};
