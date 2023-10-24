const express = require("express");
const HomeRouter = express.Router();

HomeRouter.get("/notice", (req, res) => {
  const demoNotice = [
    {
      id: 1,
      title: "Post No 1 Lorem Ipusm Dolor Sit amet codfhd jjfljodfd ",
      date: "21 Sep 2023",
      file: "/file1",
    },
    {
      id: 2,
      title: "Post No 1 Lorem Ipusm Dolor",
      date: "21 Sep 2023",
      file: "/file1",
    },
    {
      id: 3,
      title: "Post No 1 Lorem Ipusm Dolor",
      date: "21 Sep 2023",
      file: "/file1",
    },

    {
      id: 4,
      title: "Post No 1 Lorem Ipusm Dolor",
      date: "21 Sep 2023",
      file: "/file1",
    },

    {
      id: 5,
      title: "Post No 1 Lorem Ipusm Dolor",
      date: "21 Sep 2023",
      file: "/file1",
    },

    {
      id: 6,
      title: "Post No 1 Lorem Ipusm Dolor",
      date: "21 Sep 2023",
      file: "/file1",
    },
  ];

  res.json(demoNotice);
});

HomeRouter.get("/teachers", (req, res) => {
  const DemoTeacherList = [
    {
      id: 1,
      name: "MD Ismail Chowdhury",
      designation: "Headmaster",
      pic: "",
      profile_url: "",
    },
    {
      id: 2,
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

module.exports = HomeRouter;
