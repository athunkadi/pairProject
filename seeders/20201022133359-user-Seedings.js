"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = require("../data/users.json");

    data = data.map((x) => {
      x.createdAt = new Date();
      x.updatedAt = new Date();

      return x;
    });

    return queryInterface.bulkInsert("Users", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
