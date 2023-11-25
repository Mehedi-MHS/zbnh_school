const express = require("express");
const LoginRouter = express.Router();
const promisePool = require("../lib/dbConfig");
const bcrypt = require("bcryptjs");

LoginRouter.post("/", async (req, res) => {
  const { name, password } = req.body;
  console.log("from client:", name, "-", password);
  if (name.length === 0 || password.length === 0) {
    return res.json({
      message: "Please fill all the fields and try again!",
      severity: "warning",
      success: false,
    });
  }

  // Collect info from db
  const [rows, fields] = await promisePool.query(
    "SELECT `name`,`password` FROM zbnhs_admin WHERE `id`=?",
    [1]
  );
  const db_userName = rows[0].name;
  const db_userPassword = rows[0].password;
  console.log("db:", db_userName, "-", db_userPassword);
  // Validate credentials
  const isSamePassword = await bcrypt.compare(password, db_userPassword);
  if (db_userName === name && isSamePassword) {
    // Set session username before calling verifySession
    req.session.userName = name;

    return res.json({
      success: true,
      severity: "success",
      message: "Successfully logged in",
    });
  } else {
    return res.json({
      message: "Incorrect username or password!",
      severity: "warning",
      success: false,
    });
  }
});

LoginRouter.post("/verify", (req, res) => {
  console.log("verify: req.session.userName:", req.session.userName);
  if (req.session.userName) {
    console.log("verified:true");
    return res.json({ isVerified: true });
  } else {
    console.log("verified:false");
    return res.json({ isVerified: false });
  }
});

module.exports = LoginRouter;

/*
const express = require("express");
const LoginRouter = express.Router();
const promisePool = require("../lib/dbConfig");
const bcrypt = require("bcryptjs");

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

  //console.log("password:", password, "- hashed:", hashedPassword);
  const isSamePassword = await bcrypt.compare(password, db_userPassword);
  if (db_userName === name && isSamePassword) {
    req.session.userName = name;
    console.log("login:session username:", req.session.userName);
    res.setHeader("Access-Control-Allow-Credentials", true);
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

LoginRouter.post("/verify", (req, res) => {
  console.log("isVerified:", req.verifySession());
  if (!req.verifySession()) {
    return res.json({ isVerified: false });
  } else {
    return res.json({ isVerified: true });
  }
});

module.exports = LoginRouter;
*/
