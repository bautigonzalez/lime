const Sequelize = require("sequelize");
const db = require('../db/index')

class Product extends Sequelize.Model { }
Product.init(
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description:{
            type: Sequelize.TEXT,
            allowNull: false,
        },
        valoration:{
            type: Sequelize.INTEGER
        },
        price:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        image:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        secondaryimage:{
            type: Sequelize.STRING
        }
        
    },
    { sequelize: db, modelName: "product" }
);

/* Product.addHook('beforeCreate', (product) => {

}) */

module.exports = Product