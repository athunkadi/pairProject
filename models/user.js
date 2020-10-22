"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order);
    }

    dontShowEmail() {
      let email = this.email.split("");
      let position;
      for (let i = email.length - 1; i >= 0; i--) {
        if (email[i] === "@") {
          position = i;
          break;
        }
      }
      for (let j = 0; j < position; j++) {
        email[j] = "*";
      }
      let emailJoined = email.join("");
      this.email = emailJoined;
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Jangan kosongkan nama anda",
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Jangan kosongkan username anda",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Jangan kosongkan password anda",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Jangan kosongkan email anda",
          },
          isEmail: {
            args: true,
            msg: "masukan email yang valid",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Apa peran anda?",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
