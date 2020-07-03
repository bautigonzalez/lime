const express = require("express");
const router = express.Router();
const passport = require("passport");
var nodemailer = require("nodemailer");
const { User, Cart, Order, Product } = require("../models");
const { Op } = require("sequelize");

router.post("/register", (req, res, next) => {
  User.create(req.body).then((user) => res.status(201).json(user));
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.json(req.user);
});

router.get("/logout", (req, res, next) => {
  if (req.isAuthenticated()) {
    req.logout();
  }
  res.sendStatus(200);
});

router.get("/check", (req, res, next) => {
  res.json(req.user);
});

router.get("/orders", (req, res, next) => {
  Order.findAll().then((orders) => res.json(orders));
});

router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/home",
    failureRedirect: "http://localhost:3000/login",
  })
);

router.get("/:id", (req, res, next) => {
  User.findByPk(req.params.id).then((user) => res.json(user));
});

router.get("/:id/profile", (req, res, next) => {
  Cart.findAll({
    include: [
      {
        model: Product,
        through: Order,
      }],
    where: {
      userId: req.params.id,
      state: {[Op.not]: "pending"}
    },
  }).then((orders) => {
    res.json(orders);
  });
});

router.get("/:id/cart", (req, res, next) => {
  Cart.findOne({
    include: [
      {
        model: Product,
        through: Order,
      },
    ],
    where: {
      userId: req.params.id,
      state: "pending",
    },
  }).then((orders) => {
    console.log(orders);
    res.json(orders);
  });
});

router.post("/:id/cart", (req, res, next) => {
  Cart.findOrCreate({
    where: {
      userId: req.params.id,
      state: "pending",
    },
  })
    .then((cart) => {
      const cartfound = cart[0];
      Product.findByPk(req.body.product.id).then((product) => {
        return cartfound.addProduct(product);
      });
    })
    .then((cartorder) => {
      console.log(cartorder);
      res.sendStatus(201);
    });
});

router.post("/:id/cart/delete", (req, res, next) => {
  console.log(req.body)
  Cart.findOne({
    include: [
      {
        model: Product,
        through: Order,
      },
    ],
    where: {
      userId: req.params.id,
      state: "pending",
    },
  })
    .then((orders) => {
      Order.findOne({
        where: {
          cartId: orders.dataValues.id,
          productId: req.body.productId
        },
      }).then((order) => order.destroy());
    })
    .then((orderUpdate) => {
      res.sendStatus(201)
    });
});

router.put("/:id/cart", (req, res, next) => {
  Cart.findOne({
    include: [
      {
        model: Product,
        through: Order,
      },
    ],
    where: {
      userId: req.params.id,
      state: "pending",
    },
  })
    .then((orders) => {
      Order.findOne({
        where: {
          cartId: orders.dataValues.id,
          productId: req.body.productId
        },
      }).then((order) => order.update({ cant: req.body.cant}));
    })
    .then((orderUpdate) => {
      res.sendStatus(201)
    });
});

router.put("/:id/cart/checkout", (req, res, next) => {
  Cart.findOne({
    include: [
      {
        model: Product,
        through: Order,
      },
    ],
    where: {
      userId: req.params.id,
      state: "pending",
    },
  })
    .then((cartFound) => {
      cartFound.update({state: "completed"})
  })

  .then(() => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lime.store.plataforma5@gmail.com",
        pass: "limeadmin5",
      },
    })

var mailOptions = {
  from: "lime.store.plataforma5@gmail.com",
  to: req.body.email,
  subject: "Gracias por su compra!",
  text:
    "Compra realizada con exito, la recibira en una semana. Gracias por elegirnos!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
   console.log(error)
  } else {
    console.log("Email sent")
  }
})
  })
});

router.get("/admin", (req, res, next) => {});

module.exports = router;
