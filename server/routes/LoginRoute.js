const express = require("express");
const LoginRouter = express.Router();
const promisePool = require("../lib/dbConfig");
const bcrypt = require("bcryptjs");
//use session to block login for 5 minutes
function blockLogin(req, res, next) {
  /*
    if (!req.session.wrongTry) {
    next();
  } else if (req.session.wrongTry && req.session.wrongTry >= 5) {
    setTimeout(function () {
      req.session.wrongTry = 0;
    }, 5 * 60 * 1000);
    return res.json({
      message: "Too many wrong login, Please try again 5 minutes later!",
      severity: "warning",
    });
  }
  */
  next();
}
LoginRouter.post("/", blockLogin, async (req, res) => {
  const { name, password } = req.body;
  if (name.length == 0 || password.length == 0) {
    return res.json({
      message: "Please fill all the fields and try again!",
      severity: "warning",
    });
  }

  //collect info from db
  const [rows, fields] = await promisePool.query(
    "SELECT `name`,`password` FROM zbnhs_admin WHERE `id`=?",
    [1]
  );
  const db_userName = rows[0].name,
    db_userPassword = rows[0].password;
  const hashedPassword = hashPassword(password);
  const isSamePassword = bcrypt.compare(hashedPassword, db_userPassword);
  if (db_userName === name && isSamePassword == true) {
    req.session.userName = name;
    req.session.cookie.maxAge = 10 * 60 * 1000; //10 minute
    console.log(
      "name:",
      name,
      "pwd:",
      password,
      "dbName",
      db_userName,
      "dbpwd",
      db_userPassword,
      "hashedPassword:",
      hashedPassword
    );
    return res.json({ message: "Successfully logged in", severity: "success" });
  } else {
    //set wrong try in session
    if (req.session.wrongTry) {
      req.session.wrongTry++;
    } else {
      req.session.wrongTry = 1;
    }
    return res.json({
      message: "Incorrect username or password!",
      severity: "warning",
    });
  }
});

function hashPassword(str) {
  const salt = bcrypt.genSalt(10);
  const hash = bcrypt.hash(str, salt);
  return hash;
}
module.exports = LoginRouter;
