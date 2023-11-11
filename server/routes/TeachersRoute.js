const express = require("express");

const promisePool = require("../lib/dbConfig");
const TeachersRouter = express.Router();

TeachersRouter.get("/", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    "SELECT `id`,`fullName`,`designation`,`imageURL` FROM `zbnhs_teachers`"
  );

  res.json(rows);
});

//profile route
TeachersRouter.get("/profile/:id", async (req, res) => {
  const teacherId = req.params.id;
  const [rows, fields] = await promisePool.query(
    "SELECT * FROM `zbnhs_teachers` WHERE `id`=?",
    [teacherId]
  );

  //    console.log("teacher Id: ", teacherId);
  //Remove this demo section in production mode
  /*
  const demoInfo = [
    {
      id: 1,
      picUrl: "",
      fullName: "MD Ismail Chowdhury",
      designation: "HeadMaster",
      fathersName: "",
      mothersName: "",
      gender: "Male",
      education: "M.Sc",
      religion: "Islam",
      dateOfBirth: "",
      contact: "+880123569870",
      email: "zbnhs@gmail.com",
      bloodGroup: "D(+ve)",
      joined: "1 Jan 2001",
    },
    {
      id: 2,
      picUrl: "",
      fullName: "Rahmat Ullah Sujon",
      designation: "State HeadMaster",
      fathersName: "",
      mothersName: "",
      gender: "Male",
      education: "M.Sc",
      religion: "Islam",
      dateOfBirth: "",
      contact: "+880123569870",
      email: "zbnhs@gmail.com",
      bloodGroup: "D(+ve)",
      joined: "1 Jan 2002",
    },
  ];
  */

  return res.json(rows);
});
module.exports = TeachersRouter;
