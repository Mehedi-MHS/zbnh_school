const express = require("express");
const TeachersRouter = express.Router();

TeachersRouter.get("/", (req, res) => {
  const DemoTeacherList = [
    {
      id: 1,
      name: "MD Ismail Chowdhury",
      designation: "Headmaster",
      pic: "",
      profile_url: "",
    },
    {
      id: 6,
      name: "Rahmat Ullah Sujon",
      designation: "State Headmaster",
      pic: "",
      profile_url: "",
    },
    {
      id: 3,
      name: "Omor Faruk",
      designation: "Senior IT teacher",
      pic: "",
      profile_url: "",
    },
    {
      id: 4,
      name: "Teacher4",
      designation: "Assistant English Teacher ",
      pic: "",
      profile_url: "",
    },
    {
      id: 5,
      name: "Teacher5",
      designation: "Guest Teacher",
      pic: "",
      profile_url: "",
    },
  ];
  res.json(DemoTeacherList);
});

//profile route
TeachersRouter.get("/profile/:id", (req, res) => {
  const teacherId = req.params.id;
  console.log("teacher Id: ", teacherId);
  //Remove this demo section in production mode

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
  res.json(
    demoInfo.filter((info) => {
      return info.id == teacherId;
    })
  );
});
module.exports = TeachersRouter;
