const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
let salt = bcrypt.genSaltSync(10);
exports.user_create = function(req, res) {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt)
  });
  user.save(function(err) {
    if (err) return handleError(err);
    // let token = jwt.sign({ user }, "shhhhh");
    res.send(user);
  });
};
