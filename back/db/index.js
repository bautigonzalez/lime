 
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/lime", {
    logging: false
});

module.exports = db
