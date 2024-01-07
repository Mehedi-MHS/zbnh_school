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
StudentsRouter.post("/edit", CheckVerification, async (req, res) => {
  console.log(req.body);
  if (!req.body.serverData && !req.body.classInfo) {
    return res.json({
      message: "Missing Data! please try again",
      severity: "warning",
    });
  }
  const st = req.body.serverData;
  const cl = req.body.classInfo;
  const sql =
    "UPDATE `zbnhs_students` LEFT JOIN `zbnhs_classes` ON `zbnhs_classes`.id=`zbnhs_students`.classID SET `zbnhs_students`.boys=(CASE `category` WHEN 'total' THEN ? WHEN 'muslim' THEN ? WHEN 'hindu' THEN ? WHEN 'stipend' THEN ? WHEN 'merit_stipend' THEN ? WHEN 'repeater' THEN ? WHEN 'transfer_in' THEN ? WHEN 'transfer_out' THEN ? WHEN 'final_attendence' THEN ? WHEN 'final_promotion' THEN ? end),`zbnhs_students`.girls=(CASE `category` WHEN 'total' THEN ? WHEN 'muslim' THEN ? WHEN 'hindu' THEN ? WHEN 'stipend' THEN ? WHEN 'merit_stipend' THEN ? WHEN 'repeater' THEN ? WHEN 'transfer_in' THEN ? WHEN 'transfer_out' THEN ? WHEN 'final_attendence' THEN ? WHEN 'final_promotion' THEN ? end) WHERE `zbnhs_classes`.class=? AND `zbnhs_classes`.section=? AND `zbnhs_classes`.group=?";
  const [rows, fields] = await promisePool.query(sql, [
    st.total.boys,
    st.muslim.boys,
    st.hindu.boys,
    st.stipend.boys,
    st.merit_stipend.boys,
    st.repeater.boys,
    st.transfer_in.boys,
    st.transfer_out.boys,
    st.final_attendence.boys,
    st.final_promotion.boys,
    st.total.girls,
    st.muslim.girls,
    st.hindu.girls,
    st.stipend.girls,
    st.merit_stipend.girls,
    st.repeater.girls,
    st.transfer_in.girls,
    st.transfer_out.girls,
    st.final_attendence.girls,
    st.final_promotion.girls,
    cl.class,
    cl.section,
    cl.group,
  ]);
  if (rows.affectedRows > 0) {
    return res.json({ message: "Updated successfully!", severity: "success" });
  }
});
module.exports = StudentsRouter;
