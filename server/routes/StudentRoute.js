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

StudentsRouter.get("/class/7", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    "SELECT `category`,`boys`,`girls`,`section` from `zbnhs_students` left join `zbnhs_classes` on `zbnhs_classes`.id=`zbnhs_students`.classID where `zbnhs_classes`.class = 7"
  );

  const arrangedData = arrageData(rows, 7);

  return res.json(arrangedData);
});

StudentsRouter.get("/class/8", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    "SELECT `category`,`boys`,`girls`,`section` from `zbnhs_students` left join `zbnhs_classes` on `zbnhs_classes`.id=`zbnhs_students`.classID where `zbnhs_classes`.class = 8"
  );

  const arrangedData = arrageData(rows, 8);

  return res.json(arrangedData);
});

StudentsRouter.get("/class/9", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    " SELECT `group`,`section`,`category`,`boys`,`girls` FROM `zbnhs_students` LEFT JOIN `zbnhs_classes` ON `zbnhs_classes`.id = `zbnhs_students`.classID WHERE `zbnhs_classes`.class = 9 "
  );

  const arrangedData = arrageData(rows, 9);

  return res.json(arrangedData);
});

StudentsRouter.get("/class/10", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    " SELECT `group`,`section`,`category`,`boys`,`girls` FROM `zbnhs_students` LEFT JOIN `zbnhs_classes` ON `zbnhs_classes`.id = `zbnhs_students`.classID WHERE `zbnhs_classes`.class = 10 "
  );

  const arrangedData = arrageData(rows, 9);

  return res.json(arrangedData);
});

// Get request from dashboard
StudentsRouter.post("/info", CheckVerification, async (req, res) => {
  try {
    const { cls, group, section } = req.body;
    console.log(cls, group, section);

    const [rows, fields] = await promisePool.query(
      "SELECT `category`,`boys`,`girls` FROM `zbnhs_students` LEFT JOIN `zbnhs_classes` ON `zbnhs_classes`.id=`zbnhs_students`.classID WHERE `zbnhs_classes`.class=? AND `zbnhs_classes`.group=? AND `zbnhs_classes`.section=?",
      [cls, group, section]
    );
    if (rows.length > 0) {
      return res.json(rows);
    } else {
      return res.json({ message: "Something went wrong", severity: "warning" });
    }
  } catch (err) {
    console.log(err);
  }
});

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
