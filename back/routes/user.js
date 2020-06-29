const express = require("express");
const router = express.Router();
const passport = require('passport') 
const { User, Cart, Order, Product } = require("../models");

router.post("/register", (req, res, next)=>{
  console.log("me estoy registrando")
  User.create(req.body)
  .then((user)=>res.status(201).json(user))
})

router.post("/login", passport.authenticate("local"), (req, res, next)=>{
  console.log("ESTAS LOGGEADO");
  res.json(req.user)
})


router.get("/logout", (req, res, next) => {
  if (req.isAuthenticated()) {
    req.logout()  
    console.log("ESTAS DESLOGGEADO");
  }
  res.sendStatus(200);
})


router.get("/:id", (req, res, next) => {
  User.findByPk(req.params.id)
  .then(user => res.json(user))
});

router.get("/:id/cart", (req, res, next) => {
  Cart.findOne({
    include :[
      {
          model: Product,
          through: Order
      }],
    where: {
      userId: req.params.id,
      state: "pending"
    }
  })
  .then(orders=>{
    console.log(orders)
    res.json(orders)})
});

router.post("/:id/cart", (req, res, next) => {
  Cart.findOrCreate({
    where: {
      userId: req.params.id,
      state: "pending"
    }
  })
    .then((cart)=>{
      const cartfound = cart[0]
      Product.findByPk(req.body.product.id)
      .then(product => {
        return cartfound.addProduct(product)
      })
    })
    .then((cartorder)=>{
      console.log(cartorder)
      res.sendStatus(201)
    })
})

router.put("/:id/cart", (req, res, next) => {
  Cart.findOne({
    include :[
      {
          model: Product,
          through: Order
      }],
    where: {
      userId: req.params.id,
      state: "pending"
    }
  })
  .then(orders=>{
    console.log(orders)
    res.json(orders)})
});

router.get("/admin", (req, res, next) => {
  

});

module.exports = router;
