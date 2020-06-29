const express = require("express");
const router = express.Router();
const passport = require('passport') 
const { User, Cart, Order, Product } = require("../models");

router.post("/register", (req, res, next)=>{
  User.create(req.body)
  .then((user)=>res.status(201).json(user))
})

router.post("/login", passport.authenticate("local"), (req, res, next)=>{
  res.json(req.user)
})


router.get("/logout", (req, res, next) => {
  if (req.isAuthenticated()) {
    req.logout()  
  }
  res.sendStatus(200);
})

router.get("/check", (req, res, next) => {
  res.json(req.user)
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


router.get("/admin", (req, res, next) => {
  

});

module.exports = router;
