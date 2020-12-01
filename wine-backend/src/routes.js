const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const middleware = require("./middleware");
const con = require("./db");

router.get("/", (req, res) => {
  res.send("The API service works!");
});

router.post("/register", middleware.userValidation, (req, res) => {
  const email = req.body.email;
  con.query(
    `SELECT * FROM users WHERE email = ${mysql.escape(email)}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json({ msg: "Internal server error checking email validity" });
      } else if (result.length !== 0) {
        return res.status(400).json({ msg: "This email already registered!" });
      } else {
        bcrypt.hash(req.body.password, 7, (err, hash) => {
          if (err) {
            console.log(err);
            return res
              .status(400)
              .json({ msg: "Internal server error hashing email details" });
          } else {
            con.query(
              `INSERT INTO users (email, password) VALUES (${mysql.escape(
                email
              )}, ${mysql.escape(hash)})`,
              (err, result) => {
                if (err) {
                  console.log(err);
                  return res
                    .status(400)
                    .json({ msg: "Internal server error saving your details" });
                } else {
                  return res
                    .status(201)
                    .json({ msg: "User has been succesfully registered" });
                }
              }
            );
          }
        });
      }
    }
  );
});

module.exports = router;
