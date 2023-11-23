const express = require("express");
const LoginRouter = express.Router();
const promisePool = require("../lib/dbConfig");
const bcrypt = require("bcryptjs");

LoginRouter.post("/", async (req, res, next) => {
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

LoginRouter.post("/verify", async (req, res) => {
  const sessionUser = await req.session.userName;
  console.log("session username:", sessionUser, "code:", req.body.code);
  if (sessionUser && req.body.code == "zbnhs#secret") {
    /*    const [rows, fields] = await promisePool.query(
      "SELECT `name` FROM `zbnhs_admin`WHERE `id`=?",
      [1]
    );
    if (rows.affectedRows > 0) {
      const name = rows[0].name;
      console.log("name-db:", name);
      if (name == req.sessionUser) {
        return res.json({ isVerified: true });
      } else {
        return res.json({ isVerified: false });
      }
    }
    */
    return res.json({ isVerified: true });
  } else {
    return res.json({ isVerified: false });
  }
});

module.exports = LoginRouter;
