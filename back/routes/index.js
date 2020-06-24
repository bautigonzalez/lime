const express=require('express')
const router= express.Router()
const userRoutes = require('./user')
const productRoutes =require('./product')
const cartRoutes = require('./cart')


router.use('/user', userRoutes)
router.use('/product',productRoutes)
router.use('/cart',cartRoutes)

module.exports = router