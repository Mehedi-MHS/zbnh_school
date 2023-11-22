const express = require("express");
const LoginRouter = express.Router();
const promisePool = require("../lib/dbConfig");
const bcrypt = require("bcryptjs");
const CheckLogin = require("../helpers/CheckLogin");

LoginRouter.post("/", async (req, res) => {
  const { name, password } = req.body;
  if (name.length == 0 || password.length == 0) {
    return res.json({
      message: "Please fill all the fields and try again!",
      severity: "warning",
      success: false,
    });
  }

  //collect info from db
  const [rows, fields] = await promisePool.query(
    "SELECT `name`,`password` FROM zbnhs_admin WHERE `id`=?",
    [1]
  );
  const db_userName = rows[0].name,
    db_userPassword = rows[0].password;
  /*
    const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  */
  //console.log("password:", password, "- hashed:", hashedPassword);
  const isSamePassword = await bcrypt.compare(password, db_userPassword);
  if (db_userName === name && isSamePassword) {
    req.session.userName = name;
    req.session.cookie.maxAge = 10 * 60 * 1000; //10 minute
    req.session.save((err) => {
      console.log(err);
    });
    console.log(
      "name:",
      name,
      "pwd:",
      password,
      "dbName",
      db_userName,
      "dbpwd",
      db_userPassword
    );
    return res.json({
      message: "Successfully logged in",
      severity: "success",
      success: true,
    });
  } else {
    return res.json({
      message: "Incorrect username or password!",
      severity: "warning",
      success: false,
    });
  }
});

LoginRouter.post("/verify", async (req, res) => {
  const isVerified = await CheckLogin(req, res, req.body.code);
  console.log("isverified:", isVerified);
  if (isVerified) {
    return res.json({ isVerified: true });
  } else {
    return res.json({ isVerified: false });
  }
});

module.exports = LoginRouter;
