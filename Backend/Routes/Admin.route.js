const express = require("express");
const AuthModel = require("../Models/Auth.Model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const AdminRouter = express.Router();
const jwt = require("jsonwebtoken");
const AdminModel = require("../Models/Admin.model");



AuthRouter.post("/register", async (req, res) => {
    let { name, email, password,adminID ,adminPass } = req.body;
 
    try {
      let existingUser = await AdminModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      } else {
        let newuser = new AuthModel({ name, email, password });
        bcrypt.hash(password, saltRounds, async function (err, hash) {
          if (err) {
            return res.status(500).json({ msg: "Internal server error" });
          } else {
            newuser.password = hash;
            await newuser.save();
            return res
              .status(201)
              .json({
                msg: "User created",
                data: newuser,
                token: jwt.sign({ data: newuser }, "adminuser"),
              });
          }
        });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });

AdminRouter.post("/login", async (req, res) => {
    let { email, password } = req.body;
    try {

        bcrypt.compare(password, user.password, async function (err, result) {
          if (result) {
            return res
              .status(201)
              .json({
                msg: "User loggedIn Successfully",
                data: user,
                token: jwt.sign({ data: user }, "adminuser"),
              });
          } else {
            return res.status(500).json({ msg: err.message });
          }
        });
      
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });

  module.exports=AdminRouter