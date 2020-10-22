"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      // define association here
      Game.hasMany(models.Order);
    }

    static isPricey(price) {
      let output = "";
      if (price > 200000) {
        output += "Expensive";
        return output;
      } else if (price >= 100000) {
        output += "Quite pricey";
        return output;
      } else if (price < 100000) {
        output += "Affordable";
        return output;
      }
    }
  }
  Game.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "jangan kosongkan nama",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "jangan kosongkan stock",
          },
          isInt: {
            args: true,
            msg: "Stock wajib berbentuk angka",
          },
          min: {
            args: 1,
            msg: "Stock minimal 1",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "jangan kosongkan image",
          },
          isUrl: {
            args: true,
            msg: "Masukkan URL untuk image",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "jangan kosongkan price",
          },
          isInt: {
            args: true,
            msg: "Stock wajib berbentuk angka",
          },
          min: {
            args: 19999,
            msg: "Masukkan game dengan harga Rp 19.999 keatas",
          },
        },
      },
      serial_code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Game",
      hooks: {
        beforeCreate(instance, options) {
          let numbers = "123456789".split("");
          let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
          let output = "";

          for (let i = 0; i < 10; i++) {
            if (i !== 2 && i !== 3 && i !== 6 && i && 7) {
              let randomizer = Math.round(
                Math.random() * (alphabets.length - 1)
              );
              output += alphabets[randomizer];
            } else {
              let randomizer = Math.round(Math.random() * (numbers.length - 1));
              output += numbers[randomizer];
            }
          }
          instance.serial_code = output;
        },
      },
    }
  );
  return Game;
};
