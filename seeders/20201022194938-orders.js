"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {
        UserId: 4,
        GameId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 4,
        GameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 4,
        GameId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 4,
        GameId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 6,
        GameId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 6,
        GameId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 7,
        GameId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 7,
        GameId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 7,
        GameId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 7,
        GameId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 8,
        GameId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 8,
        GameId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 8,
        GameId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert("Orders", data, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Orders", null, {});
  },
};
