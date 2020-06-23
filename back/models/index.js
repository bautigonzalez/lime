const User = require("./users");
const Product = require("./products");
const Cart = require("./carts")
const Category = require("./categorys")
const Review = require("./reviews")
const Mark = require("./mark")
const Order = require("./mark")

// relaciones de usuario
User.hasMany(Review, {as: "review"});

//Relaciones de carrito
Cart.belongsTo(User, {as: "user"})
Cart.hasMany(Order, {as: "order"})

//Relaciones de la review
Review.belongsTo(User, {as:"user"})
Review.hasOne(Product, {as:"product"})

//Relaciones de Producto
Product.hasMany(Review, {as: "review"})
Review.hasOne(Mark, {as:"mark"})
Review.hasOne(Category, {as:"category"})

//Relacion de Orden
Order.hasOne(Product, {as:"product"})
Order.belongsTo(Cart, {as: "cart"})

module.exports = { User, Product, Cart, Category, Review, Mark, Order};