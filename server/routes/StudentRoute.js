const express = require("express");

const promisePool = require("../lib/dbConfig");
const arrageData = require("../helpers/DataArrange");
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

//Get requests - separate
StudentsRouter.get("/class/6", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    "SELECT `category`,`boys`,`girls`,`section` from `zbnhs_students` left join `zbnhs_classes` on `zbnhs_classes`.id=`zbnhs_students`.classID where `zbnhs_classes`.class = 6"
  );
  const arrangedData = arrageData(rows, 6);

  return res.json(arrangedData);
});

//Get requests - Dynamic

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
