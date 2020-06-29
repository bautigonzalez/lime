const User = require("./users");
const Product = require("./products");
const Cart = require("./carts")
//const Category = require("./categorys")
const Review = require("./reviews")
//const Mark = require("./mark")
const Order = require("./orders")




//Relaciones de carrito
Cart.belongsTo(User)


//Relaciones de la review   ?? USER_ID creo que esta de mas = la review pertenece al producto nada mas  O ver como implementar la reseña
Review.belongsTo(User)
Review.belongsTo(Product)


//Relaciones de Producto ?? ya seteamos la marca y categoria
/* Product.belongsTo(Mark)
Product.belongsTo(Category) */


//Relacion de Orden
/* Order.belongsTo(Product)
Order.belongsTo(Cart) */


//Many to Many

//Relacion de Orden
Product.belongsToMany(Cart, { through: Order });
Cart.belongsToMany(Product, { through: Order });

//Relaciones de la review
/* User.belongsToMany(Product, { through: Review });
Product.belongsToMany(User, { through: Review });
 */




module.exports = { User, Product, Cart, Review, Order};