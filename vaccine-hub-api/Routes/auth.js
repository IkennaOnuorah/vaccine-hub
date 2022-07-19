const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    //take users email and password and attempting to authenticate them
    const user = await User.login(req.body);
    return res.status(200).json({ user });
  } catch (e) {
    next(e);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    //take the user, email, and password and create a new user in the database.
    const user = await User.register(req.body);
    console.log(req.body);
    return res.status(201).json({ user });
  } catch (e) {
    next(e);
  }
});

module.exports = router;