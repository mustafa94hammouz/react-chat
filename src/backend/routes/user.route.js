const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
let salt = bcrypt.genSaltSync(10);

router.post("/register", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.send("Email Already exist");
      } else {
        let user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, salt)
        });
        user.save(function(err) {
          if (err) return handleError(err.status);
          res.send(user);
        });
      }
    });
});

router.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (user) {
        console.log("account found");
        res.send(user);
      } else {
        console.log("account doesn't exist");
      }
    });
});

module.exports = router;
