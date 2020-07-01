const express=require('express')
const router= express.Router()
const userRoutes = require('./user')
const productRoutes =require('./product')
const adminRoutes =require('./admin')


router.use('/user', userRoutes)
router.use('/product',productRoutes)
router.use('/admin',adminRoutes)

module.exports = router