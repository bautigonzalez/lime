const Sequelize = require("sequelize");
const db = require('../db/index')

class Review extends Sequelize.Model { }
Review.init(
    {
        content: {
            type: Sequelize.TEXT,
        },
        stars: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
    },
    { sequelize: db, modelName: "review" }
);

/* Product.addHook('beforeCreate', (product) => {

}) */

module.exports = Review