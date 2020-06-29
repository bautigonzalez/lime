var celulares = require("./celulares");
var notebooks = require("./notebooks");
var accesorios = require("./accesorios");
const Product = require("../models/products");
require("../db");

const prod = [].concat(celulares, notebooks, accesorios);

console.log("<<<<SEEDEANDO PRODUCTOS >>>>");

Product.bulkCreate(prod).then(() => {
  console.log("PRODUCTOS LISTOS EN LA BASE DE DATOS");
  process.exit();
});
