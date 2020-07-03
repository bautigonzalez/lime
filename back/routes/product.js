const express = require("express");
const router = express.Router();
const {Product , Review, User} =require('../models')


/// MARCA Y CATEGORIA ??


router.get("/", (req, res, next)=>{
  /*   console.log(req.query.c) */
    Product.findAll()
    .then(prod =>res.json(prod))
})

router.get('/:id', (req,res)=>{
    Product.findByPk(req.params.id)
    .then(prod => res.json(prod))
})

router.post('/', (req,res)=>{
    Product.create(req.body)
    .then(prod => res.status(201).json(prod))
})

router.delete('/:id/delete', (req,res)=>{
    Product.destroy({
        where:{id : req.params.id}
    })
    .then(()=> res.status(200).json("Producto eliminado"))
})

router.put("/:id", (req, res, next)=>{
    Product.findByPk(req.params.id)
        .then(prod=>{
            return prod.update(req.body)
        })
        .then(prod=>res.status(201).json(prod))
})


  
router.post('/:id/review', (req,res,next)=>{
    Product.findByPk(req.params.id)
    .then( prod =>{
      const product = prod 
      Review.create(req.body)
      .then( review =>{
        review.setProduct(product)
        res.json(review)
      })
    })
})


router.get('/:id/review',(req,res)=>{
    Review.findAll({
        include: [
            {
                model: User
            }],
        where:{productId: req.params.id}
    })
    .then(reviews => res.json(reviews))
})

module.exports = router;


