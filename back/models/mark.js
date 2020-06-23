const Sequelize = require("sequelize");
const db = require('../db/index')

class Mark extends Sequelize.Model { }
Mark.init(
    {
        name: {
            type: Sequelize.ENUM({values: ["Apple", "Samsung", "Motorola", "Xiaomi", "Lenovo", "Dell", "HP",  "Otros"]})
        },
    },
    { sequelize: db, modelName: "mark" }
);

/* Product.addHook('beforeCreate', (product) => {

}) */

module.exports = Mark