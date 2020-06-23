const Sequelize = require("sequelize");
const db = require('../db/index')

class Cart extends Sequelize.Model { }
Cart.init(
    {
        state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.INTEGER
        },
        address: {
            type: Sequelize.STRING
        }
    },
    { sequelize: db, modelName: "cart" }
);

/* Product.addHook('beforeCreate', (product) => {

}) */

module.exports = Cart