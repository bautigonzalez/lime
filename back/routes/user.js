const express = require("express");
const router = express.Router();
const passport = require('passport') 
const { User } = require("../models");

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

router.get("/admin", (req, res, next) => {

});

module.exports = router;
