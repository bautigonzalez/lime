const express = require("express");
const router = express.Router();
const {User} =require('../models')

router.get("/", (req, res, next)=>{
    User.findAll()
    .then((users)=>res.json(users))
})

router.put("/:id", (req, res, next)=>{
    console.log(req.body)
    User.findByPk(req.params.id)
    .then((user)=>{
        return user.update({state : req.body.state})
    })
    .then(()=>User.findAll())
    .then((users)=>res.status(201).json(users))
})

module.exports = router;