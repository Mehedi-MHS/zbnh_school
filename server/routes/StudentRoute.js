const express = require("express");

const promisePool = require("../lib/dbConfig");
const StudentsRouter = express.Router();

function CheckVerification(req, res, next) {
  if (req.session.userName && req.session.userName.length > 0) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "You are not allowed to access this content!" });
  }
}

//Class 6
StudentsRouter.post("/class6", CheckVerification, (req, res) => {
  //console.log(req.body);
  return res.json({ message: JSON.stringify(req.body[0]) });
});

//Class 7
StudentsRouter.post("/class7", CheckVerification, (req, res) => {
  //console.log(req.body);
  return res.json({ message: JSON.stringify(req.body[0]) });
});
//Class
StudentsRouter.post("/class8", CheckVerification, (req, res) => {
  //console.log(req.body);
  return res.json({ message: JSON.stringify(req.body[0]) });
});

module.exports = StudentsRouter;
