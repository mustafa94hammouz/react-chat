const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require("../controllers/user.controllers");

// a simple test url to check that all of our files are communicating correctly.
router.post("/", user_controller.user_create);

module.exports = router;
