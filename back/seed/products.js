var celulares = require("./celulares");
var notebooks = require("./notebooks");
var accesorios = require("./accesorios");
var superAdmin=require('./super-admin')
const Product = require("../models/products");
const User=require('../models/users')
require("../db");

const prod = [].concat(celulares, notebooks, accesorios);

console.log("<<<<SEEDEANDO PRODUCTOS >>>>");

Product.bulkCreate(prod).then(() => {
  console.log("PRODUCTOS LISTOS EN LA BASE DE DATOS");
  process.exit();
});

User.create(superAdmin).then(() => {
  console.log("ADMIN LISTO");
  process.exit();
});

