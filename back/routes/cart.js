const express = require("express");
const router = express.Router();
const {User , Cart} =require('../models')



router.get("/cart", (req, res, next)=>{
    res.send('holas')
})


module.exports= router