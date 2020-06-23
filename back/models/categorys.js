const Sequelize = require("sequelize");
const db = require('../db/index')

class Category extends Sequelize.Model { }
Category.init(
    {
        name: {
            type: Sequelize.ENUM({values: ["celulares", "notebooks", "accesorios"]})
        },
    },
    { sequelize: db, modelName: "category" }
);

/* Product.addHook('beforeCreate', (product) => {

}) */

module.exports = Category