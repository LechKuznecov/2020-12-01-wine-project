const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

router.post("/login", middleware.userValidation, (req, res) => {
  const email = req.body.email;
  con.query(
    `SELECT * FROM users WHERE email = ${mysql.escape(email)}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json({ msg: "Internal server error gathering user details" });
      } else if (result.length !== 1) {
        return res.status(400).json({
          msg: "The provided details are incorrect or the user does not exist",
        });
      } else {
        bcrypt.compare(
          req.body.password,
          result[0].password,
          (bErr, bResult) => {
            if (bErr || !bResult) {
              return res.status(400).json({
                msg:
                  "The provided details are incorrect or the user does not exist",
              });
            } else if (bResult) {
              const token = jwt.sign(
                {
                  userId: result[0].id,
                  email: result[0].email,
                },
                process.env.SECRET_KEY,
                {
                  expiresIn: "7d",
                }
              );

              return res.status(200).json({
                msg: "Logged In",
                token,
                userData: {
                  userId: result[0].id,
                  email: result[0].email,
                },
              });
            }
          }
        );
      }
    }
  );
});

router.get("/viewWineTypes", middleware.isLoggedIn, (req, res) => {
  con.query("SELECT * FROM wines", (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ msg: "Issue retrieving wine types" });
    } else {
      res.json(result);
    }
  });
});

router.post("/addWineType", middleware.isLoggedIn, (req, res) => {
  if (req.body.name && req.body.region && req.body.type && req.body.year) {
    con.query(
      `INSERT INTO wines (name, region, type, year, user_added) VALUES (${mysql.escape(
        req.body.name
      )}, ${mysql.escape(req.body.region)}, ${mysql.escape(
        req.body.type
      )}, ${mysql.escape(req.body.year)})`,
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(400).json({ msg: "Server error adding wines" });
        } else {
          console.log(result);
          return res.status(201).json({ msg: "Wine Type succesfully added!" });
        }
      }
    );
  } else {
    return res.status(400).json({ msg: "Passed values are incorrect" });
  }
});

module.exports = router;
