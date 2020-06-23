 
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://postgres:argentina09@localhost:5432/lime", {
    logging: false
});

module.exports = db